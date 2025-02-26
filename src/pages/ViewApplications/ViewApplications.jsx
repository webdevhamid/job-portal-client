import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();
  console.log(applications);

  const handleUpdateStatus = (e, id) => {
    console.log(e.target.value, id);

    const updatedStatus = {
      status: e.target.value,
    };

    fetch(`http://localhost:3000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status has been updated!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  return (
    <div>
      <div className="text-4xl font-bold text-center m-3">
        View Applications: {applications.length}
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {
              applications.map((application, index) => (
                <tr key={application._id}>
                  <th>{index + 1}</th>
                  <td>{application.applicant_email}</td>
                  <td>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      onChange={(e) => handleUpdateStatus(e, application._id)}
                      defaultValue={application.status || "Select Status"}
                    >
                      <option disabled>Select Status</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))
              //  <tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
