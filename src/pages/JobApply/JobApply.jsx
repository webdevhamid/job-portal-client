import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(id, user);

  const handleJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume, id);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };
    console.log(jobApplication);

    // Submit job application
    fetch(`http://localhost:3000/job-applications`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "You have been successfully applied the job!",
            icon: "success",
          });
          navigate("/myApplications");
        }
      });
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="card bg-base-100 w-full shadow-2xl">
        <h1 className="text-5xl font-bold text-center mt-5">Job Apply</h1>
        <form className="card-body" onSubmit={handleJobApplication}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn URL</span>
            </label>
            <input
              type="url"
              placeholder="LinkedIn URL"
              className="input input-bordered"
              required
              name="linkedin"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github URL</span>
            </label>
            <input
              type="url"
              placeholder="Github URL"
              className="input input-bordered"
              required
              name="github"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="url"
              placeholder="Resume URL"
              className="input input-bordered"
              required
              name="resume"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
