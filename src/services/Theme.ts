import { useState } from "react";
import { colors } from "../entities/Colors";

const useTheme = () => {
  const [indexColor, setIndexColor] = useState(0);
  const [theme, setTheme] = useState<string>(colors[indexColor].primary.bgPrimary);

  //   Todo: implement handle change color here
  const handleChangeTheme = (index: number) => {
    setIndexColor(index);
    setTheme(colors[index].primary.bgPrimary);
  };

  return { colors, theme, handleChangeTheme };
};

export default useTheme;
