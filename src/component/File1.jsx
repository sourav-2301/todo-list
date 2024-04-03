import React, { useState } from "react";

export default function File1() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    setDesc("")
    setTitle("")
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)

  }



  let defaultTask = <h2 className=" text-g"> No task added yet</h2>


  if (mainTask.length > 0) {


    defaultTask = mainTask.map((t, i) => {
      return (

        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between  mb-5 w-2/3">
            <h5 className=" text-xl font-semibold">{t.title}</h5>


            <h5 style={{ marginLeft: "15em" }} className=" text-lg  font-semibold">{t.desc}</h5>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }}
            className="bg-red-500 text-white px-4 py-2 rounded  font-bold"> Delete</button>
        </li>

      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl text-center">  My Todo List</h1>

      <form onSubmit={submitHandler}>

        <input type="text" className="text-2xl border-zinc-800 border-2  m-5  py-2 px-4" placeholder="Enter Title here " value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />

        <input type="text" className="text-xl border-zinc-800 border-2  m-5  py-2 px-4" placeholder="Enter Description  here " value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button className="bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>

      <hr />
      <div className=" p-8 bg-slate-100" >
        <ul>
          {defaultTask}
        </ul>
      </div>
    </>
  )
}