import { Box, Grid, Modal, TextField, Tooltip } from "@mui/material";
import { Montserrat } from "next/font/google";
import BannerComponent from "./BannerComponent";
import Image from "next/image";
import { BagIcon, LikeIcon } from "@/components";
import useGetMenuListing from "@/data/useGetMenuListing";
import { useState } from "react";
import DialogueComponent from "./DialogueComponent";

const montserratThin = Montserrat({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const HomeModule = () => {
  const { data } = useGetMenuListing();
  const [input, setInput] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleChange(e: any) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <Box>
      <BannerComponent />
      <Box mb={6}>
        <TextField
          sx={{ cursor: "pointer", width: { xs: "100%", md: "25%" } }}
          id="standard-basic"
          label="Cari menu anda di sini"
          variant="standard"
          onChange={handleChange}
        />
      </Box>
      {!!input && !filteredData[0] && (
        <Box mt={8} mb={50}>
          <h4 className={montserrat.className}>
            Maaf, menu yang anda cari tidak dijumpai. Sila cuba lagi. Terima
            Kasih !
          </h4>
        </Box>
      )}
      <Box>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {filteredData.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
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
                    <Box
                      mt={2}
                      sx={{ width: "fit-content", cursor: "pointer" }}
                      onClick={handleOpen}
                    >
                      <BagIcon />
                    </Box>
                  </Tooltip>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{ background: "transparent" }}
                  >
                    <DialogueComponent />
                  </Modal>
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
