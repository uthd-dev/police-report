import "tailwindcss/tailwind.css";
import { AnimateSharedLayout } from "framer-motion";

export default function Main({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}
