const root = document.querySelector("body");

fetch("http://jsonplaceholder.typicode.com/albums/1/photos").then(function (resposta) {
    const pormiseBody = resposta.json();

    pormiseBody.then(function (body) {
        body.forEach(function (photo) {
            const div = document.createElement("div");
            div.classList.add("photo");

            const img = document.createElement("img");
            img.src = photo.url;

            const p = document.createElement("p");
            p.textContent = photo.title;

            div.append(img, p);
            root.append(div);
        });
    });
});