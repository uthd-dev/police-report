import Link from "next/link";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <motion.div
      layout
      className="flex w-screen min-h-screen h-auto bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 bg-fixed p-5"
    >
      <div className="container m-auto bg-gray-50 w-full h-auto rounded-lg shadow-lg p-5 sm:p-20 ">
        <p className="text-sm text-black text-center text-opacity-50 font-mono">
          HACKATHON SUMMERS PRESENTS:
        </p>
        <Link href="/">
          <a>
            <p className="text-5xl text-center text-gray-900 md:text-gray-700">
              Police Reporter
            </p>
          </a>
        </Link>

        {children}

        <motion.p
          className="text-center text-gray-500 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Made with ❤️ by&nbsp;
          <a
            href="https://github.com/uthd-dev"
            className="text-blue-400 hover:underline"
          >
            Aubin Spitzer
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
}
