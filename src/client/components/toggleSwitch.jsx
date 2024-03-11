import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex",justifyContent:"center", alignItems: "center",width:"100px" }}>
      <label
        style={{
          position: "relative",
          display: "inline-block",
          width: "70px",
          height: "34px",
        }}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleSwitch}
          style={{
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
        <span
          style={{
            position: "absolute",
            cursor: "pointer",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: isChecked ? "#000" : "#eee",
            transition: "0.4s",
            borderRadius: "34px",
          }}
        >
          <span
            style={{
              position: "absolute",
              height: "26px",
              width: "26px",
              left: isChecked ? "38px" : "4px",
              top: "4px",
              backgroundColor: isChecked ? "#FFF" : "#000",
              borderRadius: "50%",
              transition: "0.4s",
            }}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
