// Version moderne avec fetch (qui renvoie une promesse)
function addPokemon(index) {
    fetch(`${ROOT_URL}/pokemon/${index}`) // -> renvoie une promesse
        .then(response => response.json())      // -> renvoie une promesse
        .then(data => add(data))
        .catch(error => console.log(error));
}
