import React, { useEffect, useState } from "react";

const RotatingText = () => {
  const texts = [
    "Welcome to our website!",
    "Accelerate your financial edge!",
    "Master the art of speed!",
    "Join us today!",
  ];
  const texts2 = [
    "Expert Tools for Smarter, Faster Trades",
    "Innovation and Trust for Limitless Possibilities",
    "Master the Art of Speed and Strategy in Finance",
    "The World's first AI-Powered Trading Innovation [ Coming Soon ]",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key={index}
      style={{
        color: "#1E2749",
        textAlign: "center",
        marginTop: "100px",
        marginBottom: "40px"
      }}
      className="header-font"
    >
      <h1 style={{fontSize: "40px",  fontWeight: "bold" }}>{texts[index]}</h1>
      <p style={{ fontSize: "24px" }}>{texts2[index]}</p>
    </div>
  );
};

export default RotatingText;
