let objData=JSON.parse(localStorage.getItem('Data')) || {};

console.log(objData,Object.keys(objData).length);
let title=document.getElementById('title');
let notes=document.getElementById('notes');
let noteCreation = document.querySelector('.newNotes');
let showList=document.querySelector('.taskListDiv');
let index=Number(Object.keys(objData).pop())+1 || 0,temp=0;
showTask()
noteCreation.addEventListener('click',(e)=>{
    e.preventDefault();
    if(title.value.trim() === ""){
        alert('Please select Title');
    }
    else{
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(today,"\n",time)
    if(noteCreation.innerText==="New note"){
    objData[index]={title:title.value, notes:notes.value ,created:"00:00:00",updated:"00:00:00"}
    console.log(notes.value,objData)
    
        console.log(time,objData[index]['created'])
        objData[index]['created']=time;
        objData[index]['updated']=time;


        index++;
    }
    else{
        console.log(objData[temp])
        objData[temp]['title']=title.value
        objData[temp]['notes']=notes.value
        objData[temp]['updated']=time;
        noteCreation.innerText="New note";
        console.log(objData[temp])
    }
    title.value=""
    notes.value=""
    console.log(objData);
    localStorage.setItem("Data",JSON.stringify(objData));
    showTask();
}
})
function showTask(){
    showList.innerHTML="";
    close.disabled=false;
    for(let key in objData){
        let showdiv = document.createElement('div');
        let insideDiv=document.createElement('div');
        insideDiv.style.display="flex";
        let showTitle = document.createElement('h4');
        showTitle.setAttribute('class','clickTitle');
        let showNotes = document.createElement('h5');
        showNotes.setAttribute('class','dispNotes');
        let created =document.createElement('h4');
        created.innerText="Created Time : "+objData[key].created;
        let updated =document.createElement('h4');
        updated.innerText="Last Updated Time : "+objData[key].updated;
        showTitle.innerText="Title : "+objData[key].title;
        showTitle.style.cursor='pointer';
        showNotes.innerText="Notes : "+objData[key].notes;
        showTitle.addEventListener('click',(e)=>{
            e.preventDefault();
            showNotes.classList.toggle("dispNotes");
        })  
        let close=document.createElement('button');  
        close.setAttribute('class','delete');
        close.innerText="X";
        close.addEventListener('click',(e)=>{
            e.preventDefault();
            delete objData[key];
            localStorage.setItem("Data",JSON.stringify(objData));
            showTask();
            console.log(objData);
        });
        let edit=document.createElement('button');
        edit.setAttribute('class','Edit');
        edit.innerText="Edit";
        edit.addEventListener('click',(e)=>{
            title.value=objData[key].title
            notes.value=objData[key].notes
            noteCreation.innerText="Update Notes";
            temp=key;
            close.disabled=true;
            // showList.removeChild(showdiv)
        });
        insideDiv.appendChild(showTitle);
        insideDiv.appendChild(edit);
        insideDiv.appendChild(close);
        showdiv.appendChild(insideDiv);
        showdiv.appendChild(created);
        showdiv.appendChild(updated);
        showdiv.appendChild(showNotes);
        showList.appendChild(showdiv)
    }   
}


// let title=document.getElementById('title');
// let notes=document.getElementById('notes');
// let noteCreation = document.querySelector('.newNotes');
// let showList=document.querySelector('.taskListDiv');
// let temp=0;
// console.log(localStorage.length)
// noteCreation.addEventListener('click',(e)=>{
//     console.log(index)
//     e.preventDefault();
//     if(title.value.trim() === ""){
//         alert('Please select Title');
//     }
//     else{
//         var today = new Date();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         if(noteCreation.innerText==="New note"){
//             localStorage.setItem(Data,JSON.stringify({title:title.value, notes:notes.value ,created:time,updated:time}))
//             index++
//             console.log(index)
//         }
//         console.log(index)
//         // else{

//             // localStorage.setItem(temp)
//             // objData[temp]={title:title.value, notes:notes.value ,created:"00:00:00",updated:"00:00:00"}
//     //         objData[temp]['title']=title.value
//     //         objData[temp]['notes']=notes.value
//     //         objData[temp]['updated']=time;
//     //         noteCreation.innerText="create new notes";
//     //         console.log(objData[temp])
//         // }
//         title.value=""
//         notes.value=""
//         showTask();
//     }
// })

// function showTask(){
//     showList.innerHTML="";
//     close.disabled=false;
//     console.log(localStorage)
//     for(let key in localStorage){
        
//         if(key === "length")
//             break;
//         console.log(key,"key")
//         let showdiv = document.createElement('div');
//         let insideDiv=document.createElement('div');
//         insideDiv.style.display="flex";
//         let showTitle = document.createElement('h4');
//         showTitle.setAttribute('class','clickTitle');
//         let showNotes = document.createElement('h5');
//         showNotes.setAttribute('class','dispNotes');
//         let created =document.createElement('h4');
//         created.innerText="Created Time : "+JSON.parse(localStorage.getItem(key)).created;
//         let updated =document.createElement('h4');
//         updated.innerText="Last Updated Time : "+JSON.parse(localStorage.getItem(key)).updated;
//         showTitle.innerText="Title : "+JSON.parse(localStorage.getItem(key)).title;
//         showTitle.style.cursor='pointer';
//         showNotes.innerText="Notes : "+JSON.parse(localStorage.getItem(key)).notes;
//         showTitle.addEventListener('click',(e)=>{
//             e.preventDefault();
//             showNotes.classList.toggle("dispNotes");
//         })  
//         let close=document.createElement('button');  
//         close.setAttribute('class','delete');
//         close.innerText="X";
//         close.style.cursor='pointer';
//         close.style.paddingRight='0.5rem';
//         close.addEventListener('click',(e)=>{
//             e.preventDefault();
//             delete localStorage.removeItem(key);
//             showTask();
//         });
//         let edit=document.createElement('button');
//         edit.setAttribute('class','Edit');
//         edit.innerText="Edit";
//         edit.addEventListener('click',(e)=>{
//             title.value=JSON.parse(localStorage.getItem(key)).title
//             notes.value=JSON.parse(localStorage.getItem(key)).notes
//             noteCreation.innerText="Update Notes";
//             temp=key;
//             close.disabled=true;
//             showList.removeChild(showdiv)
//         });
//         insideDiv.appendChild(showTitle);
//         insideDiv.appendChild(edit);
//         insideDiv.appendChild(close);
//         showdiv.appendChild(insideDiv);
//         showdiv.appendChild(created);
//         showdiv.appendChild(updated);
//         showdiv.appendChild(showNotes);
//         showList.appendChild(showdiv)
//     }   
// }