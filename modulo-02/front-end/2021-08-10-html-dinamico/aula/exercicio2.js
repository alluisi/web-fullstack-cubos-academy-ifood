const input = document.querySelector("input");
const tarefas = document.querySelector("ul");

input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" || input.value === "") return;

    const tarefa = document.createElement("li");
    const descricao = document.createElement("span");
    descricao.textContent = input.value;

    descricao.addEventListener("click", function () {
        descricao.classList.toggle("completa");
        // descricao.style.textDecoration = "line-through";
    });

    const botao = document.createElement("button");
    botao.textContent = "X";

    botao.addEventListener("click", function () {
        tarefa.remove();
    });

    tarefa.append(descricao, botao);
    tarefas.append(tarefa);

    input.value = "";
});