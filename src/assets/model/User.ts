export interface User{
    autenticado: boolean
    userId: string,
    login: {
        usuario: string,
        senha: string,
        autenticado: string,
    }
    nome: string,
    sobrenome: string,
    cpf: any,
    agência: string,
    conta: string,
    dataDeNascimento: string,
    celular: string,
    nomeDaMae: string,
    area: string,
    email: string,
    endereco: {
        cep: string,
        logradouro: string,
        bairro: string,
        cidade: string,
        numero: string,
        complemento: string,
        estado: string
    },
    cadastroCriadoEm: any,
    cadastroIniciadoEm: any
}