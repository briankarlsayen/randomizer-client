import { routeGetApi } from "./api";
import { cardsStore } from "./store/CardStore";

const initialize = async () => {
  console.log("run thisss");

  const fetchCards = await routeGetApi("/cards").then((res) => {
    // initializeCards(res)
    console.log("res", res?.data);
  });

  return Promise.allSettled([fetchCards]);
};

export default initialize;
