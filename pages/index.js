import Link from "next/link";
import { motion } from "framer-motion";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:justify-center h-4/5 md:pt-12">
        {/* CREATE REPORT */}
        <div
          id="i-need-help"
          className="flex flex-col justify-center self-center items-center md:self-start w-full h-3/5 m-5 md:pr-10 md:pl-10"
        >
          <motion.p
            className="text-4xl text-gray-700 font-mono font-bold text-center mt-8 md:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            I NEED HELP
          </motion.p>
          <motion.p
            className="text-gray-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            In an uncomfortable police encounter?
          </motion.p>

          <div className="h-4 md:h-8" />

          <Link href="/reports/create">
            <a>
              <motion.div
                className="flex justify-center w-40 h-14 bg-gray-600 m-5 rounded-lg shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0 }}
                layoutId="create-report-button"
              >
                <p className="font-mono text-gray-50 self-center">
                  CREATE REPORT
                </p>
              </motion.div>
            </a>
          </Link>

          <div className="h-0 md:h-8" />

          <motion.p
            className="text-gray-500 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Start a report now! Members of your local community will be able to
            see your location and bear witness ASAP
          </motion.p>
        </div>

        {/* DIVIDER */}
        <div id="" className="flex invisible md:visible">
          <div
            id="divider"
            className="bg-gray-300 w-1 h-full m-auto align-middle rounded-2xl"
          />
        </div>

        <div className="h-10 md:h-0" />

        {/* VIEW REPORTS */}
        <div
          id="i-want-to-help"
          className="flex flex-col justify-center self-center items-center md:self-start w-full h-3/5 m-5 md:pr-10 md:pl-10"
        >
          <motion.p
            className="text-4xl text-gray-700 font-mono font-bold text-center mt-8 md:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I WANT TO HELP
          </motion.p>
          <motion.p
            className="text-gray-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Respond to reports to keep your community safer
          </motion.p>

          <div className="h-4 md:h-8" />

          <Link href="/reports" className=" ">
            <a>
              <motion.div
                className="flex justify-center w-40 h-14 bg-gray-600 self-center m-5 rounded-lg shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0 }}
              >
                <p className="font-mono text-gray-50 self-center">
                  SEE REPORTS
                </p>
              </motion.div>
            </a>
          </Link>

          <div className="h-0 md:h-8" />

          <motion.p
            className="text-gray-500 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Go and record local police encounters to keep everyone safe and
            accountable
          </motion.p>
        </div>
      </div>
    </Layout>
  );
}
