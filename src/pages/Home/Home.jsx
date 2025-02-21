import { useLocation } from "react-router-dom";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Hero />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
