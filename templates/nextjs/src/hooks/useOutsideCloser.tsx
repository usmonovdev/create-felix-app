import React, { useEffect } from "react";

// Ba'zi elementlarni foydalanuvchiga keraksiz bo'lganida uni yopish holati uchun hook
const useOutsideCloser = (
  ref: React.RefObject<HTMLElement>,
  closeFunction: () => void,
) => {
  useEffect(() => {
    // call function when click outside is ref element
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeFunction();
      }
    }

    // call function when page is scrolling
    function handleScroll() {
      closeFunction();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [ref, closeFunction]);
};

export default useOutsideCloser;
