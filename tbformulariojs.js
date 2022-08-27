let bmenu=document.querySelector('.nav_icon');
let lmenu=document.querySelector('nav');

bmenu.addEventListener('click', () => {myMenu()});
    
    function myMenu() {
        
        if (bmenu.className === "nav_icon") {
            bmenu.className += " active";
            lmenu.className += " active";
        

        } else {
            bmenu.className = "nav_icon";
            lmenu.className = "";
        }

    }

    let erro = document.querySelector("#erro");
    let erro2 = document.querySelector("#erro");
    let aux=0;
    let aux2=0;
//
    let nome = document.querySelector("#nome");
    let cpf = document.querySelector("#cpf");
    let senha = document.querySelector("#senha");
    let senhac = document.querySelector("#senhac");
    let pf = document.querySelector("#pf");
    let ae = document.querySelector("#ae");
//
    let form2 = document.querySelector(".form2");
    let form1 = document.querySelector(".form1");
    let form3 = document.querySelector(".form3");
//
    const radio=document.getElementsByName("estado")
//
    let fase3=document.querySelector(".fase3")
    let nomefinal;
    let cpffinal;
    let senhafinal;
    let pffinal;
    let aefinal;



//verificar form 1
 
    document.querySelector("#button1").addEventListener("click", (i)=>{verifica(i)});

    function verifica(i){

        if (document.querySelector("#erroNome") !== null) {
            document.querySelector("#erroNome").remove();
            nome.style.borderColor = "black";
            
        }
        if (document.querySelector("#erroCpf") !== null) {
            document.querySelector("#erroCpf").remove();
            cpf.style.borderColor = "black";
        }
        if (document.querySelector("#erroSenha") !== null) {
            document.querySelector("#erroSenha").remove();
            senha.style.borderColor = "black";
        }
        if (document.querySelector("#erroSenhac") !== null) {
            document.querySelector("#erroSenhac").remove();
            senhac.style.borderColor = "black";
        }
    aux=0;
    vNome(i);
    vCpf(i);
    vsenha(i);
    vsenhac(i);

    if ( aux===0 ){
        form2.className="form2_ativo";
        form1.className="form1_ativo";
        nomefinal=nome.value;
        cpffinal=cpf.value;
        senhafinal=senha.value

    }
   

    }
    
//verificar form 2
document.querySelector("#button2").addEventListener("click", (o)=>{verifica2(o)});


function verifica2(o){
 if (document.querySelector("#erropf") !== null) {
            document.querySelector("#erropf").remove();
            pf.style.borderColor = "black";
        }
        if (document.querySelector("#erroestado") !== null) {
            document.querySelector("#erroestado").remove();
            estado.style.borderColor = "black";
        }
        if (document.querySelector("#erroae") !== null) {
            document.querySelector("#erroae").remove();
            ae.style.borderColor = "black";
        }
            
    aux2=0
    validarpf(o);
    validarestado(o);
    vae(o);

    if ( aux2===0 ){
        form2.className="form2";
        fase3.className="fase3_ativo";
        pffinal=pf.value;
        aefinal=ae.value;
        let estadofinal;

    if(radio[0].checked===true && radio[1].checked===false && radio[2].checked===false){
        estadofinal="RS"
    }
    if(radio[0].checked===false && radio[1].checked===true && radio[2].checked===false){
        estadofinal="SC"
    }
    if(radio[0].checked===false && radio[1].checked===false && radio[2].checked===true){
        estadofinal="PR"
    }
    
    fase3.innerHTML="<form>"+"<fieldset>"+"<legend>"+"Etapa 3:"+"</legend>"+"<br>"+"<h3>"+"Nome:"+"</h3>"+nomefinal+"<br>"+"<h3>"+"CPF:"+"</h3>"+cpffinal+"<br>"+"<h3>"+"Senha:"+"</h3>"+senhafinal+"<br>"+"<h3>"+"Profissão:"+"</h3>"+pffinal+"<br>"+"<h3>"+"Estado:"+"</h3>"+estadofinal+"<br>"+"<h3>"+"Anos de Experiência:"+"</h3>"+aefinal+"</fieldset>"+"</form>";
     
}


    }

//validação do primeiro formulario

function vNome() {
    
    if (nome.value === "") {
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroNome");
            let erroTexto = document.createTextNode("POR FAVOR DIGITE SEU NOME.");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            nome.style.borderColor = "red";
            nome.focus();
            aux++;
    }
}

function vCpf() {
    
    if (cpf.value === "" || cpf.value.length != 11) {
        
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroCpf");
            let erroTexto = document.createTextNode("POR FAVOR, DIGITE SEU CPF NOVAMENTE.");
            erroDiv.appendChild(erroTexto);
            erro.appendChild(erroDiv);
            cpf.style.borderColor = "red";
            cpf.focus();
            aux++;
        }
    }

    function vsenha() {
    
        if (senha.value === "" || senha.value.length > 8) {
            
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroSenha");
                let erroTexto = document.createTextNode("CRIE UMA SENHA DE 8 DIGITOS.");
                erroDiv.appendChild(erroTexto);
                erro.appendChild(erroDiv);
                senha.style.borderColor = "red";
                senha.focus();
                aux++;
            }
        }

        function vsenhac() {
    
            if (senhac.value === "" || senhac.value != senha.value) {
                
                    let erroDiv = document.createElement("div");
                    erroDiv.setAttribute("id","erroSenhac");
                    let erroTexto = document.createTextNode("SUA SENHA PRECISA SER IGUAL A ANTERIOR.");
                    erroDiv.appendChild(erroTexto);
                    erro.appendChild(erroDiv);
                    senhac.style.borderColor = "red";
                    senhac.focus();
                    aux++;
                }
            }
//validação do segundo formulário
            function validarpf() {
    
                if (pf.value === "") {
                        let erroDiv = document.createElement("div");
                        erroDiv.setAttribute("id","erropf");
                        let erroTexto = document.createTextNode("QUAL SUA PROFISSÃO?");
                        erroDiv.appendChild(erroTexto);
                        erro.appendChild(erroDiv);
                        pf.style.borderColor = "red";
                        pf.focus();
                        aux2++;
                }
            }

            function validarestado(){
    
                if(radio[0].checked===false && radio[1].checked===false && radio[2].checked===false) {
                    
                        let erroDiv = document.createElement("div");
                        erroDiv.setAttribute("id","erroestado");
                        let erroTexto = document.createTextNode("SELECIONE O ESTADO ONDE TRABALHA.");
                        erroDiv.appendChild(erroTexto);
                        erro.appendChild(erroDiv);
                        estado.style.borderColor = "red";
                        estado.focus();
                        aux2++;
                    }
                }


                function vae() {
    
                    if (ae.value  === "" || ae.value <0 || ae.value >50) {
                        
                                let erroDiv = document.createElement("div");
                                erroDiv.setAttribute("id","erroae");
                                let erroTexto = document.createTextNode("É PRECISO TER ENTRE 0 E 50 ANOS DE EXPERIENCIA.");
                                erroDiv.appendChild(erroTexto);
                                erro.appendChild(erroDiv);
                                ae.style.borderColor = "red";
                                ae.focus();
                                aux2++;
                        }  
                    }

