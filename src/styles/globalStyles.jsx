import { GlobalStyles } from "@mui/material";

function GlobalStyle() {
  return (
    <GlobalStyles
      styles={{
        html: {
          backgroundColor: "#292929",
          color: "#e0e0e0",
          height: "100%",
          fontSize: "62.5%",
          fontFamily: "Chivo !important",
        },
        body: { margin: 0, minHeight: "100vh" },
      }}
    />
  );
}

export default GlobalStyle;
