console.log(document.querySelector("h2").textContent);

console.log(document.querySelector("h2").innerText="Exercice 1");

console.log(document.querySelector("p").innerText='document.querySelector("h2").innerText="Exercice 1"');

console.log(document.querySelector("section").id);

console.log(document.querySelector("h1").className);
console.log(document.querySelector("h1").classList);

let titres = document.querySelectorAll("h1");
titres.forEach(element => {
    console.log(element.className);
});

console.log(document.querySelector("input").attributes);

console.log(document.querySelector("input").attributes.type.value);

document.querySelector("input#inputPassword3").setAttribute("type", "password");
console.log(document.querySelector("input#inputPassword3"));

document.querySelector("input").setAttribute("type","color");
console.log(document.querySelector("input"));