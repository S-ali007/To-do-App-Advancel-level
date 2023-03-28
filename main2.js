// main page------------------------------------------------------------------------------
let notesList = document.getElementById("notes-list");
let notesObj = [];
let listnote =document.getElementById("note-list");
// let noteId = document.getElementById("note");
// let date = ;
let linkNote = document.getElementById("notestoshow");





const pushRoute = (id) => { 
  window.location.href = `/edit-text.html?id=${id}`
}



function showNotes() {
  let notes = localStorage.getItem("note");
  if (!notes) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = " ";
  notesObj.forEach(function (element, index) {
    const noteEl= document.createElement("div")
    noteEl.addEventListener("click", ()=>{
      pushRoute(element.id)
      

    })
    noteEl.innerHTML = ` <div id="note">
    <a id="addnotes">
      <div class="inner-content">
        <p class="i-c-heading">${element.title}</p>
        <p class="last-updated">Last Editied :6 minutes ago</p>
      </div>
    </a>
  </div> `

  
   listnote.appendChild(noteEl);

    


  }
  );

  let notetoshow = document.getElementById("notestoshow");
  if (notesObj.length != 0) {
   
    notetoshow.innerHTML = html;
  } else {
    notetoshow.innerHTML = `
    <div class="para">
        <p class="para-text">No notes to Show</p>
      </div>`;
  }

}






showNotes();
