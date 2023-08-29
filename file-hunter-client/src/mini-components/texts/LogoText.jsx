import React from "react";

const LogoText = ({text}) => {
  return (
    <h1 className="font-extrabold animate-pulse text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      {text}
    </h1>
  );
};

export default LogoText;
