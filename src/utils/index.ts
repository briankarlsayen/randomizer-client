export const checkStatusCode = (statusCode: number) => {
  const codes = [200, 201];
  return codes.some((code) => code === statusCode);
};
