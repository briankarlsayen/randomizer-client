import { cardsStore } from "../../store/CardStore";
import { useLocation } from "react-router-dom";
import Selected from "./Selected";
import Selection from "./Selection";

// screens - selection | selected | view

function Item() {
  const { cards } = cardsStore((state) => state);
  let location = useLocation();
  const id = location?.pathname?.split("/").slice(-1)[0];

  const selectedCard = cards.find((card) => card.id === Number(id));

  return selectedCard?.title ? (
    <Selected title={selectedCard?.title} />
  ) : (
    <Selection />
  );
}

export default Item;
