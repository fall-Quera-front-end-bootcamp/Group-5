import { useState } from "react";

const colors:string[] = [
  "bg-orange-primary",
  "bg-brand-primary",
  "bg-gray-primary",
  "bg-red-primary",
  "bg-pink-primary",
  "bg-grape-primary",
  "bg-violet-primary",
  "bg-indigo-primary",
  "bg-blue-primary",
  "bg-cyan-primary",
  "bg-teal-primary",
  "bg-green-primary",
  "bg-lime-primary",
  "bg-yellow-primary",
];

const useColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
  };

  return { colors, selectedColor, handleColorChange };
}

export default useColorSelector;
