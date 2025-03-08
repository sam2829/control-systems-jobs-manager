import { useState } from "react";

// custom hook for handling custom modal display
const useModal = () => {
  // state for if modal open
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   functions to open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
