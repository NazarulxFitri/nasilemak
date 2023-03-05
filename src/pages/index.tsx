import { Box, Container } from "@mui/material";
import HomeModule from "@/modules/HomeModule";
import FooterModule from "@/modules/FooterModule";
import "animate.css";

export default function Home() {
  return (
    <>
      <Container>
        <Box>
          <HomeModule />
        </Box>
      </Container>
      <FooterModule />
    </>
  );
}
