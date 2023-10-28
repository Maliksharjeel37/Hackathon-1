"use client";
import Navber from "../(componets)/SideNavber/navber";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/Md";
import { RxUpdate } from "react-icons/Rx";
import Modal from"../(componets)/modalAttan/modal"
import { db } from "@/config/firebase";
export default function Attandence() {
  const [student, setstudent] = useState();
  /* ========= getData=====*/
  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "students");
      const docs = await getDocs(collectionName);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setstudent(studentData);
      console.log("student", studentData);
    } catch (error) {
      console.log("erroe", error);
    }
  };
  useEffect(() => {
    fetchDocs();
  }, []);
  /* ========= deleteData=====*/

  const deletedata = async (id) => {
    try {
      const docRef = doc (db, "students", id);
      await deleteDoc(docRef);
      fetchDocs();

      // const NewStudents = student.filter((student) => id !== student.id);
      // student(NewStudents);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-div flex bg-slate-500">
      <div className="navber">
        <Navber />
      </div>
      <form className=" text-center">
        <div className="table text-center ml-[20px]">
          <div className="Attandence-card  mt-[120px]  ">
            <h1 className=" text-black text-xl mb-5">Attandence</h1>

            <table className="   border-2  border-black ">
              <thead>
                <tr className=" text-black flex border-b-2 border-black bg-purple-900   ">
                  <div>
                    <td className=" text-2xl  border-r-2 border-black w-[190px] ">
                      Name
                    </td>
                  </div>
                  <div>
                    <td className=" text-justify text-2xl border-r-2 border-black w-[240px]">
                      Email
                    </td>
                  </div>

                  <div>
                    <td className=" text-justify text-2xl  border-black w-[150px]  border-r-2">
                      Date
                    </td>
                  </div>
                  <div>
                    <td className=" text-justify text-2xl border-r-2 border-black w-[100px]">
                      Roll
                    </td>
                  </div>
                  <div>
                    <td className=" text-justify text-2xl  border-black w-[100px] border-r-2">
                      Delete
                    </td>
                  </div>
                  <div>
                    <td className=" text-justify text-2xl  border-black w-[100px]">
                      UpDate
                    </td>
                  </div>
                </tr>
              </thead>
              {student?.map((student) => {
                return (
                  <tbody>
                    <tr className=" text-black flex border-b-2 border-black ">
                      <div className="w-[191px] border-r-2 border-black text-lg  ">
                        <td>{student.name}</td>
                      </div>
                      <div className="w-[240px] border-r-2 border-black text-lg">
                        <td>{student.email}</td>
                      </div>
                      <div className="border-black w-[152px] border-r-2">
                        <td>{student.date}</td>
                      </div>
                      <div className=" border-black w-[101px] border-r-2">
                        <td>{student.roll}</td>
                      </div>
                      <div className="border-black w-[100px] border-r-2">
                        <button>
                          <MdDeleteForever
                            onClick={() => deletedata(student.id)}
                          />
                        </button>
                      </div>
                      <div className=" ">
                        <button
                          className="     border-black w-[90px]"
                          onClick={() => deletedata(student.id)}
                        >
                          <RxUpdate className=" mx-8" />
                        </button>
                      </div>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </form>
      < Modal/>
    </div>
  );
}
