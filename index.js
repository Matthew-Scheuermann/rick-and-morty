// STATE
const state = {
  selectedCharacter: null,
};

// grab elements
const characterList = document.querySelector("#characters");

// fetch API
const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const result = await response.json();
    state.characters = result.results;
    characterList.innerHTML = state.characters
      .map((character) => {
        return `<li data-id = "${character.id}">${character.name}</li>`;
      })
      .join(" ");
  } catch (error) {
    characterList.innerText = "404 Error. Try again later.";
  }
};
getCharacters();
