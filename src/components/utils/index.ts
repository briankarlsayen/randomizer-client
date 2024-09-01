export const formatDate = (date: string) => {
  const options = { month: "2-digit", day: "", year: "2-digit" };
  return date.toLocaleDateString("en-US");
};
