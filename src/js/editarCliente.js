import { Api } from "./api.js"

export class EditarClientes {
    static async listarClientesSelect() {
        const select = document.querySelector("#listaClientes")

        select.innerHTML = ""

        const clientes = await Api.listarClientes()

        clientes.forEach(element => {
            const option = document.createElement("option")
            option.id = element.id
            option.value = element.nome
            option.innerText = element.nome

            select.append(option)
        });
    }

    static selecionarCliente() {
        const btnBuscarCliente = document.querySelector("#btnBuscarCliente")

        btnBuscarCliente.addEventListener("click", (event) => {
            event.preventDefault()

            const select = document.querySelector("#listaClientes")

            const selectID = select.options[select.selectedIndex].id

            this.atualizandoCliente(selectID)
            return this.listarDadosClienteNaTela(selectID)
        })
    }

    static async listarDadosClienteNaTela(id) {
        const inputs = document.getElementsByTagName("input")

        const cliente = await Api.listarClientes(id)

        inputs[0].value = cliente.nome
        inputs[1].value = cliente.email
        inputs[2].value = +cliente.idade
        inputs[3].value = cliente.cpf
        inputs[4].value = cliente.sexo
        inputs[5].value = +cliente.endereco.cep
        inputs[6].value = cliente.endereco.rua
        inputs[7].value = +cliente.endereco.numero
        inputs[8].value = cliente.endereco.bairro
        inputs[9].value = cliente.endereco.cidade
        inputs[10].value = cliente.endereco.estado

        return cliente
    }

    static async atualizandoCliente(id) {
        const btnAtualizarDados = document.querySelector("#btnAtualizarDados")

        btnAtualizarDados.addEventListener("click", (event) => {
            event.preventDefault()

            const inputs = document.getElementsByTagName("input")

            const clienteEditado = {
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

            this.limparTela()
            return Api.editarCliente(id, clienteEditado)

        })
    }

    static limparTela() {
        const inputs = document.getElementsByTagName("input")

        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
        inputs[3].value = ""
        inputs[4].value = ""
        inputs[5].value = ""
        inputs[6].value = ""
        inputs[7].value = ""
        inputs[8].value = ""
        inputs[9].value = ""
        inputs[10].value = ""

    }
}


EditarClientes.listarClientesSelect()

EditarClientes.selecionarCliente()
