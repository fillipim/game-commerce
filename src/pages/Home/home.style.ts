import styled from "styled-components";
import { Text } from "components/Text/Text.style";

export const MainContainer = styled.main`
  width: 100%;
  padding: 0 5%;
  h3 {
    margin: 1rem 0;
  }
`;
export const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  inset: 0;
`;

export const BrandBox = styled.section`
  width: 100%;
  display: flex;
  margin-top: 200px;
  h2 {
    color: ${({ theme }) => theme.colors.blue.primary};
    margin: 2rem 0;
  }
  height: 100vh;
`;

export const ListProductsButton = styled.a`
  padding: 0.75rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.blue.secondary};
  color: ${({ theme }) => theme.colors.ligth.primary};
  margin-top: 0.75rem;
`;

export const BrandTitle = styled(Text)`
  font-size: 50px;
  font-weight: 500;
`;
export const SideLeft = styled.div`
  width: 50%;
`;
