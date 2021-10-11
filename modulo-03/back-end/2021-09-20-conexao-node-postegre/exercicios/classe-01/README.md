![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Implementação de Api para sistemas de Biblioteca

Parabéns... A Api para o sistema de biblioteca desenvolvido na aula foi aprovada pelo cliente e está sendo um sucesso. Entretanto, o cliente já solicitou novas implementações e agora temos demandas para cumprir. Seguindo todos os requisitos abaixo, faça as devidas implementações da Api.

Obs.: Será um grande diferencial manter o código legível e bem organizado.

O cliente solicitou que implementasse a opção de realizar empréstimos de livros para algumas pessoas que frequentam a biblioteca e atendesse os seguintes requisitos:

1 - Deve ser implementada uma nova tabela `usuarios` no banco de dados e suas respectivas funcionalidades na Api, com os seguintes campos:

-   Um identificador único do usuário como chave primaria e auto incremento;
-   O nome (obrigatório)
-   A idade
-   O email (obrigatório e único)
-   O telefone
-   O cpf (obrigatório e único)

As funcionalidades necessárias para controlar a entidade `usuarios` são:

-   Listagem geral de usuarios
-   Listagem de apenas um usuario filtrado pelo seu identificador único
-   Cadastro de usuário
-   Atualização de usuário
-   Exclusão de usuário

_É preciso realizar todas as validações necessárias para evitar erros no banco de dados_

Exemplo de retorno na listagem de usuários:

```
[
    {
        "id": 1,
        "nome": "Fulano de Tal",
        "idade": 30,
        "email": "fulano@email.com",
        "telefone": "71999998888",
        "cpf": "00011122233"
    },
    {
        "id": 2,
        "nome": "Fulana de Tal",
        "idade": 36,
        "email": "fulana@email.com",
        "telefone": "71999997777",
        "cpf": "00011122244"
    }
]
```

Exemplo de retorno de apenas um usuário:

```
{
    "id": 1,
    "nome": "Fulano de Tal",
    "idade": 30,
    "email": "fulano@email.com",
    "telefone": "71999998888",
    "cpf": "00011122233"
}
```

2 - Agora será implementada a tabela `emprestimos` no banco de dados, e suas respectivas funcionalidades na Api, com os seguintes campos:

-   Um identificador único do empréstimo como chave primaria e auto incremento;
-   O id do usuario (obrigatório)
-   O id do livro (obrigatório)
-   O status do empréstimo que só poderá receber dois valores (`pendente` e `devolvido`) e por padrão deverá ser `pendente`.

As funcionalidades necessárias para controlar a entidade `emprestimos` são:

-   Listagem geral de emprestimos
-   Listagem de apenas um empréstimo filtrado pelo seu identificador único
-   Cadastro de empréstimo
-   Atualização de empréstimo
-   Exclusão de empréstimo

Obs.: A atualização de empréstimos só deverá permitir alteração do status do empréstimo, nenhum outro campo poderá ser alterado após o cadastro.

_É preciso realizar todas as validações necessárias para evitar erros no banco de dados_

Exemplo de retorno na listagem de empréstimos:

```
[
    {
        "id": 1,
        "usuario_id": 2,
        "livro_id": 3,
        "status": "pendente",
    },
    {
        "id": 2,
        "usuario_id": 4,
        "livro_id": 7,
        "status": "devolvido",
    }
]
```

Exemplo de retorno de apenas um emprestimo:

```
{
    "id": 1,
    "usuario_id": 2,
    "livro_id": 3,
    "status": "pendente",
}
```

Muito bom!!!!

Agora que já foram implementadas mais duas entidades e todas as suas funcionalidades na Api, precisamos implementar algumas regras solicitada pelo cliente.

3 - Antes de excluir um autor na tabela `autores` deverá existir uma verificação se o autor a ser excluido possui algum livro atrelado ao seu `id`. Caso exista, a Api não deverá permitir a exclusão.

4 - A listagem de usuários deverá ser modificada para que seja retornada com os respectivos empréstimos de cada usuário, da seguinte forma:

```
{
    "id": 1,
    "nome": "Fulano de Tal",
    "idade": 30,
    "email": "fulano@email.com",
    "telefone": "71999998888",
    "cpf": "00011122233",
    "emprestimos": [
        {
            "id": 1,
            "usuario_id": 1,
            "livro_id": 3,
            "status": "pendente",
            "livro": "Nome do livro"
        },
        {
            "id": 2,
            "usuario_id": 1,
            "livro_id": 7,
            "status": "devolvido",
            "livro": "Nome do livro 2"
        }
    ]
}
```

Obs.: A modificação da listagem de usuarios deverá acontecer tanto no endpoint que faz a listagem geral de usuários quanto o endpoint que retorna apenas um usuario.

5 - Antes de excluir um usuario na tabela `usuarios` deverá existir uma verificação se o usuario a ser excluido possui algum emprestimo atrelado ao seu `id`. Caso exista, a Api não deverá permitir a exclusão.

6 - A listagem de empréstimo deverá ser modificada para que seja retornada com o nome, telefone e email do usuario que solicitou o empréstimo e o nome do livro, da seguinte forma:

```
[
    {
        "id": 1,
        "usuario": "Fulano de Tal",
        "telefone": "71999998888",
        "email": "fulano@email.com",
        "livro": "Nome do livro",
        "status": "pendente",
    },
    {
        "id": 2,
        "usuario": "Fulana de Tal",
        "telefone": "71999997777",
        "email": "fulana@email.com",
        "livro": "Nome do livro 2",
        "status": "devolvido",
    }
]
```

Obs.: A modificação da listagem de emprestimos deverá acontecer tanto no endpoint que faz a listagem geral de emprestimos quanto o endpoint que retorna apenas um emprestimo.

7 - Antes de excluir um livro na tabela `livros` deverá existir uma verificação se o livro a ser excluido possui algum emprestimo atrelado ao seu `id`. Caso exista, a Api não deverá permitir a exclusão.

E finalmente o job será entregue e mais uma missão será cumprida. Parabéns!!!

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits no seu fork na origem (`git push origin nome-da-branch`)

###### tags: `SQL` `módulo 3` `exercício de classe` `postgres` `nodeJS` `modelagem de dados`
