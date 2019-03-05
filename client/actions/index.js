export const washPeach = () => {
  return {
    type: "WASH"
  };
};

export const eatPeach = () => {
  return {
    type: "EAT",
    bites: 2
  };
};

export const rotPeach = () => {
  return {
    type: "ROT"
  };
};

export const inputChange = (title, name, val) => {
  return { type: "INPUT_VALUE", title, name, val };
};
