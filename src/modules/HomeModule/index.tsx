import { Box, Grid, Tooltip } from "@mui/material";
import { Montserrat } from "next/font/google";
import BannerComponent from "./BannerComponent";
import Image from "next/image";
import { BagIcon, LikeIcon } from "@/components";
import useGetMenuListing from "@/data/useGetMenuListing";

const montserratThin = Montserrat({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const HomeModule = () => {
  const { data } = useGetMenuListing();

  return (
    <Box>
      <BannerComponent />
      <Box>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {data.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box sx={{ boxShadow: "1px 8px 16px #468429" }}>
                <Box position="relative">
                  <Image
                    alt={`Nasi Lemak Cik Siti | ${item.name}`}
                    src={item.imgsrc}
                    width={328}
                    height={240}
                    style={{ width: "100%", height: "240px", display: "block" }}
                  />
                  {item.like && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "-12px",
                        right: "-12px",
                        padding: "4px 6px",
                        background: "#FFF",
                        borderRadius: "20px",
                      }}
                    >
                      <LikeIcon />
                    </Box>
                  )}
                </Box>
                <Box p={1} sx={{ backgroundColor: "#FFF", height: "160px" }}>
                  <p
                    className={montserrat.className}
                    style={{ marginBottom: "4px" }}
                    dangerouslySetInnerHTML={{ __html: item.name! }}
                  />
                  <p
                    className={montserrat.className}
                    style={{ marginBottom: "4px" }}
                    dangerouslySetInnerHTML={{ __html: item.price! }}
                  />
                  <p
                    className={montserratThin.className}
                    style={{
                      marginBottom: "4px",
                      height: "60px",
                      overflow: "hidden",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.desc! }}
                  />
                  <Tooltip title="Klik untuk membuat pesanan">
                    <Box
                      mt={2}
                      sx={{ width: "fit-content", cursor: "pointer" }}
                    >
                      <BagIcon />
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeModule;
