export function upper(word) {
  return word.toUpperCase();
}

export function lower(word) {
  return word.toLowerCase();
}

export function capitalize(word) {
  if (typeof wordord !== 'string') {
    return '';
  }

  const trimmedWord = word.trim();

  if (!trimmedWord) {
    return '';
  }

  return trimmedWord[0].toUpperCase() + trimmedWord.slice(1).toLowerCase();
}
