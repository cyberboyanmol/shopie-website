import React, { useEffect } from "react";
import "./Backdrop.scss";
import { motion } from "framer-motion";
const Backdrop = (props) => {
  const { clickEvent } = props;

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "inherit";
    };
  }, []);

  const ClickHandler = () => {
    clickEvent((prev) => !prev);
  };
  return (
    <motion.div
      className="backdrop"
      onClick={ClickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;
