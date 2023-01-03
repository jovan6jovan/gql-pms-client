import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = (shouldOpen: boolean) => {
    setIsShowing(shouldOpen);
  };

  return {
    isShowing,
    handleToggle,
  };
};

export default useModal;
