/*1.era forma de css con webpacks:Importando el css en el js, para que use el .css sea invocado como una libreria mas y 
asi poder poner los estilos
con esta importacion (ademas de lo del webpack config),invocamos el css dentro del js y
hacemos que webpack mande al dist las propiedas del css
Inconvenientes: No estamos invocando de forma directa, el .css por lo que nunca va,os a ver un .css en el dist y esto puede ser un problema
si ocupamos el .css de forma global, por ende es mas optimo la 2da forma (instalando unos paquetes que se ven el webpack.config)
*/
import '../css/componentes.css'; 







export const saludar=(nombre)=>{
    console.log('Imprimiendo h1');
    const h1=document.createElement('h1');
    h1.innerText=`Mae ${nombre} que tal`;
    document.body.append(h1);
}