import { Box } from "@mui/material";
import { Lobster } from "next/font/google";
import { styled } from "@mui/material/styles";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

const MainBanner = styled("h1")(({ theme }) => ({
  color: "#FFF",
  fontSize: "68px",
  margin: "16px auto 0",
  textAlign: "center",
  textShadow: "1px 12px #468429",
  width: "fit-content",
  [theme.breakpoints.up("md")]: {
    fontSize: "112px",
  },
}));

const BannerComponent = () => {
  return (
    <Box pb={4}>
      <MainBanner className={lobster.className}>
        <span style={{ color: "#2F5C1A" }}>N</span>
        asi <span style={{ color: "#2F5C1A" }}>L</span>emak
        <br />
        <span style={{ color: "#2F5C1A" }}>C</span>ik{" "}
        <span style={{ color: "#2F5C1A" }}>S</span>iti
      </MainBanner>
    </Box>
  );
};

export default BannerComponent;
