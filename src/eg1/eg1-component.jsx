import React from "react";

const RoyalEnfield = () => {
  return <h2>Royal Enfield</h2>;
};

const Himalayan = () => {
  return <h3>Himalayan 450</h3>;
};

const Classic = () => {
  return <h3>Classic 350</h3>;
};

const Eg1Component = () => {
  return (
    <div>
      <h1>Example 1</h1>
      <RoyalEnfield />
      <Himalayan />
      <Classic />
    </div>
  );
};

export default Eg1Component;