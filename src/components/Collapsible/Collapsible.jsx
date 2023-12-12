import { useState } from "react";

function Collapsible({ children, descriptor }) {
  const [ isHidden, setIsHidden ] = useState(true);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }
  return (
    <div>
      <button onClick={toggleIsHidden}>
        {isHidden ? "Show" : "Hide"}
        {descriptor}
      </button>
      {isHidden ? null : children}
    </div>
  );
}

export default Collapsible;
