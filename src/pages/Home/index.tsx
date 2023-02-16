import * as S from "pages/Home/home.style";
import bg from "assets/img-background.svg"
import { Text } from "styles/typography";

const Home = () => (
  <S.MainContainer>
    <S.BackgroundImage alt="BackGround" src={bg}/>
    <S.BrandBox>
        <S.SideLeft>
            <S.BrandTitle tag="h1">
                Game Commerce
            </S.BrandTitle>
            <Text tag="h2" size="size1">
                A melhor Loja de games para você
            </Text>
            <S.ListProductsButton href="#products-list">
                Ver Produtos
            </S.ListProductsButton>
        </S.SideLeft>
    </S.BrandBox>
  </S.MainContainer>
);

export default Home;