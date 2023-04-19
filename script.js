function promedio(){
    var cal1=document.getElementById("c1").value;
    var cal2=document.getElementById("c2").value;
    var cal3=document.getElementById("c3").value;
    if(cal1 != false && cal2 != false && cal3 != false){
        cal1=parseInt(cal1);
        cal2=parseInt(cal2);
        cal3=parseInt(cal3);
        var prom = (cal1+cal2+cal3)/3
        window.alert(`tu promedio es ${prom}, tu calificacion es `+ (prom>=6 ? "aprobatoria" : "reprobatoria"));
    }
}