import { Box } from "@mui/material";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

const BannerComponent = () => {
  return (
    <Box pb={4}>
      <h1
        className={lobster.className}
        style={{
          color: "#FFF",
          fontSize: "112px",
          margin: "0 auto",
          textAlign: "center",
          textShadow: "1px 8px #808080",
          width: "fit-content",
        }}
      >
        <span style={{ color: "#2F5C1A" }}>N</span>
        asi <span style={{ color: "#2F5C1A" }}>L</span>emak
        <br />
        <span style={{ color: "#2F5C1A" }}>C</span>ik{" "}
        <span style={{ color: "#2F5C1A" }}>S</span>iti
      </h1>
    </Box>
  );
};

export default BannerComponent;
