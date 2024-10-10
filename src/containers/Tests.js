import React from "react";

function Tests() {
  const names = ["John", "Jane", "Smith"];
  return (
    <div>
      <ul>
        {names.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tests;
