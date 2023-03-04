import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const FooterModule = () => {
  return (
    <Box
      className={montserrat.className}
      mt={6}
      p={2}
      sx={{
        background: "#FFF",
        textAlign: "center",
        boxShadow: "1px 1px 10px #2F5C1A",
      }}
    >
      Copyright © 2023{" "}
      <span style={{ color: "#2F5C1A" }}>Nasi Lemak Cik Siti</span> . All rights
      reserved
    </Box>
  );
};
export default FooterModule;
