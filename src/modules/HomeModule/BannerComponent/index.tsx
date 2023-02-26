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
          textShadow: "1px 16px #CD5C5C",
          width: "fit-content",
        }}
      >
        <span style={{ color: "#800000" }}>N</span>
        asi <span style={{ color: "#800000" }}>L</span>emak
        <br />
        <span style={{ color: "#800000" }}>C</span>ik{" "}
        <span style={{ color: "#800000" }}>S</span>iti
      </h1>
    </Box>
  );
};

export default BannerComponent;
