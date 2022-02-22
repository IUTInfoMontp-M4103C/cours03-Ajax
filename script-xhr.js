// // Version intiale avec .onreadystatechange
// function addPokemon(index) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', `${ROOT_URL}/pokemon/${index}`, true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 const data = JSON.parse(xhr.responseText);
//                 add(data);
//             } else {
//                 console.log(`${xhr.status}: ${xhr.responseText}`);
//             }
//         }
//     }
//     xhr.send();
// }


// Version plus simple avec .onload (uniquement lorsque readyState = 4)
function addPokemon(index) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${ROOT_URL}/pokemon/${index}`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            add(data);
        } else {
            console.log(Error(xhr.statusText));
        }
    }
    xhr.send();
}
