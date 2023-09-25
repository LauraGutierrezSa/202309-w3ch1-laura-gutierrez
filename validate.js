const minimumBodyLenght = () => {
  const messageBody = document.querySelector("#cuerpo");
  messageBody.forEach((message) => message.length);
  if (message.length < 10) {
    console.log("El mensaje debe tener una longitud mínima de 10 caracteres");
  }
};
