# Nosso Mini Insta

## O que o usuário pode fazer

- Fazer login
- Fazer cadastro
- Ver os dados do seu perfil
- Editar os dados do seu perfil
- Ver postagens de outras pessoas
    - Ver quantidade de curtidas em uma postagem
    - Ver os comentários de uma postagem
- Curtir postagens de outras pessoas
- Comentar postagens

## O que não será possível fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem
- Curtir um comentário
- Comentar em outros comentários
- Deixar de curtir postagens

## Endpoints

### POST - Login

#### Dados enviados
- Username
- Senha

#### Dados retornados
- Sucesso ou erro
- Token

##### Objetivos gerais
- Validar username e a senha
- Buscar o usuario no banco de dados
- Verificar se a senha informada está correta
- Gerar o token de autenticação
- Retornar os dados do usuário e o token

---

### POST - Cadastro

#### Dados enviados
- Username
- Senha

#### Dados retornados
- Sucesso ou erro

##### Objetivos gerais
- Validar username e a senha
- Verificar se o username já existe no banco de dados
- Criptografar a senha
- Cadastrar o usuário no banco de dados
- Retornar sucesso ou erro

---

### GET - Perfil

#### Dados enviados
- Token (que terá id ou username)

#### Dados retornados
- URL da foto
- Nome
- Username
- Site
- Bio
- E-mail
- Telefone
- Gênero

##### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuario com a informação do token
- Retornar os dados do usuário

---

### PUT - Perfil

#### Dados enviados
- Token (que terá id ou username)
- URL da foto
- Nome
- Username
- Site
- Bio
- E-mail
- Telefone
- Gênero
- Senha

#### Dados retornados
- Sucesso ou erro

##### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuario com a informação do token
- Exigir, ao meno, um campo para atualizar
- Criptografar a senha, se for informada
- Verificar se o email e/ou username já existem no banco de dados, se for informado
- Atualizar o registro do usuário no banco de dados
- Retornar sucesso ou erro

---

### GET - Postagens

#### Dados enviados
- Token (que terá id ou username)
- offset

#### Dados retornados
- Sucesso ou erro
- Postagens []
    - id
    - Descrição
    - Se foi curtido pelo usuário
    - Usuario
        - URL da foto
        - Username
        - É perfil oficial
    - Fotos []
    - Quantidade de curtidas
    - Comentários []
        - Username
        - Texto
    - Data

##### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuario com a informação do token
- Retornar postagens de outras pessoas

---

### POST - Postagens

#### Dados enviados
- Token (que terá id ou username)
- Descrição
- Array com fotos

#### Dados retornados
- Sucesso ou erro

##### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuario com a informação do token
- Exigir que seja informada ao menos uma foto no array
- Cadastrar postagem para o usuário logado
- Cadastrar as fotos da postagem
- Retornar sucesso ou erro

---

### POST - Curtir

#### Dados enviados
- Token (que terá id ou username)
- id da postagem

#### Dados retornados
- Sucesso ou erro

##### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuario com a informação do token
- Buscar o cadastro da postagem com o id informado
- Verificar se o usuário já curtiu a postagem
- Cadastrar curtida da postagem no banco de dados
- Retornar sucesso ou erro

---

### POST - Comentar

#### Dados enviados
- Token (que terá id ou username)
- id da postagem
- Texto

#### Dados retornados
- Sucesso ou erro

##### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro do usuario com a informação do token
- Validar texto
- Buscar o cadastro da postagem com o id informado
- Cadastrar comentário da postagem no banco de dados
- Retornar sucesso ou erro