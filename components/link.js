import Link from "next/link";
import { motion } from "framer-motion";

export default function GoHome({ children, href }) {
    return (
      <Link href={href}>
        <a>
          <motion.p
            className="w-auto text-blue-400 m-10 hover:underline text-center mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            layoutId="create-report-goHome"
          >
            {children}
          </motion.p>
        </a>
      </Link>
    );
  }