import { Box, Grid, TextField, Tooltip } from "@mui/material";
import { Montserrat } from "next/font/google";
import BannerComponent from "./BannerComponent";
import Image from "next/image";
import { LikeIcon } from "@/components";
import useGetMenuListing from "@/data/useGetMenuListing";
import { useState } from "react";
import IconModalComponent from "./IconModalComponent";
import MenuModalComponent from "./MenuModalComponent";

const montserratThin = Montserrat({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const HomeModule = () => {
  const { data } = useGetMenuListing();
  const [input, setInput] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );
  const noData = !!input && !filteredData[0];

  function handleChange(e: any) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <Box>
      <BannerComponent />
      <Box mb={6}>
        <MenuModalComponent />
        <TextField
          sx={{ cursor: "pointer", width: { xs: "100%", md: "25%" } }}
          id="standard-basic"
          label="Cari menu anda di sini"
          variant="standard"
          onChange={handleChange}
        />
      </Box>
      {noData && (
        <>
          <Box mb={6}>
            <h4 className={montserrat.className}>
              Maaf, menu yang anda cari tidak dijumpai. Sila cuba lagi. Terima
              Kasih !
            </h4>
          </Box>
          <Box>
            <Grid container rowSpacing={4} columnSpacing={2}>
              {data.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box sx={{ boxShadow: "1px 8px 16px #468429" }}>
                    <Box position="relative">
                      <Image
                        alt={`Nasi Lemak Cik Siti | ${item.name}`}
                        src={item.imgsrc}
                        width={328}
                        height={240}
                        style={{
                          width: "100%",
                          height: "240px",
                          display: "block",
                        }}
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
                    <Box
                      p={1}
                      sx={{ backgroundColor: "#FFF", height: "160px" }}
                    >
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
                        <IconModalComponent {...{ item }} />
                      </Tooltip>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}

      <Box>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {filteredData.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box sx={{ boxShadow: "1px 8px 16px #468429" }}>
                <Box position="relative">
                  <Image
                    alt={`Nasi Lemak Cik Siti | ${item.name}`}
                    src={item.imgsrc}
                    width={328}
                    height={240}
                    style={{
                      width: "100%",
                      height: "240px",
                      display: "block",
                    }}
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
                    <IconModalComponent {...{ item }} />
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
