
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

for(let i=0;i<matriz.length;i++){
  for(let j=0;j<matriz.length;j++){
    matriz[i][j] = i.toString()+j.toString();
  }
}
console.log(matriz);
