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
}

module.exports = new AnunciosController()