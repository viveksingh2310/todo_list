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
function getTaskDetails(id){

}
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




    $('#edit-btn').on('click', (function (e) {
///here you have to make changes
        const editTitle=document.getElementById('edit-title');
editTitle.value='dsjfdjfjfdj';
        $('#edit-div').toggle();
        console.log('edit button is clicked at ' + id);
    }));




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