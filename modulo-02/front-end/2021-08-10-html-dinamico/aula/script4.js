const input = document.querySelector("input");
const tarefas = document.querySelector("ul");

input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" || input.value === "") return;

    const tarefa = document.createElement("li");
    tarefa.textContent = input.value;

    tarefa.addEventListener("click", function () {
        tarefa.remove();
    });

    tarefas.append(tarefa);

    input.value = "";
});