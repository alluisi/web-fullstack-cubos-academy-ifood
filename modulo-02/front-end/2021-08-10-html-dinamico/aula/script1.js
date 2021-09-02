const users = document.querySelectorAll(".user");

fetch("http://jsonplaceholder.typicode.com/users").then(function (resposta) {
    const pormiseBody = resposta.json();

    pormiseBody.then(function (body) {
        users.forEach(function (user, index) {
            const name = user.querySelector("h1");
            const username = user.querySelector(".username");
            const email = user.querySelector(".email");

            name.textContent = body[index].name;
            username.textContent = body[index].username;
            email.textContent = body[index].email;
        });
    });
});