import { FaMoneyCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    applicationDeadline,
    company_logo,
    description,
    jobType,
    location,
    requirements,
    salaryRange,
  } = job || {};
  return (
    <div className="card p-8 border rounded-xl">
      <div className="flex items-center gap-3 mb-5">
        <figure className="w-[50px]">
          <img src={company_logo} alt={company} className="w-full" />
        </figure>
        <div>
          <h4 className="text-xl">{title}</h4>
          <p className="">{location}</p>
        </div>
      </div>
      <div className="card-body p-0">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center">
          <p>{jobType}</p>
          <p>Deadline: {applicationDeadline}</p>
        </div>
        <p>{description}</p>
        <div>
          <div className="flex flex-wrap gap-3">
            {requirements.map((skill, i) => (
              <button key={i} className="btn btn-sm text-xs">
                {skill}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm flex items-center gap-2">
              <span>
                <FaMoneyCheck />
              </span>
              <span>
                {salaryRange.min}-{salaryRange.max} BDT
              </span>
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-accent">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
