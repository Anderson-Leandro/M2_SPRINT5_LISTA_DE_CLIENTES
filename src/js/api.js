import { Cards } from "./cards.js"
import { EditarClientes } from "./editarCliente.js"
import { CadastrarCliente } from "./cadastrarCliente.js"

export class Api {

    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
    }
    static async listarClientes() {

        const clientes = await fetch(this.baseUrl)
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))

        return clientes
    }

    static async cadastrarCliente(data) {
        const novoCliente = await fetch(this.baseUrl, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))

        return novoCliente
    }

    static async editarCliente(id, data) {



    }

    static async deletarCliente(id) {

    }



}


Cards.listarCard(await Api.listarClientes())
