import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "poppins",
  },
  colors: {
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "400": "rgba(153, 153, 153, 0.5)",
      "300": "#DADADA",
      "100": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
      "300": "rgba(255, 186, 8,0.5)",
    },
  },
  font: {
    body: "poppins",
    heading: "poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.700",
      },
    },
  },
});
