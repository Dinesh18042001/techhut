import React, { useEffect } from "react";
import gsap from "gsap";

export default function CareerpathMain() {
  // GSAP animation logic
  useEffect(() => {
    const cardsContainerLeft = document.querySelector(".cards-container-left");
    const cardsContainerRight = document.querySelector(".cards-container-right");

    // Duplicate the cards for wrapping
    cardsContainerLeft.innerHTML += cardsContainerLeft.innerHTML;
    cardsContainerRight.innerHTML += cardsContainerRight.innerHTML;

    const cardsLeft = gsap.utils.toArray(".card-project-left");
    const cardsRight = gsap.utils.toArray(".card-project-right");

    const duration = 20;
    const cardWidth = window.innerWidth / (cardsLeft.length / 2);

    const setAnimValues = () => {
      cardsLeft.forEach((card, i) =>
        gsap.set(card, { x: i * cardWidth, overwrite: "auto" })
      );

      gsap.to(cardsLeft, {
        duration: duration,
        ease: "none",
        x: `-=${window.innerWidth}`,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-cardWidth, window.innerWidth * 2 - cardWidth), "px"),
        },
      });

      cardsRight.forEach((card, i) =>
        gsap.set(card, { x: i * cardWidth, overwrite: "auto" })
      );

      gsap.to(cardsRight, {
        duration: 10,
        ease: "none",
        x: `+=${window.innerWidth}`,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-cardWidth, window.innerWidth * 2 - cardWidth), "px"),
        },
      });
    };

    window.addEventListener("resize", setAnimValues);
    setAnimValues();

    return () => {
      window.removeEventListener("resize", setAnimValues);
    };
  }, []);

  // Define internal styles as JavaScript objects
  const wrapperStyle = {
    width: "100vw",
    height: "100px",
    position: "relative",
    margin: "auto",
    background: "#ccc",
    overflow: "hidden",
  };

  const cardsContainerStyle = {
    position: "relative",
  };

  const cardsContainerRightStyle = {
    position: "absolute",
    top: "50%",
    width: "100%",
    transform: "translateY(-50%)",
  };

  const cardProjectStyle = {
    width: "25vw",
    height: "50px",
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "25px",
    lineHeight: "50px",
    textAlign: "center",
  };

  // Render component
  return (
    <>
      <div className="careerpathmain-section mb-5">
        <div className="container">
          <h4>Career Path Section</h4>
        </div>
        <div style={wrapperStyle}>
          <div className="cards-container cards-container-left" style={cardsContainerStyle}>
            <div className="card-project card-project-left" style={cardProjectStyle}>
              Left First column
            </div>
            <div className="card-project card-project-left" style={cardProjectStyle}>
              Left Second column
            </div>
            <div className="card-project card-project-left" style={cardProjectStyle}>
              Left Third column
            </div>
            <div className="card-project card-project-left" style={cardProjectStyle}>
              Left Fourth column
            </div>
          </div>

          <div className="cards-container cards-container-right" style={cardsContainerRightStyle}>
            <div className="card-project card-project-right" style={cardProjectStyle}>
              Right First column
            </div>
            <div className="card-project card-project-right" style={cardProjectStyle}>
              Right Second column
            </div>
            <div className="card-project card-project-right" style={cardProjectStyle}>
              Right Third column
            </div>
            <div className="card-project card-project-right" style={cardProjectStyle}>
              Right Fourth column
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
