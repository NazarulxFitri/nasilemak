import { HeadTag } from "@/components";
import { Box, Container } from "@mui/material";
import HomeModule from "@/modules/HomeModule";
import FooterModule from "@/modules/FooterModule";

export default function Home() {
  return (
    <>
      <HeadTag />
      <Container>
        <Box>
          <HomeModule />
        </Box>
      </Container>
      <FooterModule />
    </>
  );
}
