#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let setPin:number = 12345;
let MyBalance:number =10000;

let MyPin = await inquirer.prompt([
    {
        name :"code",
        message : chalk.green("enter your pin:"),
        type : "number",
},
]);
if (MyPin.code === setPin){
    console.log(chalk.green("correct pin entered."));

    let ask = await inquirer.prompt([
    {
        name:"operation",
        message : "select an optiom:",
        type : "list",
        choices :["withdraw money", "check your balance","fast cash"],

    },
]);

if(ask.operation === "check your balance"){
    console.log(`your balance is ${MyBalance}`);
}

else if (ask.operation === "withdraw money"){
let withdrawal = await inquirer.prompt([
    {
        name : "amount",
        type : "number",
        message : "enter amount to withdraw:",

    },
]);
if(MyBalance>=withdrawal.amount){
    MyBalance =MyBalance - withdrawal.amount;
    console.log(chalk.green(`your updated balance is :${MyBalance}`))
}else{
    console.log(
        chalk.red(`insuffient balance,your balance is ${MyBalance}`)
    )
}


// console.log(chalk.green(`your updated balance is:${MyBalance}`));
} 


else if(ask.operation === "fast cash"){

    let fastcashoption =await inquirer.prompt([
        {
        name :"options",
        type : "list",
        message: "choose one",
        choices :[1000,2000,10000,15000,20000],

        },
    ]);

    MyBalance=MyBalance-fastcashoption.options;
    console.log(chalk.green(`your updated balance is${MyBalance}` ));
}  else{
    console.log(chalk.red(`insufficent balance,your balance is ${MyBalance}`));
};
}else{
    console.log(chalk.red("incorrect pin entered."));
}