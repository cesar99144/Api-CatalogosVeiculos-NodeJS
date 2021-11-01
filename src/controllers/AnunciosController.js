const database = require('../database/connection')

class AnunciosController{

    listarCarros(request, response){

        const statusBusca = "Ativo";
        const Veiculo = "Carro";

        database.select("*").table("veiculos").where({status: statusBusca, tipoVeiculo: Veiculo}).then(anuncios => {
            response.json(anuncios)
        }).catch(error => {
            console.log(error)
        })
    }

    listarMotos(request, response){

        const statusBusca = "Ativo";
        const Veiculo = "Moto";

        database.select("*").table("veiculos").where({status: statusBusca, tipoVeiculo: Veiculo}).then(anuncios => {
            response.json(anuncios)
        }).catch(error => {
            console.log(error)
        })
    }

    listarDestaques(request, response){

        const statusBusca = "Ativo";
        const destaqueAnuncio = "Sim";

        database.select("*").table("veiculos").where({status: statusBusca, destaque: destaqueAnuncio}).then(anuncios => {
            response.json(anuncios)
        }).catch(error => {
            console.log(error)
        })
    }

    vizualizarVeiculo(request, response){
        const idRequest = request.params
        const idVeiculo = idRequest.idVeiculo;
        database.select("*").table("veiculos").where({idVeiculo:idVeiculo}).then(veiculo => {
            response.json(veiculo)
        }).catch(error =>{
            console.log(error)
        })
    }

    filtroPesquisa(request, response){
        // const tipoVeiculo = "Carro"
        // const ano = "2014"

        const requestDados = request.params
        const tipoVeiculo = requestDados.tipoveiculo;
        const ano = requestDados.ano;
        const marca = requestDados.marca;

        database.select("*").table("veiculos").where({tipoVeiculo:tipoVeiculo, ano:ano}).then(veiculo =>{
            response.json(veiculo)
        }).catch(error =>{
            console.log(error)
        })
    }

    marcasdisponiveis(request, response){

        database.select("idVeiculo","marca").table("veiculos").then(veiculo =>{
            response.json(veiculo)
        }).catch(error => {
            console.log(error)
        })
    }

    pesquisapornome(request, response){

        const requestDados = request.params;
        const nome = requestDados.nome;

        database.select("*").table("veiculos").where({tituloAnuncio:nome}).then(veiculo =>{
            response.json(veiculo)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new AnunciosController()