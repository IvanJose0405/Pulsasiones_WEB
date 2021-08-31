function Calcular(){
   let resultado;
    let identificacion=document.getElementById("Identificacion").value;
    let nombre=document.getElementById("Nombre").value;
    let edad=parseInt( document.getElementById("Edad1").value);
    let sexo=document.getElementById("Cmbsex").value;
    debugger
    if(sexo=="M") resultado=((210-edad)/10);
    if(sexo=="F") resultado=((220-edad)/10);
    alert("Sus pulsasiones son de: "+resultado);
    Guardar(resultado);
}

function Guardar(pulsacion){ 
    let persona={
        id:document.getElementById("Identificacion").value,
        Nombre: document.getElementById("Nombre").value,
        edad: document.getElementById("Edad1").value,
        sexo:(document.getElementById("Cmbsex").value=="M")?"Masculino":"Femenino",
        pulsacion:pulsacion
    }
    let listaPersonas=localStorage.getItem("personas");
    if(listaPersonas==null) {
        Personas=[];
        Personas.push(persona);
    
    }else{

        Personas=JSON.parse(listaPersonas);
        Personas.push(persona);
    }
    localStorage.setItem("personas",JSON.stringify(Personas));

}
function ConsultarTabla(){

    var Personas=[];
    if (localStorage.getItem('personas')!=null) {
        Personas=JSON.parse(localStorage.getItem('personas'));

    }
    debugger
    Personas.forEach(item => {
        
        document.getElementById("bodyTable").innerHTML  +=
        '<tr>' +
            '<td align="center" style="dislay: none;">' + item.id + '</td>' +
            '<td align="center" style="dislay: none;">' + item.Nombre+ '</td>' +
            '<td align="center" style="dislay: none;">' + item.edad+ '</td>' +
            '<td align="center" style="dislay: none;">' + item.sexo+ '</td>' + 
            '<td align="center" style="dislay: none;">' + item.pulsacion+ '</td>' + '</tr>';
    });
}