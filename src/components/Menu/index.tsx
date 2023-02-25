import { Box } from "@mui/material";
import { Lobster } from "next/font/google";
import Image from "next/image";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  return (
    <Box
      mb={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid #FFFFFF",
        borderBottom: "1px solid #FFFFFF",
      }}
      className={lobster.className}
    >
      <a
        href="#ourNasiLemak"
        style={{
          fontSize: "24px",
          margin: "0 16px",
          padding: "8px 0",
          textShadow: "1px 4px #CD5C56",
        }}
      >
        Our Nasi Lemak
      </a>
      <a
        href="#howWeMakeIt"
        style={{
          fontSize: "24px",
          margin: "0 16px",
          padding: "8px 0",
          textShadow: "1px 4px #CD5C56",
        }}
      >
        How we make it ?
      </a>
      <a
        href="#contactUs"
        style={{
          fontSize: "24px",
          margin: "0 16px",
          padding: "8px 0",
          textShadow: "1px 4px #CD5C56",
        }}
      >
        Contact Us
      </a>
    </Box>
  );
};

export default Menu;
