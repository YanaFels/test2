export default function sortingCharacters(charactersArray) {
    return charactersArray.sort((a, b) => b.health - a.health);
  }