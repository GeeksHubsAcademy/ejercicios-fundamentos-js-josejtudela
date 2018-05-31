// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS
for(let i=1;i<=100;i++){
  if(isMultiple3(i) && isMultiple5(i)){
    console.log("GEEKSHUBS")
  }else if(isMultiple3(i)){
      console.log("GEEKS");
  }else if(isMultiple5(i)) {
      console.log("GEEKS");
  }else{
    console.log(i)
  }
}

function isMultiple3(number){
  let result = false;
  if(number % 3 === 0){
    result = true;
  }
  return result
};

function isMultiple5(number){
  let result = false;
  if(number % 5 === 0){
    result = true;
  }
  return result
};
