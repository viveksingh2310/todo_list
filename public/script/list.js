/////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll("a"); // Select all links
//     const overlay = document.createElement('div'); // Create the overlay element
//     overlay.className = 'overlay';
//     document.body.appendChild(overlay); // Append the overlay to the body

//     links.forEach(link => {
//         link.addEventListener("click", function(event) {
//             if (!link.classList.contains('no-transition')) {
//                 event.preventDefault(); // Prevent default link behavior

//                 // Activate the white overlay with ease-in-out effect
//                 overlay.classList.add("active");

//                 // Wait for the overlay transition to complete
//                 setTimeout(() => {
//                     window.location.href = link.href; // Navigate to the new page
//                 }, 500); // Duration of the overlay effect (0.5s)
//             }
//         });
//     });

//     // Remove the overlay when the new page loads
//     window.addEventListener("load", function() {
//         overlay.classList.remove("active");
//     });
// });
/////////////////////////////////////
console.log('hello hte list.js is running successfully')
$("#add-new-task").focus();
$(".sub-btn").click(function (ve) {
    if (document.getElementById('add-new-task').value != "") {
        fetch('/list', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title": returnAndEmptyInput()
            })
        })
    }
});
async function isImportant(id) {
    const result = await fetch('/list/imp', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id": id
        })
    }).then((response) => {
        return response.json();
    }).catch((data) => {
        console.log(data);
    });
    return result.response;
}
function getID(ele) {
    const hoveredLabel = $(ele).siblings('class' == 'form-check-input').attr('id');
    const id = hoveredLabel.replace('flexCheckDefault', '');
    return id
}
async function  getTaskDetails(id){
    const result=await fetch('/list/byid',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
            "id":id
        }),
    }).then((response)=>response.json()).catch(err=>console.log(err))
    return result;//here the desired list willbe returned successfully

}
function updateInfo(id){
    const editForm=document.querySelector('#edit-form');
    const formdata=new FormData(editForm);
   const title=formdata.get('edit-title')
   const note= formdata.get('edit-note')
    const date=formdata.get('edit-date')
   let tags= formdata.get('edit-tags')
   tags=tags.split(',')
   const result=fetch('/list',{
    method:'POST',
    headers: { 'Content-Type': 'application/json'   
     },
    body: JSON.stringify({
        "id":id,
        "updatedItem":{
            "title":title,
            "note":note,
            "date":date,
            "tags":tags,
        }
    })
   }).then(response=>response.json())
   .catch(err=>console.log(err)); 
}
// $('.edit-save').on('click',function(e){
//     e.preventDefault();
//     updateInfo(id);
//     // console.log('the format of the datetime format is : '+document.getElementById('edit-date').value)

// })

$('.form-check-label').hover(async function () {
    const id = getID(this);
    const editButton = $("<span><button id='edit-btn' >Edit</button></span>")
    let text = '';
    const res = await isImportant(id);
    if (res == 'true')
        text = 'remove imp'
    else text = 'make imp'
    console.log('the mf textis:' + text);
    const impButton = $("<span><button id='imp-btn'> " + " " + text + " " + " </button></span>")
    $(this).append(impButton);
    $(this).append(editButton);
    $('#edit-btn').on('click', async function (e) {
        //title,note
        e.preventDefault();
        const editTitle=document.getElementById('edit-title');
        const editTag=document.getElementById('edit-tags');
        const editDate=document.getElementById('edit-date');
        const editNote=document.getElementById('edit-note');

///here you have to make changes
const task=await getTaskDetails(id);
console.log(task.item);
if(task.item.note!=null && task.item.note){
    editNote.value=task.item.note;
}
if(task.item.date!=null){
    editDate.value=task.item.date;
}
else{
    editDate.value='  ';
}
editTitle.value=task.item.title;
if(task.item.tags==null || !task.item.tags)
{
    editTag.value=' ';
}
else{
    let tagsText='';
    task.item.tags.forEach(tag =>{
        if(tag==task.item.tags[0])
            tagsText=tag
        else
        tagsText=tagsText+','+tag
        })
        editTag.value=tagsText;
}
$('.edit-save').on('click',function(e){
    // e.preventDefault();
    updateInfo(id);
    // console.log('the format of the datetime format is : '+document.getElementById('edit-date').value)

})
        $('#edit-div').toggle();
        console.log('edit button is clicked at ' + id);
    });




    $('#imp-btn').on('click', function (e) {
        fetch('/list/imp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": id
            })
        })
        if (res == 'true')
            $('#imp-btn').text('make imp')
        else
            $('#imp-btn').text('remove imp')
    })
},
    function () {
        $('#imp-btn').remove();
        $('#edit-btn').remove();

    });

function returnAndEmptyInput() {
    const ele = document.querySelector(".add-new-task").value;
    document.querySelector(".add-new-task").value = ''
    return ele
}