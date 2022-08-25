import { Api } from "./api.js"

class DeletarCliente {

    static async listarClientesSelect() {
        const select = document.querySelector("#selectDeletar")

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

    static deletarCliente() {

        const btnDeletar = document.querySelector("#btnDeletar")
        console.log(btnDeletar)

        btnDeletar.addEventListener("click", (event) => {
            event.preventDefault()

            const select = document.querySelector("#selectDeletar")

            const selectID = select.options[select.selectedIndex].id

            this.listarClientesSelect()

            return Api.deletarCliente(selectID)
        })
    }
}

DeletarCliente.listarClientesSelect()
DeletarCliente.deletarCliente()