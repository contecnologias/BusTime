
	var x=new Array(30)
	var y=new Array(30)
 		
    var  j=0;
   
    // Autor:  Eliéser Ramírez
	//   25
document.onmousemove = function(e) 
{
    var bloque = document.getElementById("marco");
    bloque.style.top =  + window.scrollY ;  
}   //;


function GuardaRuta()
{
        x;      //  contienen los puntos clave
        y;
 
		var aux=new Array(30);
		var auy=new Array(30);		


	for (var indice in x) {
        aux[indice] = (x[indice]/5.81);   	// convertir 'x' a lat
        aux[indice] = aux[indice]/1000;    	
        aux[indice] = 74.3050484 + aux[indice]; 
        // lo mismo para y          
        auy[indice] = (y[indice]/5.81);     // convertir 'y' a longitud (lng)		
        auy[indice] = (auy[indice]/1000);        
        auy[indice] = 4.772534 + auy[indice];			
    }
    
	aux[indice]=null;
	auy[indice]=null;

 		//  guardar valores aux y auy
	
    IniciaRuta();
}


i=0;

document.ondblclick = function finRuta()
{
   j=1;

}
function deshabita()
{
    var Nr = document.getElementById("Ruta");
    Nr.enabled = false;
  
}
function cierras() 
{        //cierra seccion
}

function IniciaRuta(e) {
    j=0;
    i=-1;   
    var rut = document.getElementById("Ruta");
    rut.value = " ";

    var vel = document.getElementById("ve");
    vel.value = " ";   
     
    document.getElementById("id_pline").setAttribute('points', 0 +","+ 1 +" ");	

    var pu = document.getElementById("npunto");
    pu.textContent = "";    
   
}

document.onclick = function myFunction(e) 
{
    var x1
	var y1    
    
    if (j==0) {
        x1 = (e.clientX);
        y1 = (e.clientY + window.scrollY);
        
        if (i==0)
        {       
            document.getElementById("id_pline").setAttribute('points', + x1 +","+ y1 +" ");	
            
            x[i] = x1    //  guarda la posision inicial en el arreglo
            y[i] = y1

            var pu = document.getElementById("npunto");
            pu.textContent = "";   
        }
        if(i>0) {	
            x[i] = x1;        // guarda en un arreglo global   
            y[i] = y1;       // lo mismo para Y
                        
            var pu = document.getElementById("npunto");
            pu.textContent = i;               // muestra el numero de punto en la etiqueta
            var ve = document.getElementById("ve");
            ve.value = "";        // borra el campo velocidad en punto

            var polyline=document.getElementById("id_pline");             
            var p = polyline.getAttribute("points");           
            polyline.setAttribute("points", p+" "+x[i]+","+y[i]);

        }

    i=i+1;
   }
};
