import { createContext, useState } from "react";

export const ImagesContext = createContext();

export function ImagesProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ImagesContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ImagesContext.Provider>
  );
}
