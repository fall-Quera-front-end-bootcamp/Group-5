import { useState } from "react";

const colors: string[] = [
  "bg-gray-primary",
  "bg-indigo-primary",
  "bg-blue-primary",
  "bg-cyan-primary",
  "bg-teal-primary",
  "bg-brand-primary",
  "bg-green-primary",
  "bg-lime-primary",
  "bg-yellow-primary",
  "bg-orange-primary",
  "bg-red-primary",
  "bg-pink-primary",
  "bg-grape-primary",
  "bg-violet-primary",
];

const useColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
  };

  return { colors, selectedColor, handleColorChange };
};

export default useColorSelector;
