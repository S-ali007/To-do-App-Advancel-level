// console.log("error");
// edit page==================================================
let addbtn=document.getElementById('add-note');
let noteObj = [] ;
let txtObj ;

let selectedNoteId = localStorage.getItem('selectedNoteId');
const noteIndex = noteObj.findIndex(note => note.id === parseInt(selectedNoteId));



addbtn.addEventListener('click',function(event){

    let addtxt=document.getElementById('addtxt');
    let txtarea =document.getElementById('txtarea');
    let note=localStorage.getItem('note');
    let txtdescription=localStorage.getItem('txtdescription');
    if(! note ){
    noteObj =[];
    txtObj =[];
    }

else
{
    noteObj=JSON.parse(note);
    txtObj=JSON.parse(txtdescription);
}

noteObj.push({
    title:addtxt.value,
    description:txtarea.value,
    id: Date.now()
});

// txtObj.push(txtarea.value);

localStorage.setItem('note',JSON.stringify(noteObj));

localStorage.setItem('txtdescription',JSON.stringify(txtObj));

addtxt.value= "  ";
console.log(noteObj);
console.log(this.id)
console.log(txtObj);
window.location.href= "/";
// showNotes();

})


let removeItem = document.getElementById("remove-note");

removeItem.addEventListener("click",function(event){
    // event.preventDefault();
    // console.log(localStorage.getItem("note"));
    
    deleteData();
})

function deleteData() {
    localStorage.removeItem("addtxt");
    localStorage.removeItem("txtarea");
    console.log(localStorage.clear("note"));



    // Retrieve the ID of the selected note from local storage
const selectedNoteId = localStorage.getItem('selectedNoteId');

// Find the index of the note object with the selected ID
const noteIndex = noteObj.findIndex(note => note.id === parseInt(selectedNoteId));

// If a note object with the selected ID was found, remove it from the noteObj array
if (noteIndex !== -1) {
  noteObj.splice(noteIndex, 1);
}

// Save the updated noteObj array back to local storage
localStorage.setItem('noteObj', JSON.stringify(noteObj));
    
  }

