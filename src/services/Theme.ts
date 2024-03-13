import { useState } from "react";
import { ThemeType, colors } from "../entities/Colors";

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(colors[0]);

  //   Todo: implement handle change color here
  const handleChangeTheme = (index: number) => {
    setTheme(colors[index]);
  };

  return { colors, theme, handleChangeTheme };
};

export default useTheme;
