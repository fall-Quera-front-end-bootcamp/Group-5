import { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState({
    primary: "brand-primary",
    secondary: "brand-secondary",
  });
  return { theme, setTheme };
};

export default Theme;
