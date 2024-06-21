let value = document.getElementById('con1');
let btns = document.querySelectorAll('button')
let counter = 0;
function updateCountValue(){
    if(counter>0){
        value.innerHTML = counter
        value.style.color = 'green'
    }else if (counter < 0){
        value.innerHTML = counter
        value.style.color = 'red'
    }else{
        value.innerHTML = counter
        value.style.color = 'blue'
    }
}
btns[0].addEventListener('click', ()=>{
    counter++;
    updateCountValue()
})
btns[1].addEventListener('click',()=>{
    counter--;
    updateCountValue()
} )
btns[2].addEventListener('click', ()=>{
    counter =0
    updateCountValue()
})
