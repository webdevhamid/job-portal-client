import Swal from "sweetalert2";
import useAuth from "./../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleFormData = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { max, min, currency, ...newJob } = initialData;

    newJob.salaryRange = { min, max, currency };

    newJob.requirements = newJob.requirements.split("\n");

    newJob.responsibilities = newJob.responsibilities.split("\n");

    console.log(newJob);

    fetch(`http://localhost:3000/jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "You job has been added!",
            icon: "success",
          });
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div className="w-[900px] mx-auto bg-slate-100 py-5">
      <h1 className="text-4xl text-center font-bold m-3">Add New Job</h1>
      <form className="card-body" onSubmit={handleFormData}>
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered"
            required
            name="title"
          />
        </div>
        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="Job Location"
            className="input input-bordered"
            required
            name="location"
          />
        </div>
        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue="Select job type"
            className="select select-bordered w-full max-w-xs"
            name="jobType"
            required
          >
            <option disabled>Select job type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Intern</option>
            <option>Hybrid</option>
          </select>
        </div>
        {/* Job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Category</span>
          </label>
          <select
            defaultValue="Select your job Category"
            className="select select-bordered w-full max-w-xs"
            name="category"
            required
          >
            <option disabled>Select your job Category</option>
            <option>IT</option>
            <option>Design</option>
            <option>Engineering</option>
            <option>Product Manager</option>
            <option>HR</option>
            <option>Content Writer</option>
          </select>
        </div>
        {/* Application Deadline */}
        <div className="form-control w-48">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            placeholder="Enter your application deadline"
            name="applicationDeadline"
            required
          />
        </div>
        {/* Salary Range */}
        <p className="mt-3">Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input
              type="text"
              placeholder="Min"
              className="input input-bordered"
              required
              name="min"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
              type="text"
              placeholder="Max"
              className="input input-bordered"
              required
              name="max"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Currency</span>
            </label>
            <select
              defaultValue="Select your currency"
              className="select select-bordered w-full max-w-xs"
              name="currency"
              required
            >
              <option disabled>Select your currency</option>
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>
        {/* company */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="Company"
            className="input input-bordered"
            required
            name="company"
          />
        </div>
        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write each requirement in a new line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* Job Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write each responsibility in a new line"
            name="responsibilities"
            required
          ></textarea>
        </div>
        {/* Job Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Status</span>
          </label>
          <select
            defaultValue={"status"}
            className="select select-bordered w-full max-w-xs"
            name="status"
            required
          >
            <option disabled>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            name="hr_email"
            defaultValue={user?.email}
          />
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="HR Name"
            className="input input-bordered"
            required
            name="hr_name"
          />
        </div>
        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="url"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
            name="company_logo"
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-neutral" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
