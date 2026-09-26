// STATE
const state = {
  selectedCharacter: null,
};

// grab elements
const characterList = document.querySelector("#characters");
const homeView = document.querySelector("#home-view");
const detailView = document.querySelector("#detail-view");
const characterName = document.querySelector("#character-name");
const characterImage = document.querySelector("#character-image");
const backButton = document.querySelector("#back");

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

// get details
const getDetails = async (id) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const result = await response.json();
    state.selectedCharacter = result;
    characterName.textContent = result.name;
    characterImage.src = result.image;
    homeView.classList.add("hidden");
    detailView.classList.remove("hidden");
  } catch (error) {
    characterName.textContent = "Error loading character. Try again later.";
    homeView.classList.add("hidden");
    detailView.classList.remove("hidden");
  }
};
// click event listener
characterList.addEventListener("click", (event) => {
  const id = event.target.dataset.id;

  getDetails(id);
});

// back button event listener
backButton.addEventListener("click", () => {
  detailView.classList.add("hidden");
  homeView.classList.remove("hidden");
});
