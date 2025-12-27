import React, { useState } from "react";
import "./customdropdown.css";
import { IoIosArrowDown } from "react-icons/io";

function CustomDropdown({ options = [], onChange, value, placeholder }) {

  const selectedOption = options.find((option) => option.slug === value);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="custom-select-wrapper">
        <div className="custom-select" onClick={() => setOpen(!open)}>
          <p>{selectedOption ? selectedOption.name : placeholder}</p>
          <IoIosArrowDown className={open ? 'rotate': ''}/>
        </div>

        {open && (
          <div className="custom-options">
            {options.map((option, index) => (
              <div
                className="custom-option"
                key={index}
                onClick={() => {
                  onChange(option.slug);
                  setOpen(false);
                }}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CustomDropdown;
