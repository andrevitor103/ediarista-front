import React from "react";
import { SafeEnvironmentContainer } from "./safeEnvironment.style";
import { Container } from "@material-ui/core";

const SafeEnvironment = (props) => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"}></i>
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
