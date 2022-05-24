var my_titles = ['Programmer', 'IT technician', 'Tester'];
var textPos = 0;
var speed = 100;
var index = 0;

typedewriter = () => {
    document.querySelector("#changing-text").innerHTML = my_titles[index].substring(0, textPos);
    if(textPos-- != 0)
        setTimeout(typedewriter, speed);
    else
    {
        if(index == my_titles.length-1)
            index=0;
        else 
            index++;
        typewriter();
    }
}

typewriter = () => {
    document.querySelector("#changing-text").innerHTML = my_titles[index].substring(0, textPos);
    if(textPos++ != my_titles[index].length)
        setTimeout(typewriter, speed);
    else
        typedewriter();
}

window.addEventListener("load", typewriter);
