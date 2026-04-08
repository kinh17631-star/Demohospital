import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Buttons Animation Logic
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <>
      {/* MODERN FLOATING ACTION BUTTON (FAB) */}
      <motion.div 
        whileTap={{ scale: 0.9 }}
        style={hamburger} 
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </motion.div>

      {/* OVERLAY & PANEL */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Blur Effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={backdrop}
            />

            {/* Sidebar Panel */}
            <motion.div 
              style={panel}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div style={contentWrapper}>
                <motion.h3 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={title}
                >
                  Demo <span style={{color: "#4facfe"}}>Hospital</span>
                </motion.h3>
                
                <p style={subTitle}>Quick Assistance</p>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  style={btnGroup}
                >
                  <motion.a 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    href="https://wa.me/919837389977" 
                    style={{ ...btn, background: "#25D366" }}
                  >
                    WhatsApp Support
                  </motion.a>

                  <motion.a 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    href="tel:09837389977" 
                    style={{ ...btn, background: "#0d6efd" }}
                  >
                    Call Helpline
                  </motion.a>

                  <motion.a 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    href="/appointment" 
                    style={{ ...btn, background: "linear-gradient(90deg, #ff4d4d, #f76b1c)" }}
                  >
                    Instant Appointment
                  </motion.a>
                </motion.div>

                {/* Info Text at Bottom */}
                <div style={footerText}>
                  📍 24/7 Emergency Services Available
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* --- ULTRA-MODERN SIDEBAR STYLES --- */

const hamburger = {
  position: "fixed",
  bottom: "30px", // Mobile par bottom right zyada convenient hota hai
  right: "20px",
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 2000,
  background: "linear-gradient(135deg, #4facfe, #00f2fe)",
  color: "#000",
  boxShadow: "0 10px 25px rgba(79, 172, 254, 0.4)",
  userSelect: "none"
};

const backdrop = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(8px)",
  zIndex: 1998
};

const panel = {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100%",
  width: "280px",
  background: "rgba(5, 11, 20, 0.95)", // Dark Premium Background
  backdropFilter: "blur(20px)",
  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
  zIndex: 1999,
  display: "flex",
  flexDirection: "column"
};

const contentWrapper = {
  padding: "80px 25px 40px 25px",
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

const title = {
  color: "#fff",
  marginBottom: "5px",
  fontSize: "22px",
  fontWeight: "900",
  letterSpacing: "-1px"
};

const subTitle = {
  color: "#666",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginBottom: "40px"
};

const btnGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const btn = {
  padding: "16px",
  color: "white",
  textDecoration: "none",
  borderRadius: "15px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "15px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
};

const footerText = {
  marginTop: "auto",
  color: "#444",
  fontSize: "11px",
  textAlign: "center",
  borderTop: "1px solid rgba(255,255,255,0.05)",
  paddingTop: "20px"
};
