import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.900",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
});
