import { Box, Typography } from "@mui/material";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

const BannerComponent = () => {
  return (
    <Box pb={4}>
      <Typography
        variant="h1"
        className={lobster.className}
        sx={{
          fontFamily: "unset",
          color: "#FFF",
          fontSize: { xs: "68px", md: "112px" },
          margin: "16px auto 0",
          textAlign: "center",
          textShadow: "1px 12px #468429",
          width: "fit-content",
        }}
      >
        <span style={{ color: "#2F5C1A" }}>N</span>
        asi <span style={{ color: "#2F5C1A" }}>L</span>emak
        <br />
        <span style={{ color: "#2F5C1A" }}>C</span>ik{" "}
        <span style={{ color: "#2F5C1A" }}>S</span>iti
      </Typography>
    </Box>
  );
};

export default BannerComponent;
