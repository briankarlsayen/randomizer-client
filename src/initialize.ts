import { routeGetApi } from "./api";

const initialize = async () => {
  const fetchCards = await routeGetApi("/cards").then((res) => {
    console.log("res", res?.data);
  });

  return Promise.allSettled([fetchCards]);
};

export default initialize;
