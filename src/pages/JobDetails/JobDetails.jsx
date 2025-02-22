import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, description, company } = useLoaderData();
  console.log(_id);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="my-10">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p>{description}</p>
        <p className="font-bold text-3xl">{company}</p>
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-accent">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
