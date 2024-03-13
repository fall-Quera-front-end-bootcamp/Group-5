import { useState } from "react";
import { colors } from "../entities/Colors";

const useColorSelector = () => {
  const [indexColor, setIndexColor] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    colors[indexColor].primary.bgPrimary
  );

  const handleColorChange = (index: number) => {
    setIndexColor(index);
    setSelectedColor(colors[index].primary.bgPrimary);
  };

  return { colors, selectedColor, handleColorChange, indexColor };
};

export const useGetBgColor = (index: String) => {
  const indexColor = Number(index);
  return colors[indexColor].primary.bgPrimary;
};

export default useColorSelector;
