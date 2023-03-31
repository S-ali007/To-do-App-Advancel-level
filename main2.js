let notesList = document.getElementById("notes-list");
let notesObj = [];
let listnote = document.getElementById("note-list");
let filterInput = document.querySelector(".f-notes");
let filterBy = document.querySelector("#filter-by");

const pushRoute = (id) => {
  window.location.href = `/edit-text.html?id=${id}`;
};



// function showNotes() {
// let notes = localStorage.getItem("note");
// // if notes is not present then noteObj is empty in array we use [] instead of null  
// if (!notes) {
// notesObj = [];
// } else {
// notesObj = JSON.parse(notes);
// }

// let html = "";
// notesObj.forEach(function (element, index) {
// const noteEl = document.createElement("div");

// noteEl.addEventListener("click", () => {
// pushRoute(element.id);
// });
// noteEl.innerHTML = ` <div id="note">
// <a id="addnotes">
// <div class="inner-content">
// <p class="i-c-heading">${element.title}</p>
// <p class="last-updated">Last Editied :6 minutes ago</p>
// </div>
// </a>

//   </div> `;
//     html += noteEl.innerHTML;
//   });
// let noToShow = document.getElementById("notestoshow");
// // if noToShow ha then noteObj ki length is not equal to zero ha to noToShow ka innerHtml ma html ko show karo  
// if (noToShow) {
// if (notesObj.length != 0) {
// noToShow.innerHTML = html;
// } else {
// noToShow.innerHTML = `<div class="para"> <p class="para-text">No notes to Show</p> </div>`;
// }
// }
// }

function filterNotes() {
  let notes = localStorage.getItem("note");
  console.log(notes)
  if (!notes) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let input = filterInput.value.toLowerCase();
  let option = filterBy.value;
  console.log(option)
  let filteredNotes = notesObj.filter(function (note) {
    return note.title.toLowerCase().includes(input),note.updatedTime
    
  });



  if (option === "updatedTime") {
    filteredNotes.sort((a, b) => (a.updatedTime > b.updatedTime ? -1 : 1));
  } else if (option === "title") {
    filteredNotes.sort((a, b) => (a.title > b.title ? 1 : -1));
  } else if (option === "time") {
    filteredNotes.sort((a, b) => (a.date > b.date ? 1 : -1));
  }

  showNotes(filteredNotes);
}

function showNotes(prevNotes) {


  let html = "";
  listnote.innerHTML = ``
  prevNotes.forEach(function (element, index) {
    const noteEl = document.createElement("div");
    noteEl.addEventListener("click", () => {
      pushRoute(element.id);
    });
    noteEl.innerHTML = `
      <div class="note">
        <a id="addnotes">
          <div class="inner-content">
            <p class="i-c-heading">${element.title}</p>
            <p class="last-updated">Last Editied :6 minutes ago</p>
          </div>
        </a>
      </div>
    `;
    listnote.appendChild(noteEl);
    //  html += noteEl.innerHTML; 



    let noToShow = document.getElementById("notestoshow");
    if (noToShow) {
      if (prevNotes.length != 0) {
        noToShow.innerHTML = html;
      } else {
        noToShow.innerHTML = `
        <div class="para">
          <p class="para-text">No notes to Show</p>
        </div>`;
      }
    }

  });








}

filterNotes();

filterInput.addEventListener("input", filterNotes);
filterBy.addEventListener("change", filterNotes);





