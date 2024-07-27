console.log('hello you are qwwwwwwwwwwwwwwww')
$("#add-new-task").focus();
// $("#add-new-task").on($(selector).keydown(function (e) { 
    
// });)
// $('.form-class').onsubmit(function(event){
//     event.preventDefault();
// })
$(".sub-btn").click(function(ve){
// console.log(returnAndEmptyInput());
if(document.getElementById('add-new-task').value!=""){
fetch('/list',{method:'PUT',
    headers:{ 'Content-Type': 'application/json'},
    body:JSON.stringify({
        "title":returnAndEmptyInput()
    })
})
}
});
function returnAndEmptyInput(){
    const ele=document.querySelector(".add-new-task").value;
    document.querySelector(".add-new-task").value=''
    return ele
}
// (function (e) { 
//     if(e.key=='Enter')
//         console.log($("#add-new-task").text());
// });
// function sumbitEvent(){
//     console.log('bitch you are not working ')
// }