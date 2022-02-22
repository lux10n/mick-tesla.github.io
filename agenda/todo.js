const list=document.getElementById('list');
const form=document.querySelector('form');
const item=document.getElementById('item');
list.innerHTML=window.localStorage.todoList;

form.addEventListener('submit',entrez_val);
function entrez_val(e)
{
    e.preventDefault();
    list.innerHTML+=`<li>${item.value}</li>`;
    item.value="";
    storage();
}


list.addEventListener("click",cliquer);
function cliquer(e)
{
    if(e.target.classList.contains('checked')){
        e.target.remove();
    }
    else
    {
        e.target.classList.add('checked');
    }
    storage();
}

function storage()
{
    window.localStorage.todoList=list.innerHTML;
}

// function getValues()
// {
//     var storageContent=window.localStorage.todoList;
//     if(!storageContent){
//         list.innerHTML="<li>Cliquez sur un todo pour le supprimer</li>";
//     }
//     else
//     {
//         list.innerHTML=storageContent;
//     }
// }
// getValues();

