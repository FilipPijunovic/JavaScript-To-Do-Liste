window.addEventListener('load',() => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#forminput');
    const list_element = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert ("Please add a task");
            return;
        } 
        const task_element = document.createElement("div");
        task_element.classList.add("task");

        const task_content = document.createElement("Div");
        task_content.classList.add("content");

        task_element.appendChild(task_content);
        const task_input = document.createElement("input");
        task_input.type = "text";
        task_input.classList.add("text");
        task_input.value = task;

        task_content.appendChild(task_input);
        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "delete";

        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_delete);
        task_element.appendChild(task_actions);
        list_element.appendChild(task_element);

        input.value = "";

        task_edit.addEventListener('click', () => {
            if(task_edit.innerText.toLowerCase == "edit") {
                task_input.focus();
                task_edit.innerText = "save";
            }
        } );
        task_delete.addEventListener('click', () => {
            list_element.removeChild(task_element);

        });

    });
});