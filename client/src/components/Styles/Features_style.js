import styled from "styled-components";

export const FeaturesStyled = styled.div`
  .content {
    display: flex;
    flex-wrap: wrap;
    font-family: "Roboto", sans-serif;
  }

  .main {
    flex: 3 55rem;
    .notFound {
      font-family: "Handlee", cursive;
      font-size: 3rem;
      text-align: center;
      margin-top: 1rem;
      margin-left: 12rem;
    }
    .error {
      horizontal-align: right;
      margin-left: 24rem;
    }
  }

  .sidebar {
    flex: 1 25rem;
    display: flex;
  }

  .Filter_Categories {
    display: flex;
    margin-top: 1rem;
  }
  .list {
    z-index: 2;
  }
`;
