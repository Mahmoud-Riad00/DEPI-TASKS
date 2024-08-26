var titleinput = document.querySelector(".title-input");

var desinput = document.querySelector(".descreption-input");

var form = document.querySelector("form");
var notes = document.querySelector(".notes");
var note = document.querySelector(".note");
var noteH3 = document.querySelector(".note h3");
var noteP = document.querySelector(".note p");
var btn = document.querySelector(".btn");
var formUpdate = document.querySelector(".formUpdate");
var optionBtn = document.querySelectorAll(".optionButton");
var deleteButtons = document.querySelectorAll(".delete");
var s;
function detectLanguage(text) {
  if (text.length === 0) return "Unknown";

  var code = text.charCodeAt(0);

  if (code >= 0x0600 && code <= 0x06ff) {
    return "Arabic";
  } else if (code >= 0x0000 && code <= 0x007f) {
    return "English";
  } else {
    return "Unknown";
  }
}

var noteArray = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var detectedTitleLanguage = detectLanguage(titleinput.value);
  var detectedDescriptionLanguage = detectLanguage(desinput.value);
  var newNote = document.createElement("div");
  newNote.classList.add("newNoteContainer");
  var newNoteText = document.createElement("div");
  newNoteText.classList.add("note");
  var newTitle = document.createElement("h3");
  newTitle.textContent = titleinput.value;
  var newDescription = document.createElement("p");
  newDescription.textContent = desinput.value;
  var Buttons = document.createElement("div");
  Buttons.classList.add("Buttons");
  var optionButton = document.createElement("button");
  optionButton.classList.add("optionButton");
  optionButton.textContent = "option";
  var deleButton = document.createElement("button");
  deleButton.textContent = "Delete";
  deleButton.classList.add("delete");
  if (detectedTitleLanguage === "Arabic") {
    newTitle.style.textAlign = "right";
  } else {
    newTitle.style.textAlign = "left";
  }
  if (detectedDescriptionLanguage === "Arabic") {
    newDescription.style.textAlign = "right";
  } else {
    newDescription.style.textAlign = "left";
  }

  noteArray.push({
    title: newTitle.textContent,
    body: newDescription.textContent,
  });
  localStorage.setItem("notesls", JSON.stringify(noteArray));
  newNoteText.appendChild(newTitle);
  newNoteText.appendChild(newDescription);

  newNote.appendChild(newNoteText);
  Buttons.appendChild(optionButton);
  Buttons.appendChild(deleButton);
  newNote.appendChild(Buttons);
  notes.appendChild(newNote);

  renderNotes();
  titleinput.value = "";
  desinput.value = "";
});

function renderNotes() {
  notes.innerHTML = "";
  noteArray.forEach(function (note) {
    var newNote = document.createElement("div");
    newNote.classList.add("note");
    var newNote = document.createElement("div");
    newNote.classList.add("newNoteContainer");

    var newNoteText = document.createElement("div");
    newNoteText.classList.add("note");

    var newTitle = document.createElement("h3");
    newTitle.textContent = note.title;
    newTitle.style.textAlign = detectLanguage(note.title);
    var Buttons = document.createElement("div");
    Buttons.classList.add("Buttons");
    var optionButton = document.createElement("button");
    optionButton.classList.add("optionButton");
    optionButton.textContent = "Option";
    var deleButton = document.createElement("button");
    deleButton.textContent = "Delete";
    deleButton.classList.add("delete");
    if (detectLanguage(note.title) === "Arabic") {
      newTitle.style.textAlign = "right";
    } else {
      newTitle.style.textAlign = "left";
    }
    var newDescription = document.createElement("p");
    newDescription.textContent = note.body;
    newDescription.style.textAlign = detectLanguage(note.body);
    if (detectLanguage(note.body) === "Arabic") {
      newDescription.style.textAlign = "right";
    } else {
      newDescription.style.textAlign = "left";
    }

    newNoteText.appendChild(newTitle);
    newNoteText.appendChild(newDescription);
    newNote.appendChild(newNoteText);
    Buttons.appendChild(optionButton);
    Buttons.appendChild(deleButton);
    newNote.appendChild(Buttons);
    notes.appendChild(newNote);
  });
  console.log(optionBtn);
  optionBtn = document.querySelectorAll(".optionButton");
  deleteButtons = document.querySelectorAll(".delete");

  updated();
  deleted();
}
function restoreData() {
  var data = JSON.parse(localStorage.getItem("notesls"));
  noteArray = data || [];
  renderNotes();
}
restoreData();
var indxSelected;

console.log(optionBtn);
function updated() {
  optionBtn.forEach(function (optionButton, idx) {
    optionButton.addEventListener("click", function () {
      titleinput.value = noteArray[idx].title;
      desinput.value = noteArray[idx].body;
      btn.classList.add("hide");
      formUpdate.classList.remove("hide");
      indxSelected = idx;
      console.log(indxSelected);
    });
  });
}
function deleted() {
  deleteButtons.forEach(function (deleButton, idx) {
    deleButton.addEventListener("click", function () {
      noteArray.splice(idx, 1);
      localStorage.setItem("notesls", JSON.stringify(noteArray));
      renderNotes();
      console.log(idx);
    });
  });
}

updated();
deleted();

formUpdate.addEventListener("click", function (e) {
  e.preventDefault();
  noteArray[indxSelected].title = titleinput.value;
  noteArray[indxSelected].body = desinput.value;
  localStorage.setItem("notesls", JSON.stringify(noteArray));
  btn.classList.remove("hide");
  formUpdate.classList.add("hide");
  titleinput.value = "";
  desinput.value = "";
  renderNotes();
});
