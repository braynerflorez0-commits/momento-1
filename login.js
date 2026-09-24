// ============================================================
// MOMENTO 1: Simulador de Inicio de Sesión (solo consola)
// ============================================================

// 1) CONFIGURACION: credenciales "quemadas" (hardcodeadas) con const
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "1234";
const MAX_INTENTOS = 3;

// 2) ENCAPSULACION: toda la lógica vive dentro de una función
function validarAcceso() {
  let intento = 1;             // contador de intentos
  let accesoConcedido = false; // bandera: oingresó correctamente?

  // 3) LoGICA DE INTENTOS: ciclo while (maximo 3 intentos)
  while (intento <= MAX_INTENTOS && !accesoConcedido) {

    // 4) CAPTURA DE DATOS con prompt()
    const usuarioIngresado = prompt("Ingresa tu usuario:");
    const contrasenaIngresada = prompt("Ingresa tu contrasena:");

    // 5) VALIDACION con condicionales (comparación estricta ===)
    if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
      // Credenciales correctas -> el ciclo termina
      console.log("¡Bienvenido al sistema!");
      accesoConcedido = true;
    } else if (intento < MAX_INTENTOS) {
      // Incorrectas, pero aun quedan intentos
      console.log(`Datos incorrectos. Intento ${intento + 1} de ${MAX_INTENTOS}.`);
    } else {
      // Se agotaron los 3 intentos
      console.log("Usuario bloqueado. Ha superado el numero de intentos.");
    }

    intento++; // pasamos al siguiente intento
  }
}

// 6) LLAMADA a la función para que el programa se ejecute
validarAcceso();