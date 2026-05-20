export const add = (a, b) => {
  return ('Сума: ', a + b);
};

export const sub = (a, b) => {
  return ('Різниця: ', a - b);
};

export const multiply = (a, b) => {
  return ('Множення: ', a * b);
};

export const divide = (a, b) => {
  if (b === 0) {
    return 'Ділення на 0 не можливе';
  }

  return ('Ділення: ', a / b);
};
