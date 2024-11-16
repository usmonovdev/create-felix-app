import styled from "styled-components";

export const Container = styled.div`
  && {
    margin-left: auto;
    margin-right: auto;
    /* max-width: "100vw"; */
    width: 100%;
    /* transition: all 250ms ease-in-out; */

    width: clamp(200px, 95%, 394px);
    // Extra small devices (landscape phones, 320px and 430px) - 24px
    @media (min-width: 320px) {
      width: clamp(296px, 95%, 394px);
    }
    // Small devices (landscape phones, 576px and 744px) - 36px
    @media (min-width: 430px) {
      width: clamp(394px, 90%, 688px);
    }
    // Medium devices (tablets, 744px and 992px) - 56px
    @media (min-width: 744px) {
      width: clamp(688px, 85%, 920px);
    }
    // Large devices (laptop, 992px and 1440px) - 72px
    @media (min-width: 992px) {
      width: clamp(920px, 80%, 1340px);
    }
    // Extra large devices (laptop, 1440px and up) - 100px
    @media (min-width: 1440px) {
      width: clamp(1340px, 75%, 1600px);
    }
  }
`;