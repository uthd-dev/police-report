import Link from "next/link";
import { motion } from "framer-motion";

export default function ReportCard({ id, date, location }) {
  return (
    <Link href={`/reports/${id}`}>
      <a>
        <motion.div
          className="w-full h-28 sm:h-20 flex flex-wrap sm:flex-nowrap items-center justify-between bg-gray-100 rounded-lg shadow-lg mt-5 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm w-22 sm:ml-20 mt-1 ml-2 sm:m-5 font-mono">
            Id: {id}
          </p>
          <div className="h-full flex items-center ml-2 sm:m-5">
            <p className="text-sm mr-5 font-mono">
              Locality: {location.locality}
            </p>
            <p className="text-sm mr-5 font-mono ml-2 sm:m-5">Date: {date}</p>
          </div>
        </motion.div>
      </a>
    </Link>
  );
}
