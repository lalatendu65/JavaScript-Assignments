let task=document.querySelector('input')
let task1=document.querySelector('button')
let task2=document.querySelector('.todos')
let count =-1
task1.addEventListener('click',function(){
    count++
    let paragraph=document.createElement('p')
    paragraph.innerHTML=task.value
    task2.appendChild(paragraph)
    paragraph.setAttribute('key',count)
    paragraph.addEventListener('click',function(){
        task2.removeChild(paragraph)
    })
})