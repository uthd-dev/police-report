import { motion } from "framer-motion";

export default function Message({ children }) {
    return (
      <motion.p
        className="lg:text-2xl text-gray-500 text-center m-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        layoutId="create-report-message"
      >
        {children}
      </motion.p>
    );
  }
  