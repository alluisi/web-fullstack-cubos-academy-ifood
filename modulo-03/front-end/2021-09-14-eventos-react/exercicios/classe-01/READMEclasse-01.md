![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Lista de tarefas
Utilizando o projeto React da pasta "base" como base (ou criando um projeto a partir do comando `npx create-react-app nome-do-projeto`), siga as seguintes instruções:

**Se estiver utilizando o projeto da pasta "base"**:
- Entre na pasta base pelo terminal e execute o comando `npm install` para instalar as dependências já presentes no package.json

- **NÃO SE PREOCUPE COM O LAYOUT**, ele é apenas um guia, o foco aqui é funcionalidade.
- Crie componentes aonde fizer sentido para você (lembre-se de deixá-los dinamicos com as props)
- Desenvolva os seguintes requisitos:
  - 1. Quando o usuário pressionar a tecla "Enter" enquanto estiver digitando no `<input />`:
    - Uma nova tarefa deverá ser adicionada
    - O valor do `<input />` deverá ser limpo
  - 2. Quando o usuário clicar no texto de uma tarefa, a mesma deverá ser completa (adicione um indicador visual, como um risco sobre o texto)
  - 3. Quando o usuário clicar no "X" de uma tarefa, a mesma deverá ser excluida
  - 4. Um texto indicando quantas tarefas ainda não foram completadas
  - 5. Quando o usuário clicar em um dos 3 filtros, as tarefas que não se adequarem ao mesmo deveram ser escondidas
  - 6. Quando o usuário clicar no botão "Limpar Completadas", todas as tarefas que foram completadas deverão ser excluidas

<details>
  <summary>
    Dicas
  </summary>
  <ul>
    <li>
      4. e 5. Utilize do método <code>filter</code> para esconder as tarefas de acordo com o filtro e para pegar o número de tarefas que não foram completadas
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
