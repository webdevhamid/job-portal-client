import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs?email=${user.email}`, { withCredentials: true })
      .then((res) => setJobs(res.data));
    //
  }, [user.email]);

  console.log(jobs);
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
            <th>Applications</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>Quality Control Specialist</td>
              <td>{job.status}</td>
              <td>{job.totalApplicant ? job.totalApplicant : 0}</td>
              <td>
                <Link to={`/viewApplications/${job._id}`}>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    View Applications
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJobs;
