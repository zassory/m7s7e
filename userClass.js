
module.exports = class User {

    //Constructor
    constructor(id,email,firstname,lastname,age){
        this._id = id;
        this._email = email;
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
    }

    get email() {
        return this._email;
    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    allUserData() {
        let data = [];
        data.push(this._id);
        data.push(this._email);
        data.push(this._firstname);
        data.push(this._lastname);
        data.push(this._age);
        return data;
    }

    //Definicion de métodos setters
    set lastname(newLastname){
        newLastname = newLastname.trim();
        if(newLastname === ''){
            console.log("El lastname no puede ser vacio");
            return;
        }
        this._lastname = newLastname;
    }
}

// //Inicializamos la clase
// let user = new User(1,"nicolas.programador@gmail.com","nicolas","caceres",39);

// let data = user.allUserData();
// console.table(data);

// //Accesando a la propiedad del objeto, atributo email
// //console.log(user._email);

// //Obteniendo el atributo de email por medio del método getter
// console.log(user.email);

// //cambiamos el lastname por setter
// //user.lastname = "latorre";
// //console.log(user.lastname);

// //Instanciación de la clase
// // let user = new User("nicolas.programador@gmail.com");

// // //Accediendo a algún atributo de la clase
// // console.log(user.email);

// // //Tamaño de los argumentos
// // console.log(User.length);

// // //Nombre de la clase
// // console.log(User.name);