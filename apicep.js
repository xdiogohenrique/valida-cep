//Estrutura de chamada API
//viacep.com.br/ws/${CEP}/json/

function preencheCampos (campos) {
    document.getElementById("cep").value = campos.cep;
    document.getElementById("logradouro").value = campos.logradouro;
    document.getElementById("complemento").value = campos.complemento;
    document.getElementById("bairro").value = campos.bairro;
    document.getElementById("localidade").value = campos.localidade;
    document.getElementById("uf").value = campos.uf;
}
 
async function achaCEP() {

    let cep = document.getElementById("cep").value;
    console.log(cep);

    let url = `http://viacep.com.br/ws/${cep}/json/`;

    const myinitGet = {
        method: "GET",
        mode: "cors",
        cache: "default",
        headers: {
            "Content-Type":"application/json",
        },
    };

    const dados = fetch(url).then(response =>{
        return response.json();
            })
        .then(dados =>{
              preencheCampos(dados);
        })
    const elens = await dados.json();
    preencheCampos(elens);


}
