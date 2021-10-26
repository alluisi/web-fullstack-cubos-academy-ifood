![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Pokedex

Desenvolva uma aplicação com `React` que utilize `Material UI`, `react-use` (`useLocalStorage`) e `fetch` que faça uma busca numa API externa mediante o preenchimento de um `INPUT` e o clique em um `BUTTON` e preencha as informações do `card` com os dados obtidos do retorno da `API`.

Documentação da API: https://pokeapi.co/

- Requisitos:
    - Realizar requisição para **API** externa
    - Criar components de **Card**, **search** e **navbar**
    - Utilizar **Material UI**
    - Utilizar react-use (**useLocalStorage**)
    
- Regras:
    - Quando a aplicação for executada pela primeira vez é preciso já preencher o card com as informações do PIKACHU 
    - Cada vez que fazemos uma pesquisa devemos armazenar os dados pesquisados (nome do pokemon, habilidades e foto) no `localStorage`
    - Em todas as requisições feitas ao clicar no botão `search` devemos consultar antes no `localStorage` para ver se já não foi pesquisado antes, caso exista o pokemon já armazenado no `localStorage` devemos pegar os dados de lá e não fazer requisições para API, se não encontrarmos o pokemon no `localStorage`, devemos então fazer a requição para encontrar o pokemon desejado
    - Quando não encontrarmos o pokemon, devemos utilizar um component do Material UI chamado `Alert` para informar ao usuário que o pokemon não foi encontrado.

### Layout a ser seguido:

![](https://i.imgur.com/QmJty2O.png)

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `modulo-3` `frontend` `react-use` `material-ui`
