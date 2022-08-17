import { Container } from "@mui/material";
import Navbar from "../components/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth={false}>{children}</Container>
    </>
  );
};

export default BaseLayout;
