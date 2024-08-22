import { useEffect, useState } from "react";

const FadeInAnimation = ({
  direction = "bottom",
  range = "50px",
  time = "1s",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getTransformValue = () => {
    switch (direction) {
      case "top":
        return `translateY(-${range})`;
      case "bottom":
        return `translateY(${range})`;
      case "left":
        return `translateX(-${range})`;
      case "right":
        return `translateX(${range})`;
      default:
        return `translateY(${range})`;
    }
  };

  const getFinalValue = () => {
    return direction === "left" || direction === "right"
      ? "translateX(0)"
      : "translateY(0)";
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column w-100"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `transform ${time} ease, opacity ${time} ease`,
        transform: isVisible ? getFinalValue() : getTransformValue(),
      }}
    >
      {children}
    </div>
  );
};

export default FadeInAnimation;
