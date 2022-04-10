/*/
l=cantidad de litros que produce 
pg=precio del galon
tg=cantidad de galones
ga = ganancia por la leche 

 /*/
 let l= Number(prompt("Ingrese cantidad de litros que produce"));

 let pg= +prompt("Ingrese el precio del galon");

 let tg=(l/3.785);
 let ga;
 
 ga=(pg*tg);
 
 alert(`La producción de un día será:$ ${ga}`);