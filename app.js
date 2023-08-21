const User = require('./userClass.js');
let user = new User(1,"nicolas.programador@gmail.com","nicolás","cáceres",39);

//const uniqid = require('uniqid');
const shortid = require('shortid');
const Estudiante = require('./estudianteClass.js');
const Cursos = require('./cursoClass.js');

let estudiante = new Estudiante(shortid.generate(),'Nicolas','Caceres',39,'2210153');
console.log(estudiante.allEstudianteData());

let curso = new Cursos(shortid.generate(),'programacion c#','programacion para aplicaciones de escritorio');
console.log(curso.allCursoData());

// console.log(user.email);

// console.log(user.firstname);

// console.log(user.lastname);

// let data = user.allUserData();
// console.log(data);

// user.lastname = 'latorre';

// console.log(user.lastname);
// console.log(user.allUserData());