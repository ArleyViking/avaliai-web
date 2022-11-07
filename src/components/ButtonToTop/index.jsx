import React, { useState, useEffect } from "react";
import { ArrowUp } from "phosphor-icons";

import "./styles.scss";

export default function ButtonToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <ArrowUp className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
}
