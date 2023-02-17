import { useDispatch } from "react-redux";
import { IGame } from "interfaces";
import { Text } from "styles/typography";
import * as S from "./gameCard.style";
import { addGameToCart } from "store/Cart/cart.slice";

const GameCard = ({ game }: { game: IGame }) => {
  const dispach = useDispatch();
  const handleGame = () => dispach(addGameToCart(game));

  return (
    <S.GameCard>
      <div>
        <S.GameImage
          alt={game.name}
          src={require(`assets/${game.image}`)}
          title={game.name}
        />
        <Text tag="h3" size="size3" color="grey4">
          {game.name}
        </Text>
      </div>
      <div>
        <S.GamePrice tag="span" size="size4" color="grey2" fontWeight={700}>
          R$ {`${game.price}`.replace(".", ",")}
        </S.GamePrice>
        <S.AddToCartButton onClick={handleGame}>
          Adicionar ao carrinho
        </S.AddToCartButton>
      </div>
    </S.GameCard>
  );
};

export default GameCard;
