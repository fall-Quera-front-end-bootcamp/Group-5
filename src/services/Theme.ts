import { useState } from "react";

type ThemeType = { [key: string]: { [key: string]: string } };

type ColorsType = ThemeType[];

const colors: ColorsType = [
  {
    primary: {
      bgPrimary: "bg-red-primary",
      textPrimary: "text-red-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-pink-primary",
      textPrimary: "text-pink-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-grape-primary",
      textPrimary: "text-grape-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-violet-primary",
      textPrimary: "text-violet-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-indigo-primary",
      textPrimary: "text-indigo-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-blue-primary",
      textPrimary: "text-blue-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-cyan-primary",
      textPrimary: "text-cyan-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-teal-primary",
      textPrimary: "text-teal-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-brand-primary",
      textPrimary: "text-brand-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-green-primary",
      textPrimary: "text-green-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-lime-primary",
      textPrimary: "text-lime-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-yellow-primary",
      textPrimary: "text-yellow-primary",
    },
  },
  {
    primary: {
      bgPrimary: "bg-orange-primary",
      textPrimary: "text-orange-primary",
    },
  },
];

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>({
    primary: {
      bgPrimary: "bg-brand-primary",
      textPrimary: "text-brand-primary",
    },
    secondary: {
      bgSecondary: "bg-brand-secondary",
      textSecondary: "text-brand-secondary",
    },
  });

  return { colors, theme, setTheme };
};

export default useTheme;
