import { Container } from "@mui/material";
import Navbar from "../components/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: "3rem" }} maxWidth={false}>
        {children}
      </Container>
    </>
  );
};

export default BaseLayout;
