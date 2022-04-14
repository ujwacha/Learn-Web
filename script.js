function calculator(){
    var p = prompt("principal");//document.getElementById("pri") ;
    var t = prompt("time");//document.getElementById("time");
    var r = prompt("rate");//document.getElementById("r");
    var cons = (p*t*r)/100 ;
    document.write("the intrest is " + cons);
}
