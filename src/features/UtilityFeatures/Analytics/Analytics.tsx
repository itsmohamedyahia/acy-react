import image from "../../../assets/images/Renovation & Construction Services Your Story.png";
import styled from "styled-components";
import { Title } from "../../../styled";

// import { css } from "@emotion/react";
// import styled from "@emotion/styled";

export default function AnalyticsPage() {
  const StyledTitle = styled(Title)`
    margin-left: 6rem;
  `;

  const Container = styled.div`
    display: flex;
    justify-items: end;
    width: 100%;
    height: 100%;
  `;
  const Img = styled.img`
    width: 50%;
    margin-left: auto;
    margin-top: auto;
    display: block;
  `;

  return (
    <Container>
      <StyledTitle>Under Construction</StyledTitle>
      <Img src={image} />
    </Container>
  );
}
