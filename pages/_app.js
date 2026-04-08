import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div style={appWrapper}>
      {/* mode="wait" ko hata diya taaki delay kam ho */}
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.3, // Speed badha di (0.6 to 0.3)
            ease: "easeOut" 
          }}
          variants={{
            initialState: {
              opacity: 0,
              y: 5 // Subtle movement
              // Blur hata diya - Yeh hi speed rok raha tha
            },
            animateState: {
              opacity: 1,
              y: 0
            },
            exitState: {
              opacity: 0,
              y: -5
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #050b14;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        ::selection {
          background: #4facfe;
          color: #000;
        }
        /* Optimized Scrollbar */
        ::-webkit-scrollbar {
          width: 5px;
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
  overflowX: "hidden",
  background: "#050b14"
};
