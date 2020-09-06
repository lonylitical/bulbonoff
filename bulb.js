window.i=0;
function switchit()
{
    var takeimage=document.getElementById('offbulb');
    var textt=document.getElementById('btnn');
    if(window.i %2==0)
    {
     takeimage.src="bulbon.jpeg";
        textt.innerHTML="off";   
    }
    else
    {
        takeimage.src="bulboff.jpeg";
        textt.innerHTML="on";
    }
    window.i++;
}
