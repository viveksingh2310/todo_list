console.log('hello you are qwwwwwwwwwwwwwwww')
$("#add-new-task").focus();
$(".sub-btn").click(function(ve){
if(document.getElementById('add-new-task').value!=""){
fetch('/list',{method:'PUT',
    headers:{ 'Content-Type': 'application/json'},
    body:JSON.stringify({
        "title":returnAndEmptyInput()
    })
})
}
});

$('.form-check-label').hover(function(){
const editButton=$("<span><button class='edit-btn' >Edit</button></span>")
    const impButton=$("<span><button class='imp-btn' >Mark important</button></span>")
    $(this).append(impButton);
    $(this).append(editButton);
 
},function(){
 $('.imp-btn').remove();
 $('.edit-btn').remove();
})

function returnAndEmptyInput(){
    const ele=document.querySelector(".add-new-task").value;
    document.querySelector(".add-new-task").value=''
    return ele
}
