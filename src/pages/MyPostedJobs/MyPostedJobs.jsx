import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold m-3">My Posted Jobs {jobs.length}</h1>
      <table className="table">
        <thead>
          {/* head */}
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Status</th>
            <th>Total Applicant</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>Quality Control Specialist</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJobs;
