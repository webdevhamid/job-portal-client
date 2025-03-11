import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));

    axios
      .get(`http://localhost:3000/job-application?email=${user.email}`, { withCredentials: true })
      .then((res) => setJobs(res.data));
    //
  }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl">My Applications {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <p>{job.title}</p>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
