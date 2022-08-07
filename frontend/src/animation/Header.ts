import { Variants } from "framer-motion";

export const overlay: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.1 } },
};

export const panel: Variants = {
  hidden: {
    translateX: -100,
    opacity: 0,
    transition: { duration: 0.3 },
  },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: { duration: 0.1 },
  },
};
