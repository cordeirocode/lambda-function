export function log(message) {
  console.log(process.env.MINHA_VAR);
  console.log("Evento recebido: ", message);
}