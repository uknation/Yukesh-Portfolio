
"use client";
import { motion } from "motion/react";
import { experience } from "../data/data"; // now an array
import { fadeInUpLeft } from "../data/variants";

const Experience = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="bg-neutral-950 w-full mx-auto pb-4 border-b border-neutral-600"
    >
      <h2 className="text-lg font-semibold mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="gap-4 text-sm">
            <h3 className="text-neutral-100 flex justify-between items-center">
              <span className="font-semibold">{exp.companyName}</span>
              <span>{exp.duration}</span>
            </h3>
            <h3 className="text-neutral-100 flex justify-between items-center">
              <span>{exp.title}</span>
              <span>{exp.location}</span>
            </h3>
          </div>
          <motion.ul
            className="mt-2 space-y-3 text-neutral-100 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {exp.points.map((point, i) => (
              <li key={i} className="border-l-3 border-neutral-200 pl-3">
                {point}
              </li>
            ))}
          </motion.ul>
        </div>
      ))}
    </motion.div>
  );
};

export default Experience;

