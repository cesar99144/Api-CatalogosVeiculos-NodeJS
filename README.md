# Api-CatalogosVeiculos-NodeJS
 
Api em node Js para o <a href="https://github.com/cesar99144/AppCatalogoVeiculos-ReactNative">aplicativo catálogo de veículos</a> 

<h3>Foi utilizado:</h3>
<ul>
    <li>Node js</li>
    <li>express</li>
    <li>nodemon</li>
    <li>mysql2</li>
    <li>knex</li>
    <li>cors</li><br>
   
</ul>

<h3>Instalação: </h3>
    <ul>
      <li> Clonar este repositório para um diretório de sua preferência</li>
      <li> Navegar até a pasta raiz do projeto e executar <code>node index</code></li>
      <li> Se tudo ocorrer bem a api será iniciado de imediato, e ficará disponível no endereço <code>http://localhost:4000/</code></li> <br>
    </ul>

<blockquote>
    <h3>Algumas rotas da api</h3>
    <ul>
      <li>/destaques</li> (Retorna o json dos anúncios em destaque)
      <li>/carros</li> (Retorna o json de todos carros)
      <li>/motos</li> (Retorna o json de todos carros)
      <li>/veiculo/:idVeiculo</li> (Vizualizar dados de um veículo específico)
      <li>/pesquisa/:tipoveiculo/:ano/</li> (Rota para filtragem de dados)
    </ul>
</blockquote>