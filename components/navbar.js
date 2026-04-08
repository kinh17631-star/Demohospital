import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll logic for premium glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "home", path: "/" },
    { name: "doctors", path: "/doctors" },
    { name: "patients", path: "/patients" },
    { name: "staff", path: "/staff" },
    { name: "appointment", path: "/appointment" }
  ];

  return (
    <>
      <motion.nav 
        style={{
          ...navBase,
          background: scrolled ? "rgba(5, 11, 20, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          padding: scrolled ? "10px 20px" : "20px 20px"
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* LOGO WITH GLOW */}
        <div style={logo}>
          DEMO <span style={{ color: "#4facfe" }}>HOSPITAL</span>
        </div>

        {/* DESKTOP MENU */}
        <div style={desktopMenu}>
          {menuItems.map((item, index) => (
            <motion.a 
              key={index}
              href={item.path} 
              style={link}
              whileHover={{ color: "#4facfe", y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <motion.div 
          whileTap={{ scale: 0.8 }}
          style={mobileBtn} 
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </motion.div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={mobileOverlay}
          >
            <div style={mobileMenuContent}>
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.path}
                  style={mobileLink}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a 
                href="/appointment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button style={mobileActionBtn}>Book Now</button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* --- ADVANCED PREMIUM STYLES --- */

const navBase = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  boxSizing: "border-box",
  position: "fixed", // Har waqt top par rahega
  top: 0,
  left: 0,
  zIndex: 1000,
  transition: "all 0.4s ease"
};

const logo = {
  fontWeight: "900",
  fontSize: "20px",
  letterSpacing: "2px",
  cursor: "pointer",
  textShadow: "0 0 15px rgba(79, 172, 254, 0.3)"
};

const desktopMenu = {
  display: "flex",
  gap: "30px",
  alignItems: "center",
  // Desktop menu mobile par gayab ho jayega
  "@media (max-width: 768px)": {
    display: "none"
  }
};

const link = {
  color: "#ccc",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "13px",
  fontWeight: "600",
  letterSpacing: "1px",
  transition: "0.3s"
};

const mobileBtn = {
  fontSize: "28px",
  cursor: "pointer",
  color: "#4facfe",
  zIndex: 1001 // Overlay ke upar dikhega
};

const mobileOverlay = {
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  height: "100vh",
  background: "#050b14",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const mobileMenuContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "25px"
};

const mobileLink = {
  fontSize: "32px",
  fontWeight: "800",
  color: "#fff",
  textDecoration: "none",
  textTransform: "capitalize",
  letterSpacing: "-1px"
};

const mobileActionBtn = {
  marginTop: "20px",
  padding: "15px 40px",
  borderRadius: "50px",
  border: "none",
  background: "linear-gradient(90deg, #4facfe, #00f2fe)",
  color: "#000",
  fontWeight: "bold",
  fontSize: "18px",
  boxShadow: "0 10px 20px rgba(79, 172, 254, 0.4)"
};
