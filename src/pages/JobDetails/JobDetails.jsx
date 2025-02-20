import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, description, company } = useLoaderData();
  return (
    <div className="my-10">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p>{description}</p>
        <p className="font-bold text-3xl">{company}</p>
        <button className="btn btn-accent">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
