
    function onSubmitForm() {
        // Verifica se os campos obrigatórios foram preenchidos
        var dataField = document.getElementsByName("Data")[0].value;
        var horaField = document.getElementsByName("Hora da Liberacão")[0].value;
        var maoDeObraField = document.getElementsByName("Mão de obra")[0].value;
        var numeroPtField = document.getElementsByName("Numero da pt")[0].value;
        var localTrabalhoField = document.getElementsByName("Local do Trabalho")[0].value;
        var descricaoAtividadeField = document.getElementsByName("Descrição da atividade")[0].value;
        var bombeirosField = document.getElementsByName("Bombeiros")[0].value;
        var tecSegurancaField = document.getElementsByName("Téc.Segurança")[0].value;
        var donodaareaField = document.getElementsByName("Dono da área")[0].value;
        

        if (!dataField || !horaField || !maoDeObraField || !numeroPtField || !localTrabalhoField || !descricaoAtividadeField || !bombeirosField || !tecSegurancaField || !donodaareaField) {
        
            Swal.fire("Erro:Prencha as informações");
         
            return false; // Impede o envio do formulário se campos obrigatórios não estiverem preenchidos
        }

        // Adicione a lógica de envio do formulário aqui

        // Exibe mensagem de sucesso
        Swal.fire("Cadastro realizado com sucesso");
        // Retornar true permite que o formulário continue com o envio
        return true;
    }

