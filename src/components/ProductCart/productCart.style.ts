import styled from "styled-components";
import { Text } from "components/Text/Text.style";

export const StyleProductCart = styled.li`
  display: flex;
  margin-bottom: 1rem;
  text-align: start;
  ul {
    width: 60%;
    margin-left: 20px;
  }
  li {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  img {
    object-fit: contain;
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }
`;

export const GameTitle = styled.li`
  display: flex;
  h4 {
    padding-top: 5px;
    color: ${({ theme }) => theme.colors.grey.secondary};
  }
`;

export const GamePrice = styled(Text)`
  padding-right: 1rem;
`;
export const GameAmount = styled(Text)`
  padding: 0 1rem;
  font-size: 18px;
`;
