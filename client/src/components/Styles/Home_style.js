import styled from "styled-components";

export const HomeStyled = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  
  img {
    width: 100%;
  }
  
  .text {
    font-family: "Handlee", cursive;
    background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
  }
  
  .link {
    font-size: 6rem;
    color: black;
  }
`;
