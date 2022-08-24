export class EditarClientes {
    static async listandoClientes() {
        const select = document.querySelector("#listaClientes")

        const clientes = await Api.listarClientes()

        console.log(clientes)

    }
}
