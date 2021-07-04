import React, { useState } from "react";
import { CompactPicker } from "react-color";

const popover = {
  position: "absolute",
  zIndex: "2",
};
const cover = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
};

function ColorPicker(props) {
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const { buttonTitle, setColor } = props;
  const handleClick = () => {
    setOpenColorPicker(!openColorPicker);
  };

  const handleClose = () => {
    setOpenColorPicker(false);
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonTitle}</button>
      {openColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <CompactPicker onChange={(e) => setColor(e.hex)} />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;
