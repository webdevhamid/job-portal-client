import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs`)
      .then((res) => res.json())
      .then((result) => {
        setJobs(result);
      });
  }, []);

  console.log(jobs);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
