//essa função é uma criadora de ação
const criarContrato = (nome, taxa) => {
  //esse JSON que ela devolve é uma ação
  return {
    type: "CRIAR_CONTRATO",
    dados: {
      nome, taxa  
    }
  }
}
//essa também é criadora de ação
const cancelarContrato = (nome) => {
  //esse JSON também é uma ação
  return{
    type: "CANCELAR_CONTRATO",
    dados: {
      nome
    }
  }
}

//essa função também cria uma ação
const solicitarCashback = (nome, valor) => {
  //esse JSON que ela produz é uma ação
  return {
    type: "CASHBACK",
    dados: {
      nome, valor
    }
  }
}

const historicoDePedidosDeCashback = () => {
  
}