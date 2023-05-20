//Estrutura de chamada API
//viacep.com.br/ws/${CEP}/json/

function preencheCampos (campos) {
    document.getElementById("cep").value = campos.cep;
    document.getElementById("lograduro").value = campos.logradouro;
    document.getElementById("complemento").value = campos.complemento;
    document.getElementById("bairro").value = campos.bairro;
    document.getElementById("localidade").value = campos.localidade;
    document.getElementById("uf").value = campos.uf;
}
 
async function achaCEP() {

    let cep = document.getElementById("cep").value;

    console.log(cep);

    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const myinitGet = {
        method : "GET",
        headers: {
            "Content-Type":"application/json",
        },
    };

    const dados = await fetch(url, myinitGet);
    const elens = await dados.json();
    preencheCampos (elens);


}
