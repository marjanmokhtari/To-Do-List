let inp=document.getElementById('task')

function todo(){
    let temp=inp.value
    if(temp.length<3){
        alert("Task must be at least three characters long")
    }else{
        let _li=document.createElement('li')
        _li.style.display='flex'
        _li.style.justifyItems='end'
         _li.innerHTML=`<input  class='myinp' onclick='_del(this)' type='checkbox'>
        <h2><span class='line'></span><strong> `+temp+`</strong></h2>
        <span class='trash' onclick='_close(this)'><i class=icon-trash-empty><i></span>`
        document.getElementById('listtask').appendChild(_li)
        _li.classList.add('listyle')
        inp.value=null
        inp.focus()


    }
}
function _del(s){
    let _child = s.nextElementSibling.children
    if(s.checked){
        _child[0].style.width = '100%'
    }else{
        _child[0].style.width = '0'
    }

}
function _close(s){
    s.parentElement.remove()

}