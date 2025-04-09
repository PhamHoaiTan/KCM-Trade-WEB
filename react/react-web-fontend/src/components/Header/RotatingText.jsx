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
      className="header-font"
    >
      <h1>{texts[index]}</h1>
      <p>{texts2[index]}</p>
    </div>
  );
};

export default RotatingText;
