// Afvinken van de items
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

// Maakt een nieuw item aan wanneer je op de "toevoegen aan lijst"-knop drukt
function newElement() {
  var taak = document.createElement("li");
  var inputValue = document.querySelector("input").value;
  var t = document.createTextNode(inputValue);
  taak.appendChild(t);
  if (inputValue === '') {
    alert("Je moet wel een taak toevoegen en niet op je luie reet zitten!");
  } else {
    document.querySelector("ul").appendChild(taak);
  }
  document.querySelector("input").value = "";
}

// Functie toevoegen en linken aan knop
const itemToevoegen = document.querySelector("span");
itemToevoegen.addEventListener("click", newElement);