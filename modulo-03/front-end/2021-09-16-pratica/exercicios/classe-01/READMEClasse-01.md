![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Lista de tarefas
Utilizando o projeto React da pasta "base" como base (ou criando um projeto a partir do comando `npx create-react-app nome-do-projeto`), siga as seguintes instruções:

**Se estiver utilizando o projeto da pasta "base"**:
- Entre na pasta base pelo terminal e execute o comando `npm install` para instalar as dependências já presentes no package.json

- Crie componentes aonde fizer sentido para você (lembre-se de deixá-los dinamicos com as props)
- Desenvolva os seguintes requisitos:
  - 1. Quando o usuário clicar no menu lateral enquanto ele estiver fechado, o mesmo deverá ser aberto
  - 2. Quando o usuário clicar no menu lateral enquanto ele estiver aberto, o mesmo deverá ser fechado
  - 3. Quando o usuário clicar em um item da galeria, um modal deverá ser aberto com a foto do mesmo
  - 4. Quando o usuário clicar no modal, o mesmo deverá ser fechado
  - 5. Quando o usuário clicar no botão de "X" do modal, o modal deverá ser fechado
  - 6. Quando o usuário der um clique duplo na imagem do modal, o item da galeria correspondente deverá receber um "like" (indicado pelo coração a frente da imagem)

<details>
  <summary>
    Dicas
  </summary>
  <ul>
    <li>
      1. Crie um estado para controlar quando o menu lateral deverá estar aberto ou não e utilize da renderização condicional para esconde-lo e mostra-lo (&& ou ternário)
    </li>
    <li>
      3. Crie um estado para controlar quando o modal deverá estar aberto ou não e utilize da renderização condicional para esconde-lo e mostra-lo (&& ou ternário)
    </li>
    <li>
      3. e 6. Crie um estado para preenhcer os itens da galeria, assim, é mais fácil de gerenciar seus diferentes estados (com like e sem like)
    </li>
    <li>
      6. Se estiver tendo problemas com o clique duplo na imagem estar fechando o modal, lembre-se de não propagar o evento da imagem para cima.
    </li>
  </ul>
</details>

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `módulo 3` `front-end` `exercício de classe` `React`
