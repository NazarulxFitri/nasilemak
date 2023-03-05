import { Box, Modal } from "@mui/material";
import { Montserrat } from "next/font/google";
import { BagIcon, WhatsappIcon } from "@/components";
import { useState } from "react";
import { CloseIcon } from "@/components";

const montserratThin = Montserrat({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const IconModalComponent = ({ item }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        mt={2}
        sx={{ width: "fit-content", cursor: "pointer" }}
        onClick={handleOpen}
      >
        <BagIcon />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          background: "transparent",
          ".MuiBackdrop-root": { background: "rgba(0,0,0,0.56)" },
        }}
      >
        <Box
          className={`${montserrat.className} animate__animated animate__bounceInDown`}
          sx={{
            background: "#FFF",
            borderRadius: "16px",
            postion: "relative",
            width: { xs: "92%", md: "60%" },
            margin: { xs: "50% auto", md: "18% auto" },
            padding: { xs: "12px" },
          }}
        >
          <p>{item.name}</p>
          <p style={{ marginTop: "8px" }}>{item.price}</p>
          <p style={{ marginTop: "8px" }} className={montserratThin.className}>
            {item.desc}
          </p>
          <Box
            sx={{ background: "#ccd871", p: 2, my: 2, borderRadius: "16px" }}
          >
            <p
              className={montserratThin.className}
              style={{ marginBottom: "8px" }}
            >
              Sila pilih cara untuk membuat pesanan
            </p>
            <a
              href={`https://wa.me/+601156271776?text=[Website]%20Hi%20NLCS,%20!%20Saya%20ingin%20membuat%20pesanan%20untuk%20:%20${item.name}`}
              target="__blank"
            >
              <p style={{ display: "flex" }}>
                <span style={{ alignItems: "center", display: "inline-flex" }}>
                  Whatsapp - Klik ikon di sebelah
                </span>
                <Box ml={0.5} sx={{ display: "inline-flex" }}>
                  <WhatsappIcon />
                </Box>
              </p>
            </a>
            <p className={montserratThin.className} style={{ margin: "8px 0" }}>
              Atau
            </p>
            <p>
              Hubungi kami di <u>011-56271776</u>
            </p>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default IconModalComponent;
