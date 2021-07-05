import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <HeaderLogo
          src={"/img/logos/logo.svg"}
          alt={"e-diaristas"}
        ></HeaderLogo>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
