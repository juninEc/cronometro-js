let horas = 0;
let minutos = 0;
let segundos = 0;

let cronometro;
let cronometroEmExecucao = false;

function start() {
  if (!cronometroEmExecucao) {
    cronometro = setInterval(() => {
      tempo()
    }, 1000)
    cronometroEmExecucao = true
  }
}

function pause() {
  clearInterval(cronometro)
  cronometroEmExecucao = false
}

function reset() {
  horas = 0
  minutos = 0
  segundos = 0

  document.getElementById("horas").innerText = "00"
  document.getElementById("minutos").innerText = "00"
  document.getElementById("segundos").innerText = "00"
  
  clearInterval(cronometro)
  cronometroEmExecucao = false
}

function tempo() {
  segundos++;
  if (segundos == 60) {
    segundos = 0
    minutos++
  }
  if (minutos == 60) {
    minutos = 0
    horas++
  }

  document.getElementById("horas").innerText = returnData(horas);
  document.getElementById("minutos").innerText = returnData(minutos);
  document.getElementById("segundos").innerText = returnData(segundos);
}

function returnData(input) {
  return input > 9 ? input : `0${input}`;
}
