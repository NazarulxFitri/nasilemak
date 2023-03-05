import { Box, Grid, Modal } from "@mui/material";
import { Montserrat } from "next/font/google";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const montserratThin = Montserrat({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

const CylinderContainer = styled(Box)(({ theme }) => ({
  background: "#FFF",
  padding: "8px 12px",
  borderRadius: "16px",
  boxShadow: "1px 1px 10px #468429",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {},
}));

const MenuModalComponent = () => {
  const [open, setOpen] = useState(false);
  const [curId, setCurId] = useState<number>();

  const handleClose = () => setOpen(false);

  const item = [
    {
      title: "Tentang NLCS",
      htmlCode:
        "<div><p>Nasi Lemak Cik Siti merupakan sebuah syarikat yang menyediakan pelbagai juadah makanan. Menu juadah yang disediakan merupakan menu yang sangat dekat dengan hati rakyat Malaysia. Antara menu tersebut ialah Nasi Lemak, kuih tepung pelita, roti jalan, pisang goreng dan banyak lagi</p></div>",
    },
    {
      title: "Lokasi & Cara Hubungi kami",
      htmlCode:
        "<div><p style='margin-bottom: 8px'>Kami beroperasi di Seksyen 15 , Bandar Baru Bangi. <span style='color: #2f5c1a'>No 11 Jalan Seri Putra 3/7 Bandar Sri Putra 43000 Kajang Selangor</span></p><p>Kami juga boleh di hubungi di : <span style='color: #2f5c1a'>011-56271776</span></p></div>",
    },
    {
      title: "Langkah untuk membuat pesanan",
      htmlCode:
        "<div><p style='margin-bottom: 8px'>Terdapat dua cara untuk membuat pesanan secara atas talian (online) iaitu melalui VoiceCall ataupun Whatsapp</p><p>Untuk membuat pesanan :  </p><ul><li>Sila cari menu pilihan anda</li><li>Klik pada ikon bag di bahagian bawah kiri</li><li>Pilih cara antara Whatsapp atau Voicecall dan ikuti langkah yang disediakan di menu paparan</li></ul></div>",
    },
  ];

  return (
    <>
      <Grid
        container
        className={montserrat.className}
        sx={{ justifyContent: "center" }}
        spacing={1}
        mb={2}
      >
        {item.map((i, idx) => (
          <Grid
            item
            key={idx}
            onClick={() => {
              setOpen(true);
              setCurId(idx!);
            }}
          >
            <CylinderContainer>{i.title}</CylinderContainer>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          background: "transparent",
          ".MuiBackdrop-root": {
            background: "rgba(0,0,0,0.56)",
          },
        }}
      >
        <Box
          className="animate__animated animate__bounceInDown"
          sx={{
            margin: "18% auto",
            background: "#FFF",
            width: { xs: "80%", md: "40%" },
            borderRadius: "16px",
            position: "relative",
            padding: "16px",
          }}
        >
          <p className={montserrat.className} style={{ marginBottom: "16px" }}>
            {item[curId!]?.title}
          </p>
          <span
            className={montserratThin.className}
            style={{ letterSpacing: "0.025em" }}
            dangerouslySetInnerHTML={{ __html: item[curId!]?.htmlCode }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default MenuModalComponent;
