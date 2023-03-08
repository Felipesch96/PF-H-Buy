import React from "react";

const selectCategories = (category) => {
  switch (category.toLowerCase()) {
    case "cell phones":
      return <i class="bi bi-phone ">{category}</i>;
    case "televisions":
      return <i class="bi bi-tv ">{category}</i>;
    case "art":
      return <i class="bi bi-brush ">{category}</i>;
    case "vehicles":
      return <i class="bi bi-truck-front-fill ">{category}</i>;
    case "computers":
      return <i class="bi bi-pc-display-horizontal ">{category}</i>;
    case "tools":
      return <i class="bi bi-wrench ">{category}</i>;
    default:
      return <i> {category} </i>;
  }
};
export default selectCategories;
