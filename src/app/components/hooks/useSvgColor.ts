import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
const useThemeColors = () => {
  const { theme } = useTheme();

  const [svgColor, setSvgColor] = useState("#F5CB5C"); // Default color for svg
  const [strokeColor, setStrokeColor] = useState<string | null>(null); // Default stroke color

  useEffect(() => {
    if (theme) {
      // Set svgColor and strokeColor based on theme
      setSvgColor(theme === "dark" ? "#F5CB5C" : "#F231F2");
      setStrokeColor(theme === "dark" ? "#F5CB5C" : "#F231F2");
    }
  }, [theme]);

  return { svgColor, strokeColor };
};

export default useThemeColors;
