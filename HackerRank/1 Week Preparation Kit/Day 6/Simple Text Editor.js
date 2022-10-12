const result = [];
const undoStack = [];

const append = (text) => {
    result.push(...text.split(''));
    undoStack.push({ command: "A", text: text });
};

const remove = (number) => {
    const last = [];
    for (let i = 0; i < number; i++) {
        last.push(result.pop());
    }
    undoStack.push({ command: "D", text: last.reverse().join('') });
};

const undo = () => {
    const command = undoStack.pop();
    if (command.command === "D") {
        result.push(...command.text.split(''))
    } else {
        for (let i = 0; i < command.text.length; i++) {
            result.pop();
        }
    }
}

const editor = (input) => {
    const command = input.split(' ');

    if (command[0] === "1") {
        append(command[1]);
    } else if (command[0] === "2") {
        remove(command[1]);
    } else if (command[0] === "3") {
        console.log(result[command[1] - 1])
    } else {
        undo()
    }
}

function processData(input) {
    const cleanedInput = input.split('\n')
    cleanedInput.shift()
    cleanedInput.forEach((i) => {
        editor(i);
    });
} 
