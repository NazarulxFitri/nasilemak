import { Box } from "@mui/material";
import { Lobster } from "next/font/google";
import styles from "@/styles/home.module.css";

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
        <span className={styles.maroonText}>N</span>
        asi <span className={styles.maroonText}>L</span>emak
        <br />
        <span className={styles.maroonText}>C</span>ik{" "}
        <span className={styles.maroonText}>S</span>iti
      </h1>
    </Box>
  );
};

export default BannerComponent;
