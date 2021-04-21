function goRoulette(){

    var r1 = document.getElementById("r1").value;
    var r2 = document.getElementById("r2").value;
    var r3 = document.getElementById("r3").value;
    var r4 = document.getElementById("r4").value;

    const b1 = document.getElementById("b1text");
    const b2 = document.getElementById("b2text");
    const b3 = document.getElementById("b3text");
    const b4 = document.getElementById("b4text");

    b1.innerHTML = r1;
    b2.innerHTML = r2;
    b3.innerHTML = r3;
    b4.innerHTML = r4;



}