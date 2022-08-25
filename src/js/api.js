export class Api {

    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
    }
    static async listarClientes(teste = "") {
        const clientes = await fetch(`${this.baseUrl}/${teste}`)
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

        const atualizaCliente = await fetch(`${this.baseUrl}/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    static async deletarCliente(id) {
        const deletarCliente = await fetch(`${this.baseUrl}/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
            .then(resp => console.log(resp))
            .catch(err => console.log(err))

        return deletarCliente
    }

}

