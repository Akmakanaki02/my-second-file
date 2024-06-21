function clearResult(){
       document.getElementById('display').value = ' '
   }
    function showInput(value){
        const display = document.getElementById('display');
        display.value +=value;
    }
    function calculateResult(){
        const display = document.getElementById('display');
        try{
            display.value = eval(display.value)
        }catch (e){
            display.value = 'Error'
        }
    }