import * as React from "react";
import "./StarRating.css";

export default function StarRating({ score }) {
  // Star maximum
  const maxStars = 5;

  // Get the entire value
  const starPercentage = (score / maxStars) * 100;

  // Round the percentage
  const starPercentageRounded = Math.round(starPercentage);

  const StarStyles = () => {
    return {
      width: starPercentageRounded + "%",
    };
  };

  return (
    <div className="stars-gray">
      <div className="stars-yellow" style={StarStyles()}></div>
    </div>
  );
}
