import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SiJavascript,
  SiChakraui,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

const ProjectSingle = ({ title, category, image, tech, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}>
      <a href={url} target="__blank">
        <div
          className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          style={{ height: "100%", width: "100%", objectFit: "fill" }}>
          <div>
            <img
              style={{ height: "300px", width: "100%", objectFit: "contain" }}
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <p className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </p>
            <div className="text-lg flex gap-2 text-ternary-dark dark:text-ternary-light">
              {tech?.frameWork === "React-JS" ? <SiReact /> : <SiJavascript />}
              {tech?.cssFrameWork === "Tailwind-CSS" ? (
                <SiTailwindcss />
              ) : tech?.cssFrameWork === "Chakra-UI" ? (
                <SiChakraui />
              ) : tech?.cssFrameWork === "bootstrap" ? (
                <SiBootstrap />
              ) : (
                ""
              )}
              {tech?.backend === "express" ? <SiExpress /> : ""}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectSingle;
