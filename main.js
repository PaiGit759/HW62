let button_press_count = 0;

let arr = ['"Hello First"','"Hello Second"','"Hello Third"'];



function button_onclick()
{   
        button_press_count++ ;
        document.getElementById("cat").innerHTML = arr[button_press_count % arr.length];     
}
