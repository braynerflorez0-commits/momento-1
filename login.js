
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "1234";
const MAX_INTENTOS = 3;

function validarAcceso() {
  let intento = 1;             // contador de intentos
  let accesoConcedido = false; // bandera: oingresó correctamente?


  while (intento <= MAX_INTENTOS && !accesoConcedido) {

    prompt("Ingresa tu usuario:");
    const contrasenaIngresada = prompt("Ingresa tu contrasena:");

    // 5) VALIDACION con condicionales (comparación estricta ===)
    if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
      console.log("¡Bienvenido al sistema!");
      accesoConcedido = true;
    } else if (intento < MAX_INTENTOS) {
      console.log(`Datos incorrectos. Intento ${intento + 1} de ${MAX_INTENTOS}.`);
    } else {
      console.log("Usuario bloqueado. Ha superado el numero de intentos.");
    }

    intento++;
  }
}

// 6) LLAMADA a la función para que el programa se ejecute
validarAcceso();