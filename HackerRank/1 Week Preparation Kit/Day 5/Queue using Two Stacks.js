const queue = [];

function processData(input) {
    const commands = input.split('\n');
    commands.shift();

    commands.forEach((c) => {
        const command = c.split(' ');
        if (command[0] === "1") queue.push(command[1]);
        else if (command[0] === "2") queue.shift();
        else console.log(queue[0]);
    });
} 
