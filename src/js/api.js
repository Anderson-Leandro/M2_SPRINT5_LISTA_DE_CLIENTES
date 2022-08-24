class Api {

    static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
  
    static async listarClientes(){

        const clientes = await fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))

        return clientes
    }

    static async cadastrarCliente(data){

    }

    static async editarCliente(id, data){

    }

    static async deletarCliente(id){

    }

    

}



  
export default Api