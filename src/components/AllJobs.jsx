import React, { useEffect, useState } from "react";

function AllJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getjobs();
  }, []);

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
      <h1>All jobs Available</h1>
      {jobs.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
}

export default AllJobs;
