import "./styles.css";
// inicializar array
const a: number = ([] = [1, 2, 3, 5]);
console.log(a);

//array vacio
const nombres: string = ([] = []);
nombres[0] = "pedro";
// se le asigna al indice del array
nombres[1] = "luna";
nombres[2] = "maria";
console.log(nombres);

//function push agrega un elemento al final
nombres.push(4);

//function pop remueve el ultimo
nombres.pop();

//function shipt quita el primero
a.shipt();
