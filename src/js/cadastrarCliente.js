import Api from "./api.js"

class CadastrarCliente {

    static receberValores() {

        const btnCadastrar = document.querySelector("#btnCadastrar")

        btnCadastrar.addEventListener("click", (event) => {
            event.preventDefault()

            const inputs = document.getElementsByTagName("input")

            const novoCliente = {
                nome: inputs[0].value,
                email: inputs[1].value,
                sexo: inputs[4].value,
                idade: inputs[2].value,
                cpf: inputs[3].value,
                endereco: {
                    estado: inputs[10].value,
                    cidade: inputs[9].value,
                    bairro: inputs[8].value,
                    numero: inputs[7].value,
                    rua: inputs[6].value,
                    cep: inputs[5].value
                }
            }

            return Api.cadastrarCliente(novoCliente)

        })

        return
    }
}

CadastrarCliente.receberValores()





export default CadastrarCliente