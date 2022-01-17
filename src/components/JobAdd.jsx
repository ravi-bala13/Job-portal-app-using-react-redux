import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addJobs } from "../Redux/auth/action";

function JobAdd() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const [jobs, setJobs] = useState([]);
  console.log("jobs:", jobs);

  useEffect(() => {
    getjobs();
  }, []);

  const handleAdd = () => {
    fetch("http://localhost:3001/jobs", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ title: title }),
    })
      .then((d) => d.json())
      .then((res) => {
        console.log("res:", res);
        dispatch(addJobs(res));
        getjobs();
      });
  };

  const getjobs = () => {
    fetch("http://localhost:3001/jobs")
      .then((d) => d.json())
      .then((res) => {
        console.log("results:", res);
        setJobs(res);
      });
  };

  return (
    <div>
      <h3>Add job</h3>
      {/* <input type="text" placeholder="" /> */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo name"
      />
      <button onClick={handleAdd}>Add</button>

      {jobs.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
}

export default JobAdd;
