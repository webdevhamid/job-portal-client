import { motion } from "motion/react";
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-[600px] mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <div className="flex-1">
          <motion.img
            src={heroImage}
            className="object-cover justify-self-center rounded-bl-none rounded-[70px] shadow-2xl w-[500px] border-[20px] border-r-0 border-t-0 border-blue-500"
            animate={{ y: [0, 50, 0] }}
            // initial={{ x: 40 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="flex-1 md:mt-10 lg:mt-0 md:text-center lg:text-left">
          <motion.h1
            animate={{ y: 10 }}
            initial={{ y: 50 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
            className="text-5xl font-bold"
          >
            Explore latest{" "}
            <motion.span
              animate={{ color: ["#e02312", "#e09512", "#9512e0"] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
