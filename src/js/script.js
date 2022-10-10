$(document).ready(function(e) {

     
    
    // let maskMob = smartphone ? '(00) 00000-0000' : '(00) 0000-0000';
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    /* ex: mask('00/00/0000', {
        //placeholder: 'dia/mês/ano'
    
    }); */
    // 
    
    //https://igorescobar.github.io/jQuery-Mask-Plugin/ jquery mask plugin IGORESCOBAR
    
    $('form').validate({
    
     
        rules:{ 
            nome: {
            required: true,
        },
            email: {
            required: true,
            email: true
        },
            telefone: {
            required: true,
        },
            mensagem: {
            required: true,
        },
            cpf: {
            required: true,
        },
            cep: {
            required: true,
        },
    },
    messages: {
        nome: 'Por favor, insira o seu nome'
    
    },
    submitHandler: function(form) {
    
        console.log(form)
    },
    
    invalidHandler: function(e, validador) {
    
        let camposIncorretos = validador.numberOfInvalids();
    

    
        if(camposIncorretos) {
    
            alert(`Existem ${camposIncorretos} campos incorretos!`)
        }
    }

    });
    })


