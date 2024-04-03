import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  background-color: lightblue;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <Outlet />
        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
