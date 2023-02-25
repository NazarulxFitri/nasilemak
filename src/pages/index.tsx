import { HeadTag } from "@/components";
import { Box, Container } from "@mui/material";
import HomeModule from "@/modules/HomeModule";

export default function Home() {
  return (
    <>
      <HeadTag />
      <Container>
        <Box>
          <HomeModule />
        </Box>
      </Container>
    </>
  );
}
