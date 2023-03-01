import { Box, Grid } from "@mui/material";
import { Lobster } from "next/font/google";
import BannerComponent from "./BannerComponent";
import Image from "next/image";
import { LikeIcon, WhatsappIcon } from "@/components";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const source = "/assets/nasi_lemak_image.jpeg";

const HomeModule = () => {
  return (
    <Box>
      <BannerComponent />
      <Box>
        <Grid container rowSpacing={4} columnSpacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ boxShadow: "1px 8px 16px #808080" }}>
              <Box>
                <Image
                  alt="nasiLemak"
                  src="/assets/nasi_lemak_image.jpeg"
                  width={328}
                  height={240}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Box>
              <Box p={1} sx={{ background: "#FFF" }}>
                <Box display="flex" justifyContent="space-between">
                  <p>Nasi Lemak Ayam</p>
                  <p>
                    <LikeIcon />
                  </p>
                </Box>
                <p
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  Rm 1.00
                </p>
                <WhatsappIcon color={"#2F5C1A"} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeModule;
