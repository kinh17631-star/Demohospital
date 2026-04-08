import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div style={appWrapper}>
      {/* AnimatePresence ensures smooth exit animations when changing pages */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route} // Router path as key to trigger animation on each page change
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] // Premium Cubic Bezier timing
          }}
          variants={{
            initialState: {
              opacity: 0,
              y: 10,
              filter: "blur(5px)"
            },
            animateState: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            },
            exitState: {
              opacity: 0,
              y: -10,
              filter: "blur(5px)"
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      {/* Global Smooth Scroll Style Hook */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #050b14;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        ::selection {
          background: #4facfe;
          color: #000;
        }
        /* Custom Scrollbar for Premium Feel */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050b14;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e3a5f;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4facfe;
        }
      `}</style>
    </div>
  );
}

const appWrapper = {
  overflowX: "hidden", // Mobile par horizontal scroll issue khatam karne ke liye
  background: "#050b14"
};
