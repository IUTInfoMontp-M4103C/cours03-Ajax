// Version paramétrable où l'on passe en argument les fonctions à exécuter en cas de succès ou erreur
function requestPokemon(index, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${ROOT_URL}/pokemon/${index}`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            onSuccess(data);
        } else {
            onError(`${xhr.status}: ${xhr.responseText}`);
        }
    }
    xhr.send();
}


function addPokemon(index) {
    requestPokemon(index,
        data => add(data),
        error => console.log(error)
    );
}
