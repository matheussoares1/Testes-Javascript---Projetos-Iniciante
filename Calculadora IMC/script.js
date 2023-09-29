const calcularBtn = document.querySelector('#calcularBtn');

calcularBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const peso = document.querySelector('#peso').value;
  const altura = document.querySelector('#altura').value;
  const resultadoIMC = document.querySelector('#resultadoIMC');

  const imc = (peso / (altura * altura)).toFixed(2);

  resultadoIMC.textContent = `Seu IMC é ${imc}`;

  if (imc < 18.5) {
    resultadoIMC.classList.add('text-warning', 'fw-bold');
    resultadoIMC.classList.remove('text-success', 'text-danger');
  } else if (imc >= 18.5 && imc < 25) {
    resultadoIMC.classList.add('text-success', 'fw-bold');
    resultadoIMC.classList.remove('text-warning', 'text-danger');
  } else if (imc >= 25 && imc < 30) {
    resultadoIMC.classList.add('text-warning', 'fw-bold');
    resultadoIMC.classList.remove('text-success', 'text-danger');
  } else {
    resultadoIMC.classList.add('text-danger', 'fw-bold');
    resultadoIMC.classList.remove('text-warning', 'text-success');
  }
});
