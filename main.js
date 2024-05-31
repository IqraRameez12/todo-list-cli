import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your todos"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more",
            default: "false"
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
