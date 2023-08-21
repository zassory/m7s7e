
module.exports = class Estudiante {

    //Constructor

    constructor(id,nombres,apellidos,edad,nro_identificacion){
        this._id = id;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._edad = edad;
        this._nro_identificacion = nro_identificacion;
    }

    get id(){
        return this._id;
    }

    get nombres(){
        return this._nombres;
    }

    get apellidos(){
        return this._apellidos;
    }

    get edad(){
        return this._edad;
    }

    get nro_identificacion(){
        return this.nro_identificacion;
    }

    set id(id){        
        if(id === ''){
            console.log('Id no puede estar vacio');
            return;
        }
        this._id =  id;
    }

    set nombres(nombres){
        nombres = nombres.trim();
        if(nombres === ''){
            throw new Error('Nombre no puede estar vacio');
        }
        this._nombres = nombres;
    }

    set apellidos(apellidos){
        apellidos = apellidos.trim();
        if(apellidos === ''){
            throw new Error('Apellido no debe estar vacio');
        }
        this._apellidos = apellidos;
    }

    set edad(edad){
        edad = edad.trim();
        if(edad === '' || edad < 17){
            throw new Error('Edad no debe estar vacia y debe ser mayor a 18');
        }
        this._edad = edad;
    }

    allEstudianteData(){
        let estudiantes = [];
        estudiantes.push(this._id);
        estudiantes.push(this._nombres);
        estudiantes.push(this._apellidos);
        estudiantes.push(this._edad);
        estudiantes.push(this._nro_identificacion);
        return estudiantes;
    }

}