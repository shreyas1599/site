import { motion, type MotionProps } from "framer-motion";
import React from "react";

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className,
  ...motionProps
}) => {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
