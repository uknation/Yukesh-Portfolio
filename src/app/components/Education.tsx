
import { motion } from "motion/react";
import { fadeInUpLeft } from "../data/variants";
import { education } from "../data/data";

const Education = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="pb-4 border-b border-neutral-600"
    >
      <h3 className="text-lg text-neutral-100 font-semibold mb-4">Education</h3>
      {education.map((edu, index) => (
        <div key={index} className="flex flex-col mb-4">
          <p className="text-neutral-100 text-sm flex justify-between">
            <span className="font-semibold">{edu.college}</span>
            <span>{edu.duration}</span>
          </p>
          <p className="text-neutral-100 text-sm flex justify-between">
            <span>{edu.course}</span>
            <span>CGPA: {edu.cgpa}</span>
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default Education;
