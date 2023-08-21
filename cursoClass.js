
module.exports = class Cursos {

    //Constructor

    constructor(id,titulo,descripcion){
        this._id = id;
        this._titulo = titulo;
        this._descripcion = descripcion;
    }

    get id(){
        return this._id;
    }

    get titulo(){
        return this._titulo;
    }
        
    get descripcion(){
        return this._descripcion;
    }

    set id(id){        
        if(id === ''){
            console.log('Id no puede estar vacio');
            return;
        }
        this._id =  id;
    }

    set titulo(titulo){
        titulo = titulo.trim();
        if(titulo === ''){
            throw new Error('Titulo no puede estar vacio');
        }
        this._titulo = titulo;
    }

    set descripcion(descripcion){
        descripcion = descripcion.trim();
        if(apellidos === ''){
            throw new Error('descripcion no debe estar vacio');
        }
        this._apellidos = apellidos;
    }   

    allCursoData(){
        let cursos = [];
        cursos.push(this._id);
        cursos.push(this._titulo);
        cursos.push(this._descripcion);
        return cursos;
    }

}