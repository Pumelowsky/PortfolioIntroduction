var my_titles = ['Programmer', 'IT technician', 'Tester'];
var textPos = 0;
var speed = 100;
var i = 0;

typedewriter = () => {
    document.querySelector("#changing-text").innerHTML = my_titles[i].substring(0, textPos) + "<span id='blinker'>\u25ae</span>";
    if(textPos-- != 0)
        setTimeout(typedewriter, speed);
    else
    {
        if(i == my_titles.length-1)
            i=0;
        else 
            i++;
        typewriter();
    }
}

typewriter = () => {
    document.querySelector("#changing-text").innerHTML = my_titles[i].substring(0, textPos) + "<span id='blinker'>\u25ae</span>";
    if(textPos++ != my_titles[0].length)
        setTimeout(typewriter, speed);
    else
        typedewriter();
}

window.addEventListener("load", typewriter);
