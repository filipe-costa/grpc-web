let uuid = 0;

export const generateUuid = () => {
  uuid++;
  return uuid.toString();
};
