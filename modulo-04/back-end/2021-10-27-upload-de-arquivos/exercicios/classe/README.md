![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Upload de imagem e variáveis de ambiente.

Lembra do ecommerce que você trabalhou na implementação? Pois é. O cliente precisa de novas implementações para que o sistema continue atendendo as expectativas dos usuarios e listamos todas as demandas a seguir.

1 - Configurar variáveis de ambiente.

-   Aprendemos que não devemos deixar informações sensíveis no código e precisamos configurar o `dotenv` do projeto movendo todos os dados sensíveis para o arquivo `.env`. Alguns desses dados são:

    -   Conexão com banco de dados
    -   Senha para gerar token de autenticação
    -   Credenciais SMTP
    -   Credenciais do servidor de armazenamento

Você deverá refatorar o projeto configurando seu dotenv para receber essas variáveis. E lembrando que o .env não deverá ser compartilhado e precisa ter um modelo de exemplo com as variáveis que você criou.

2 - implementar upload de imagem do produto cadastrado.

-   Deverá receber o `base64` da imagem no body da requisição que faz o cadastro do produto e implementar o upload dessa imagem antes do cadastro, de fato, acontecer. Isso, claro, se a imagem for informada no body, pois não deve ser um campo obrigatório.

-   Na atualização do produto, não deverá permitir a atualização do campo imagem no banco de dados e dois novos endpoints deverão existir. Um para atualização da imagem existente (deve atualizar a imagem no servidor ou excluir e fazer o upload novamente) e o outro endpoint apenas para remover a imagem do produto (a exclusão deve acontecer no servidor e no campo imagem do banco de dados também).

-   Todos os endpoints deverão receber o token do usuario autenticado e validar se o produto em questão pertence a ele.

-   Se você não possuir credenciais do servidor de armazenamento, poderá utilizar as seguintes:
    - URL: http://sfo3.digitaloceanspaces.com/    

```
SPACES_KEY=7QVRC3QQACPAE5TL2TV4
SPACES_SECRET=X3o7b742fUMxmlBS+iwLUHteT+L+ueM+PFX2QPdEVzI
SPACES_BUCKET=alunoscubosacademy
```

-   Todo upload deverá ser feito em uma pasta com seu nome de usuario do GitHub. Por exemplo:

Meu usuário do GitHub é `guidocerqueira`. Sendo assim, vou fazer o upload da imagem em `guidocerqueira/imagem.jpg`.

3 - Implementar envio de email quando um novo usuario for cadastrado.

-   O email deverá conter um texto de boas vindas para o novo usuário.

-   Se você não possuir credenciais do servidor SMTP, poderá utilizar as seguintes:

```
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USER=postmaster@alunoscubosacademy.com.br
MAIL_PASS=c12a2648104cad9b63d3bd86fe520158-aff8aa95-7a66330a
```

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits no seu fork na origem (`git push origin nome-da-branch`)

###### tags: `back-end` `módulo 4` `nodeJS` `PostgreSQL` `API REST` `deploy` `query builder` `envio de emails` `upload de arquivos`
