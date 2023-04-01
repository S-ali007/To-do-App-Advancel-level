// console.log("error");
// edit page==================================================
let addbtn = document.getElementById("add-note");
let noteObj = [];
let txtObj;

// let selectedNoteId = localStorage.getItem('selectedNoteId');
// const noteIndex = noteObj.findIndex(note => note.id === parseInt(selectedNoteId));




//remove note      ----------------------------------------------------------------------------------
let removeItem = document.getElementById("remove-note");

removeItem.addEventListener("click", function (event) {
    deleteData();
    window.location.href = "/";

});




// using the current page's URL------------------------------------------------------------------------------------
const myUrl2 = new URL(window.location.href);
const product = myUrl2.searchParams.get("id");
// console.log(product)
// localStorage.setItem("data", JSON.stringify(noteObj));


const productData = JSON.parse(localStorage.getItem("note")) || []
const matchingData = productData.find(note => note.id == product);

if (matchingData) {
    // console.log(matchingData);
    // console.log(productData)
    document.getElementById("addtxt").value = matchingData.title;
    document.getElementById("txtarea").value = matchingData.description;
}
else {
    console.log(`No data found for ID `);
}
//  console.log(productData)
//  console.log(matchingData);


//update-----------------------------------------------------------------------------------------------------
const noteTitle = document.getElementById("addtxt");
const noteBody = document.getElementById("txtarea");
const noteButton = document.getElementById("add-note");

const myUrl23 = new URL(window.location.href);
const noteId = myUrl23.searchParams.get("id");

let notes = JSON.parse(localStorage.getItem("note")) || []

let existingNote = notes.find((note) => note.id == noteId);

console.log(existingNote);

if (existingNote) {
    // noteTitle.value = existingNote.title;
    // noteBody.value = existingNote.description;
    noteButton.textContent = "Update Note ";
    //   console.log("testing statement");
}
addbtn.addEventListener("click", function (event) {
    let addtxt = document.getElementById("addtxt");
    let txtarea = document.getElementById("txtarea");
    let note = localStorage.getItem("note");
    // let txtdescription=localStorage.getItem('txtdescription');

    if (!note) {
        noteObj = [];
        txtObj = [];
    } else {
        noteObj = JSON.parse(note);
        // txtObj=JSON.parse(txtdescription);
    }
    if (existingNote) {
        const index = notes.findIndex(note => note.id == existingNote.id);
        noteObj[index].title = addtxt.value;
        noteObj[index].description = txtarea.value;
        noteObj[index].updatedTime = new Date()
        console.log([index].updatedTime = new Date())
        // console.log(noteObj[index].description);
        // console.log(noteObj[index].title);
        // noteObj[index].description = txtarea.value;

    }
    else {
        noteObj.push({
            title: addtxt.value,
            description: txtarea.value,
            id: Date.now(),
            createdTime: new Date(),
            updatedTime: new Date()
        });

    }
    // txtObj.push(txtarea.value);

    localStorage.setItem("note", JSON.stringify(noteObj));
    //   localStorage.setItem("txtdescription", JSON.stringify(txtObj));

    addtxt.value = "  ";
    txtarea.value = " ";
    // console.log(noteObj);
    // console.log(txtObj);
    // showNotes();
    window.location.href = "/";
});


// for new node-------------------------------------------------------------------------------------------------------
//   if (note) {
//     // update note in local storage
//     note.title = noteTitle.value;
//     note.description = noteBody.value;
//     localStorage.setItem("note", JSON.stringify(notes));
//     console.log("Note updated successfully");
//   } 
//   else {console.log("No note found")}
//     // add new note to local storage
//     const newNote = {
//       id: Date.now().toString(),
//       title: noteTitle.value,
//       description: noteBody.value,
// })
//     const newNote = {
//       id: Date.now().toString(),
//       title: noteTitle.value,
//       description: noteBody.value,
//     };

// //     noteObj.push(newNote);
// //     localStorage.setItem("note", JSON.stringify(notes));
// //     console.log("Note added successfully");
// //   }
// // });






// function deleteData() {-------------------------------------------------------------------------------------

function deleteData() {


    const myUrl = new URL(window.location.href);
    console.log(myUrl);

    const noteid = myUrl2.searchParams.get("id");
    console.log(noteid)

    const noteData = JSON.parse(localStorage.getItem("note"));
    console.log(noteData);


    const indexToDelete = noteData.findIndex(item => item.id == noteid);
    console.log(indexToDelete);

    if (indexToDelete != -1) {
        noteData.splice(indexToDelete, 1);
        localStorage.setItem("note", JSON.stringify(noteData));
    }





    //   localStorage.removeItem("txtarea");
    //   console.log(localStorage.clear("note"));


}
