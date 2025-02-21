let condition = true;

//noprotect
while (condition) {
  let comparisonResult = '';
  let guessStatus = '¡Ha adivinado!';
  let strNumber = prompt('Ingrese un número entre el 1 y el 9');
  let number = Number(strNumber);
  
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  
  //noprotect
  while (number < 1 || number > 9) {
    strNumber = prompt('Ingrese un número válido entre el 1 y el 9');
    number = Number(strNumber);
  }
  
  const userGuess = prompt('Adivine si el número que ingresó es mayor, menor o igual al número que la computadora ha generado. (Escriba "mayor", "menor", o "igual")').toLowerCase();
  
  if (userGuess === 'mayor' && number <= randomNumber) {
    guessStatus = '¡No ha adivinado!';
  } 
  else if (userGuess === 'menor' && number >= randomNumber) {
    guessStatus = '¡No ha adivinado!';
  } 
  else if (userGuess === 'igual' && number !== randomNumber) {
    guessStatus = '¡No ha adivinado!';
  }
  
  alert('La computadora eligió ' + randomNumber + ', usted eligió ' + number + '. Su elección fue ' + userGuess + '. ' + guessStatus);
  
  const newCondition = prompt('¿Desea jugar nuevamente? SI/NO').toLowerCase();
  
  condition = newCondition === 'si'
}