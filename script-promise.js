// Version où on renvoie une promesse construite à partir d'un XMLHttpRequest
function requestPokemon(index) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${ROOT_URL}/pokemon/${index}`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            } else {
                reject(`${xhr.status}: ${xhr.responseText}`);
            }
        }
        xhr.send();
    });
}


function addPokemon(index) {
    requestPokemon(index)
    .then(data => add(data))
    .catch(error => console.log(error));
}


// // Version sans la gestion d'erreurs (uniquement paramètre resolve pour la promesse)
// function requestPokemon(index) {
//     return new Promise(function (resolve) {
//         xhr = new XMLHttpRequest();
//         xhr.open('GET', `${ROOT_URL}/pokemon/${index}`, true);
//         xhr.onload = function () {
//             const data = JSON.parse(xhr.responseText);
//             resolve(data);
//         }
//         xhr.send();
//     });
// }


// function addPokemon(index) {
//     requestPokemon(index)
//     .then(data => add(data));
// }
