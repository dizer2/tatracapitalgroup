import React from "react";

interface BurgerMenuProps {
	setIsOpen: (isOpen: boolean) => void;
	isOpen: boolean;
}

export default function BurgerMenu({ setIsOpen, isOpen }: BurgerMenuProps) {

  return (
    <div className="block md:hidden">
      <button
        className="flex flex-col justify-between w-8 h-6 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-full h-[2px] bg-white rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`w-full h-[2px] bg-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-full h-[2px] bg-white rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}
