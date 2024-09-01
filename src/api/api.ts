import { routeDeleteApi, routeGetApi, routePostApi, routeUpdateApi } from ".";

// card-items apis
export const createCardItem = async (params) => {
  const response = await routePostApi("/card-items", params);
  return response;
};

export const archiveCardItem = async (id: number) => {
  const response = await routeDeleteApi(`/card-items/${id}`);
  return response;
};

// cards apis
export const selectCardItem = async (id: number, params: any) => {
  const response = await routeUpdateApi(`/cards/select/${id}`, params);
  return response;
};

export const createCard = async () => {
  const response = await routePostApi(`/cards`, {});
  return response;
};

export const archiveCard = async (id: number) => {
  const response = await routeDeleteApi(`/cards/${id}`);
  return response;
};
