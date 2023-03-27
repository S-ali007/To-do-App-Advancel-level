// console.log("error");
// edit page==================================================
let addbtn = document.getElementById("add-note");
let noteObj = [];
let txtObj;

// let selectedNoteId = localStorage.getItem('selectedNoteId');
// const noteIndex = noteObj.findIndex(note => note.id === parseInt(selectedNoteId));

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

    noteObj.push({
        title: addtxt.value,
        description: txtarea.value,
        id: Date.now(),
    });

    // txtObj.push(txtarea.value);

    localStorage.setItem("note", JSON.stringify(noteObj));


    //   localStorage.setItem("txtdescription", JSON.stringify(txtObj));

    addtxt.value= "  ";
    txtarea.value= " ";
    // console.log(noteObj);
    // console.log(txtObj);
    // showNotes();
  
});


//remove note---------------------------------------------------------------------------------------
let removeItem = document.getElementById("remove-note");

removeItem.addEventListener("click", function (event) {
    deleteData();
    window.location.href = "/";

});




// using the current page's URL---------------------------------------------------------------------
const myUrl2 = new URL(window.location.href);
const product = myUrl2.searchParams.get("id");
// console.log(product)
// localStorage.setItem("data", JSON.stringify(noteObj));

const productData = JSON.parse(localStorage.getItem("note"));
const matchingData = productData.find(note => note.id == product);

if (matchingData) {
    // console.log(matchingData);
    // console.log(productData)
    document.getElementById("addtxt").value = matchingData.title;
    document.getElementById("txtarea").value = matchingData.description;
} else {
    console.log(`No data found for ID `);
}
//  console.log(productData)
//  console.log(matchingData);




// function deleteData() {-------------------------------------------------------------------------------------

function deleteData() {


    const myUrl = new URL(window.location.href);
    console.log(myUrl);
    
    const noteid = myUrl2.searchParams.get("id");
    console.log(noteid)

    const noteData = JSON.parse(localStorage.getItem("note"));
    console.log(noteData) ;


    const indexToDelete = noteData.findIndex(item => item.id == noteid);
    console.log(indexToDelete);

    if (indexToDelete != -1) {
        noteData.splice(indexToDelete, 1);
        localStorage.setItem("note", JSON.stringify(noteData));
    }






    //   localStorage.removeItem("txtarea");
    //   console.log(localStorage.clear("note"));


}
