const stringMonth = prompt('Ingrese el mes de nacimiento');
const day = prompt('Ingrese el dia del nacimiento');

const numberMonth = Number(stringMonth);
const numberDay = Number(day);

let month;
let sign;

switch(numberMonth) {
  case 1:
    month = 'enero'
    if (numberDay >= 1 && numberDay <= 20) sign = 'Capricornio'
    else if (numberDay >= 21 && numberDay <= 31) sign = 'Acuario'
    break;
  case 2:
    month = 'febrero'
    if (numberDay >= 1 && numberDay <= 19) sign = 'Acuario'
    else if (numberDay >= 20 && numberDay <= 28) sign = 'Piscis'
    break;
  case 3:
    month = 'marzo'
    if (numberDay >= 1 && numberDay <= 20) sign = 'Piscis'
    else if (numberDay >= 21 && numberDay <= 31) sign = 'Aries'
    break;
  case 4:
    month = 'abril'
    if (numberDay >= 1 && numberDay <= 20) sign = 'Aries'
    else if (numberDay >= 21 && numberDay <= 30) sign = 'Tauro'
    break;
  case 5:
    month = 'mayo'
    if (numberDay >= 1 && numberDay <= 20) sign = 'Tauro'
    else if (numberDay >= 21 && numberDay <= 31) sign = 'Géminis'
    break;
  case 6:
    month = 'junio'
    if (numberDay >= 1 && numberDay <= 20) sign = 'Géminis'
    else if (numberDay >= 21 && numberDay <= 30) sign = 'Cáncer'
    break;
  case 7:
    month = 'julio'
    if (numberDay >= 1 && numberDay <= 22) sign = 'Cáncer'
    else if (numberDay >= 23 && numberDay <= 31) sign = 'Leo'
    break;
  case 8:
    month = 'agosto'
    if (numberDay >= 1 && numberDay <= 23) sign = 'Leo'
    else if (numberDay >= 24 && numberDay <= 31) sign = 'Virgo'
    break;
  case 9:
    month = 'septiembre'
    if (numberDay >= 1 && numberDay <= 22) sign = 'Virgo'
    else if (numberDay >= 23 && numberDay <= 30) sign = 'Libra'
    break;
  case 10:
    month = 'octubre'
    if (numberDay >= 1 && numberDay <= 23) sign = 'Libra'
    else if (numberDay >= 24 && numberDay <= 31) sign = 'Escorpio'
    break;
  case 11:
    month = 'noviembre'
    if (numberDay >= 1 && numberDay <= 22) sign = 'Escorpio'
    else if (numberDay >= 23 && numberDay <= 30) sign = 'Sagitario'
    break;
  case 12:
    month = 'diciembre'
    if (numberDay >= 1 && numberDay <= 21) sign = 'Sagitario'
    else if (numberDay >= 22 && numberDay <= 31) sign = 'Capricornio'
    break;
}


alert('el usuario nacido el ' + numberDay + ' de ' + month + ' tiene signo de ' + sign + '.');