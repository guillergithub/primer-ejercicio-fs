//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");

const fileToRead = path.resolve('../primer-ejercicio/users.json');
const fileToWrite = path.resolve('../primer-ejercicio/hello.txt');
const usersFile = path.resolve('../primer-ejercicio/users.json');
const newText = 'hello world!';
const newUser = 'Chespirito';

const readFileUsers = async () => {
    try {
        let data = await fs.readFile(fileToRead, 'utf8');
        return data;
    } catch(error) {
        console.log(error.message);
    }
  
};

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    fs.writeFile(fileToWrite, newText);

};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    try{
        let users = await fs.readFile(usersFile, 'utf8');        
        let newArray = JSON.parse(users);
        console.log(newArray);
        newArray.push(username);
        let result =  await fs.writeFile(usersFile, JSON.stringify(newArray));
        return result;
        
    } catch(error) {
        console.log(error.message);
    }
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
