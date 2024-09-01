import { create } from "zustand";

interface ICard {
  id: number;
  title?: string | null;
  created_at: string;
  list: IList[];
}

interface IList {
  id: number;
  title: string;
}

// const dummyCards = [
//   {
//     id: 1,
//     title: "Todo",
//     created_at: new string(),
//     list: [
//       { id: 1, title: "Buy groceries" },
//       { id: 2, title: "Write a blog post" },
//       { id: 3, title: "Call the dentist for an appointment" },
//       { id: 4, title: "Organize the bookshelf" },
//       { id: 5, title: "Water the plants" },
//       { id: 6, title: "Plan a weekend trip" },
//       { id: 7, title: "Finish reading a book" },
//       { id: 8, title: "Clean the kitchen" },
//       { id: 9, title: "Update software on the computer" },
//       { id: 10, title: "Respond to emails" },
//     ],
//   },
//   {
//     id: 2,
//     title: "weeewew",
//     created_at: new string(),
//     list: [],
//   },
//   {
//     id: 3,
//     title: "lunch",
//     created_at: new string(),
//     list: [],
//   },
//   {
//     id: 4,
//     title: "coke",
//     created_at: new string(),
//     list: [],
//   },
//   {
//     id: 5,
//     title: "pokemon",
//     created_at: new string(),
//     list: [],
//   },
//   {
//     id: 6,
//     title: "ruby",
//     created_at: new string(),
//     list: [],
//   },
// ];

const cards: ICard[] = [];
const selectedCard: ICard | null = null;

const createCard = ({ set, get, value }) => {
  let prevCards = get().cards;

  return set({ cards: [value, ...prevCards] });
};
const deleteCard = ({ set, get, value }) => {
  let prevCards = get().cards;

  const newCards = prevCards?.filter((card: ICard) => card.id !== value);

  return set({ cards: newCards });
};

const selectCard = ({ set, get, value }) => {
  let cardList: ICard[] = get().cards;
  const card = cardList?.find((card) => card.id === value);
  return set({ selectCard: card ?? null });
};

const addList = ({ set, get, value }) => {
  const { cardId, title, cardItemId } = value;
  let prevList = get().cards;

  const listId = prevList.findIndex((item) => item.id === cardId);

  const card = prevList[listId];
  if (!card) return;
  const newList = [
    ...card.list,
    {
      id: cardItemId,
      title,
    },
  ];

  prevList[listId].list = newList;

  return set({ cards: prevList });
};

const deleteList = ({ set, get, value }) => {
  const { cardId, cardItemId } = value;
  let prevList = get().cards;
  const listId = prevList.findIndex((item) => item.id === cardId);
  const card = prevList[listId];
  if (!card) return;
  const newCardItems = card.list.filter((item) => item.id !== cardItemId);
  prevList[listId].list = newCardItems;
  return set({ cards: prevList });
};

const selectRandomListItem = ({ set, get, value }) => {
  const { cardId, selectedCardId } = value;
  let prevList = get().cards;

  const listId = prevList.findIndex((item) => item.id === cardId);

  const card = prevList[listId];
  if (!card) return;

  // random functionality
  // const randomIndex = Math.floor(Math.random() * prevList[listId].list.length);

  prevList[listId].title =
    prevList[listId]?.list?.find((item) => item.id === selectedCardId)?.title ??
    "";

  console.log("prevList", prevList[listId].title);

  return set({ cards: prevList });
};

const setViewingState = ({ set, value }) => {
  return set({ isViewing: value });
};

const initializeCards = ({ set, value }) => {
  return set({ cards: value });
};

const cardStoreObject = (set: any, get: any) => ({
  cards,
  selectedCard,
  isViewing: false,
  createCard: (value: ICard) => createCard({ set, get, value }),
  deleteCard: (value: number) => deleteCard({ set, get, value }),
  selectCard: (value: number) => selectCard({ set, get, value }),
  addList: (value: { cardId: number; title: string; cardItemId: number }) =>
    addList({ set, get, value }),
  deleteList: (value: { cardId: number; cardItemId: number }) =>
    deleteList({ set, get, value }),
  selectRandomListItem: (value: { cardId: number; selectedCardId: number }) =>
    selectRandomListItem({ set, get, value }),
  setViewingState: (value: boolean) => setViewingState({ set, value }),
  initializeCards: (value: ICard[]) => initializeCards({ set, value }),
});

export const cardsStore = create(cardStoreObject);
