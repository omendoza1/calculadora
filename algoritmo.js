// Definir las funciones flecha para cada operación
let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let multiplicacion = (a, b) => a * b;
let division = (a, b) => a / b;

// Definir las variables para almacenar los números y la operación
let num1 = "";
let num2 = "";
let operacion = "";

// Definir una función para actualizar la pantalla de la calculadora
let actualizarPantalla = () => {
  let pantalla = document.getElementById("pantalla");
  if (operacion == "") {
    // Mostrar el primer número
    pantalla.textContent = num1;
  } else if (num2 == "") {
    // Mostrar el primer número y la operación
    pantalla.textContent = num1 + " " + operacion;
  } else {
    // Mostrar el primer número, la operación y el segundo número
    pantalla.textContent = num1 + " " + operacion + " " + num2;
  }
};

// Definir una función para manejar el evento de presionar un botón de dígito
let presionarDigito = (digito) => {
  if (operacion == "") {
    // Añadir el dígito al primer número
    num1 += digito;
  } else {
    // Añadir el dígito al segundo número
    num2 += digito;
  }
  // Actualizar la pantalla
  actualizarPantalla();
};

// Definir una función para manejar el evento de presionar un botón de operación
let presionarOperacion = (op) => {
  if (num1 == "") {
    // No hacer nada si no hay primer número
    return;
  } else if (num2 == "") {
    // Asignar la operación si no hay segunda número
    operacion = op;
  } else {
    // Calcular el resultado si hay dos números y asignarlo al primer número
    let resultado = calcularResultado();
    num1 = resultado.toString();
    num2 = "";
    operacion = op;
  }
  // Actualizar la pantalla
  actualizarPantalla();
};

// Definir una función para manejar el evento de presionar el botón de igual
let presionarIgual = () => {
  if (num1 == "" || num2 == "" || operacion == "") {
    // No hacer nada si falta algún dato
    return;
  } else {
    // Calcular el resultado y mostrarlo en la pantalla
    let resultado = calcularResultado();
    let pantalla = document.getElementById("pantalla");
    pantalla.textContent = resultado;
    // Reiniciar las variables
    num1 = "";
    num2 = "";
    operacion = "";
  }
};

// Definir una función para manejar el evento de presionar el botón de borrar
let presionarBorrar = () => {
  // Reiniciar las variables y la pantalla
  num1 = "";
  num2 = "";
  operacion = "";
  let pantalla = document.getElementById("pantalla");
  pantalla.textContent = "0";
};

// Definir una función para calcular el resultado según la operación y los números
let calcularResultado = () => {
  let n1 = parseFloat(num1);
  let n2 = parseFloat(num2);
  let resultado;
  switch (operacion) {
    case "+":
      resultado = suma(n1, n2);
      break;
    case "-":
      resultado = resta(n1, n2);
      break;
    case "*":
      resultado = multiplicacion(n1, n2);
      break;
    case "/":
      resultado = division(n1, n2);
      break;
  }
  return resultado;
};