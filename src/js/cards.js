class Cards {

    static criaCard(cliente) {
        const li = document.createElement("li")
        li.id = cliente.id
        li.classList.add("card")

        const h2Nome = document.createElement("h2")
        h2Nome.innerText = cliente.nome

        const divInfoCliente = document.createElement("div")

        const h3DadosPessoais = document.createElement("h3")
        h3DadosPessoais.innerText = "Dados Pessoais"

        const pEmail = document.createElement("p")
        pEmail.innerText = cliente.email

        const pIdade = document.createElement("p")
        pIdade.innerText = cliente.idade

        const pCpf = document.createElement("p")
        pCpf.innerText = cliente.cpf

        const pSexo = document.createElement("p")
        pSexo.innerText = cliente.sexo


        const divClienteEndereco = document.createElement("div")

        const h3Endereco = document.createElement("h3")
        h3Endereco.innerText = "Endereço"

        const pCep = document.createElement("p")
        pCep.innerText = cliente.endereco.cep

        const pEstado = document.createElement("p")
        pEstado.innerText = cliente.endereco.estado

        const pCidade = document.createElement("p")
        pCidade.innerText = cliente.endereco.cidade

        const pBairro = document.createElement("p")
        pBairro.innerText = cliente.endereco.bairro

        const pRua = document.createElement("p")
        pRua.innerText = cliente.endereco.rua

        const pNumero = document.createElement("p")
        pNumero.innerText = cliente.endereco.numero

        divInfoCliente.append(h3DadosPessoais, pEmail, pIdade, pCpf, pSexo)

        divClienteEndereco.append(h3Endereco, pCep, pEstado, pCidade, pBairro, pRua, pNumero)

        li.append(h2Nome, divInfoCliente, divClienteEndereco)

        return li
    }


    static async listarCard (clientes){
        const ul = document.querySelector(".container")

        ul.innerHTML = ""

        clientes.forEach(element => {
            ul.append(this.criaCard(element))
        });       
        
    }
}




export default Cards
