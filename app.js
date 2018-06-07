'use strict';
const ReadLine = require('readline');
const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
const matcher =require('./matcher');
rl.setPrompt('>');
rl.prompt();
rl.on('line' , reply => {
    matcher(reply,data =>{
        switch(data.intent){
            case 'Hello':
                console.log(`${data.entities.greeting}to you too`);
                rl.prompt();
                break;

                case 'Exit':
                console.log('Bye !! Have a good day');
                process.exit(0);
                break;
            default:
            console.log('Sorry I didnt get you');
            rl.prompt();
        }
    });
   
});