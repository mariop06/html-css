// import { cursos } from "../../Modulo2/mod1 aplicando/modAplicado";
// import getTodosCursos from "../mod2 aplicando/modAplicado";

class Cursos{
    static cursos=['Html','CSS','JAVASCRIPT'];

    static getTodosCursos=()=>{
        return this.cursos;
    }

    static getCursos=(indice_curso)=>{
        return this.cursos[indice_curso];
    }

    static addCurso=(novo_curso)=>{
        this.cursos.push(novo_curso)
    }

    static clearCursos=()=>{
        this.cursos=[];
    }
}

export default Cursos;