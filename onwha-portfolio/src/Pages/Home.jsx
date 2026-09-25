import { useEffect, useState } from "react";
import "../Styles/home.css";

function Home() {
  const catColors = [
    "#ffffff",
    "#ff4040",
    "#ffcb3c",
    "#9350fe",
    "#41caf4",
    "#50f279",
  ];

  const catVariants = ["classic", "round", "pointy", "fluffy", "tiny"];

  const [position, setPosition] = useState({
    x: 20,
    y: 65,
  });

  const [direction, setDirection] = useState(1);
  const [catColor, setCatColor] = useState("#ffffff");
  const [catVariant, setCatVariant] = useState("classic");
  const [walking, setWalking] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const moveCat = () => {
      const newX = 10 + Math.random() * 80;
      const newY = 25 + Math.random() * 55;

      setWalking(true);

      setPosition((prev) => {
        setDirection(newX >= prev.x ? 1 : -1);

        return {
          x: newX,
          y: newY,
        };
      });

      setTimeout(() => {
        setWalking(false);
      }, 2200);
    };

    const firstMove = setTimeout(moveCat, 700);

    const interval = setInterval(() => {
      moveCat();
    }, 3400);

    return () => {
      clearTimeout(firstMove);
      clearInterval(interval);
    };
  }, []);

  const handleCatClick = () => {
    let nextColor = catColor;
    let nextVariant = catVariant;

    while (nextColor === catColor && nextVariant === catVariant) {
      nextColor =
        catColors[Math.floor(Math.random() * catColors.length)];
      nextVariant =
        catVariants[Math.floor(Math.random() * catVariants.length)];
    }

    setCatColor(nextColor);
    setCatVariant(nextVariant);
    setClicked(true);

    const clickSymbol = Math.random() > 0.5 ? "★" : "♥";
    const newParticles = Array.from({ length: 22 }, (_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 45 + Math.random() * 80;

      return {
        id: `${Date.now()}-${index}`,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        symbol: clickSymbol,
      };
    });

    setParticles(newParticles);

    setTimeout(() => {
      setClicked(false);
    }, 450);

    setTimeout(() => {
      setParticles([]);
    }, 800);
  };

  return (
    <main className="page-container home-page">
      <h2 className = "intro">안녕하세요. UXUI 디자이너 <span className = "intro-name">김가은</span>입니다.</h2>
      <img className="home-logo" src="/images/onwhaLogo.png" alt="" />
      <div
        className={`
          home-cat-container
          home-cat-${catVariant}
          ${walking ? "home-cat-walking" : ""}
          ${clicked ? "home-cat-clicked" : ""}
        `}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
        onClick={handleCatClick}
      >
        <div
          className="home-cat-direction"
          style={{
            transform: `scaleX(${direction})`,
            "--cat-color": catColor,
          }}
        >
          <div className="home-pixel-cat">

            <div className="home-cat-tail">
              <div className="tail-block tail-block-1" />
              <div className="tail-block tail-block-2" />
              <div className="tail-block tail-block-3" />
              <div className="tail-block tail-block-4" />
            </div>

            <div className="home-cat-body">
              <div className="home-cat-belly" />
            </div>

            <div className="home-cat-head">
              <div className="home-cat-ear home-cat-ear-left">
                <div className="home-cat-inner-ear" />
              </div>

              <div className="home-cat-ear home-cat-ear-right">
                <div className="home-cat-inner-ear" />
              </div>

              <div className="home-cat-eye home-cat-eye-left" />
              <div className="home-cat-eye home-cat-eye-right" />

              <div className="home-cat-nose" />

              <div className="home-cat-whisker whisker-left-1" />
              <div className="home-cat-whisker whisker-left-2" />
              <div className="home-cat-whisker whisker-right-1" />
              <div className="home-cat-whisker whisker-right-2" />
            </div>

            <div className="home-cat-leg home-cat-leg-1" />
            <div className="home-cat-leg home-cat-leg-2" />
            <div className="home-cat-leg home-cat-leg-3" />
            <div className="home-cat-leg home-cat-leg-4" />

          </div>
        </div>

        {particles.map((particle) => (
          <span
            key={particle.id}
            className="home-cat-particle"
            style={{
              "--particle-x": `${particle.x}px`,
              "--particle-y": `${particle.y}px`,
              "--particle-color": catColor,
            }}
          >
            {particle.symbol}
          </span>
        ))}

        {clicked && (
          <span className="home-cat-meow">
            MEOW!
          </span>
        )}
      </div>
    </main>
  );
}

export default Home;