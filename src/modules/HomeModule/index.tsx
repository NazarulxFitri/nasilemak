import { Box, Grid } from "@mui/material";
import styles from "@/styles/home.module.css";
import { Lobster } from "next/font/google";
import BannerComponent from "./BannerComponent";
import { Carousel, Menu } from "@/components";
import Image from "next/image";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const source = "/assets/nasi_lemak_image.jpeg";

const HomeModule = () => {
  return (
    <Box>
      <BannerComponent />
      <Menu />
      <Carousel displayCol={3} slideCol={1}>
        <Box pr={0.5} pl={0.5}>
          <Image
            alt="Nasi Lemak Cik Siti"
            width={384}
            height={280}
            src={source}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box pr={0.5} pl={0.5}>
          <Image
            alt="Nasi Lemak Cik Siti"
            width={384}
            height={280}
            src={source}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box pr={0.5} pl={0.5}>
          <Image
            alt="Nasi Lemak Cik Siti"
            height={280}
            width={384}
            src={source}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box pr={0.5} pl={0.5}>
          <Image
            alt="Nasi Lemak Cik Siti"
            height={280}
            width={384}
            src={source}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Carousel>
      <Box className={lobster.className} mt={6} id="ourNasiLemak">
        <h2
          style={{
            width: "fit-content",
            margin: "0 auto",
            textShadow: "1px 4px #CD5C56",
          }}
        >
          Our Nasi Lemak
        </h2>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src="/assets/nasiLemakMain.png" style={{ width: "100%" }} />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{ margin: "auto 0", textShadow: "1px 1px #CD5C56" }}
          >
            <p>
              Nasi Lemak Cik Siti was founded by Puan Siti Halimah in 1998 .
              Started from selling Nasi Lemak online , now the name Nasi Lemak
              Cik Siti has become one of the largest franchise in Food &
              Beverage industry.
              <br />
              <br />
              Preserving its originality, every products in Nasi Lemak Cik Siti
              produced using handmade only ! Not only great with taste, we also
              prioritize a balance diet meal. In the plate, you will find
              protein , calcium , iron , fibre and vitamin B.
              <br />
              <br />
              Nasi Lemak is one of signature dish in Malaysia. Therefore we will
              make sure our product will surely give you 100% satisfaction
              because we are not only carry our brand, but we also carry the
              tradition of Malaysia
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box className={lobster.className} mt={6} id="howWeMakeIt">
        <h2
          style={{
            width: "fit-content",
            margin: "0 auto",
            textShadow: "1px 4px #CD5C56",
          }}
        >
          How we make it ?
        </h2>
      </Box>

      <Box className={lobster.className} mt={6} id="contactUs">
        <h2
          style={{
            width: "fit-content",
            margin: "0 auto",
            textShadow: "1px 4px #CD5C56",
          }}
        >
          Contact Us
        </h2>
      </Box>
    </Box>
  );
};

export default HomeModule;
