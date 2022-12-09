import React, { useEffect, useState } from "react";
import { Logo } from "../../components/Logo";
import { Welcome } from "../../components/Welcome";
import "./SplashScreens.scss";

export const SplashScreens = () => {
  const [isLogo, setIsLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLogo(false), 2000);
  });

  return (
    <>
      {isLogo && <Logo />}

      {!isLogo && <Welcome />}
    </>
  );
};
