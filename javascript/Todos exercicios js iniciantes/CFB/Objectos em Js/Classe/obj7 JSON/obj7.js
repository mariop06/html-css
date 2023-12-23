// Objectos Literais 
// Conversão de um objecto literal para um JSON e vice-versa

const Pessoa={
    nome:'Mario',
    idade:17,
    email:'mariopaulobunga@gmail.com',
    numero:922366274,

    morada:{
        pais:'Angola',
        provincia:'Luanda',
        municipio:'Ingombota',
        residencia:'ilha-de-Lunda'
    }
}

const convert_json=JSON.stringify(Pessoa);// Converte um objecto em uma string JSON
console.log(convert_json);

const convert_objecto=JSON.parse(convert_json); //Converte uma string Json para um objecto
console.log(convert_objecto)