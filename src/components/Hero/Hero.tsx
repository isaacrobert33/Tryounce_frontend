import { SpecialHeading } from "../../components/index";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="container py-20 flex items-center justify-center mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        variants={itemVariants} // Apply variants to child elements
      >
        <motion.button
          className="text-black text-[13px] text-center bg-white border border-[#CECCCC70] rounded-[38px] px-[20px] py-[10px]"
          style={{ boxShadow: "0px 4px 2px 0px #00000005" }}
          variants={itemVariants}
        >
          Join Thousands of Freelancers Today
        </motion.button>
        <SpecialHeading
          className="text-black !font-semibold lg:!text-[64px] text-left lg:!leading-[67px]"
        >
          Work without limits, <br />
          Grow without borders.
        </SpecialHeading>
        <motion.p
          className="text-[#6C6C6C] font-normal text-base sm:text-xl text-center leading-3"
          variants={itemVariants}
        >
          Where talents and the world collaborate, grow and thrive together
        </motion.p>
        <motion.button
          className="bg-black text-white rounded-full px-5 py-3 cursor-pointer leading-[22px] text-center" onClick={() => navigate('/onboarding')}
          variants={itemVariants}
        >
          Create Account
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
