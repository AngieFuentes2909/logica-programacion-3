// funcion para lacalcular el factorial
function calcularFactorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function iniciarPrograma() {
  const elementoResultado = document.getElementById("resultado");
  const entrada = prompt("Ingresa un número entero positivo para calcular su factorial:");

  if (entrada === null) {
    console.log("Operación cancelada");
    elementoResultado.textContent = "Operación cancelada.";
    return;
  }

  // conversion a numero
  const numero = Number(entrada);

  // verficacion que el numero se valido y no - 
  if (entrada.trim() === "" || isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
    const mensajeError = `Error: "${entrada}" no es un número entero positivo válido.`;
    console.error(mensajeError);
    elementoResultado.textContent = mensajeError;
    alert(mensajeError);
    return;
  }

  const resultado = calcularFactorial(numero);

  // se muestra el esultado en la consola y en el DOM
  const mensajeExito = `El factorial de ${numero} es: ${resultado}`;
  console.log(mensajeExito);
  elementoResultado.textContent = mensajeExito;
}

iniciarPrograma();


document.getElementById("btnCalcular").addEventListener("click", iniciarPrograma);

