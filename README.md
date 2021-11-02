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


<h3>Algumas rotas da api</h3>
<blockquote>
    <ul>
      <li><code>/destaques</code> (Retorna o json dos anúncios em destaque)</li> 
      <li><code>/carros</code> (Retorna o json de todos carros)</li> 
      <li><code>/motos</code> (Retorna o json de todos carros)</li> 
      <li><code>/veiculo/:idVeiculo</code> (Vizualizar dados de um veículo específico)</li> 
      <li><code>/pesquisa/:tipoveiculo/:ano/</code> (Rota para filtragem de dados)</li> 
    </ul>
</blockquote>