function generatePDF() {
    const options = {
        filename: 'Permissao_' + new Date().toISOString().replace(/:/g, '_').replace(/\..+/, '') + '.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a2', orientation: 'portrait' }
    };
    const element = document.querySelector('.container');
    html2pdf().from(element).set(options).save();
    
}

function generatePDF1(){
    // Encontra o último input com a classe 'NNN'
    const inputs = document.querySelectorAll('.inputNumero');
    const lastInput = inputs[inputs.length - 1];
    const inputValue = lastInput.value.trim();

    // Verifica se o último input tem um valor
    if (!inputValue) {
        alert('Por favor, preencha o último campo "Nome" antes de gerar o PDF.');
        return;
    }

    // Obtém a data atual no formato yyyy-mm-dd
    const currentDate = new Date().toISOString().split('T')[0];

    // Cria o nome do arquivo PDF com base no valor do último input e na data atual
    const fileName = 'Permissao_' + currentDate + '_' + inputValue + '.pdf';

    const options = {
        filename: fileName,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a2', orientation: 'portrait' }
    };
    const element = document.querySelector('.container');
    html2pdf().from(element).set(options).save();
}





    function toggleTable() {
        var tables = document.getElementsByClassName("Riscos_potenciais");
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].style.display === "none") {
                tables[i].style.display = "table"; // Altera para exibir a tabela
            } else {
                tables[i].style.display = "table"; // Altera para ocultar a tabela
            }
        }
    }


    function exibirDiv() {
        var div = document.getElementById("trabalhoaquente");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
    }

    function exibirDiv1() {
        var div = document.getElementById("trabalhoaltura");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
    }
    

    
    function exibirDiv2() {
        var div = document.getElementById("trabalhoicamento");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
      
    }

    
    function exibirDiv3() {
        var div = document.getElementById("trabalhoaleletrico");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
    }
        
    function exibirDiv4() {
        var div = document.getElementById("trabalhoalescavacao");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
    }
    
    function exibirDiv5() {
        var div = document.getElementById("trabalhoalespçoconf");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
    }

    function exibirDiv6() {
        var div = document.getElementById("trabalhoaafrio");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
    }

    function exibirDiv7() {
        var div = document.getElementById("formpet");
        if (div.style.display === "none") {
            div.style.display = "block"; // Muda o estilo para exibir a div
        } else {
            div.style.display = "none"; // Muda o estilo para ocultar a div
        }
    }
    




    function gerarNumero() {
        return Math.floor(Math.random() * 1000000) + 1;
    }

    // Atribui um número gerado automaticamente ao campo de entrada quando a página é carregada
    window.onload = function() {
        const inputNumero = document.getElementById('numero');
        const inputNumero1 = document.getElementById('numero1');
        
        const numeroGerado = gerarNumero();
        inputNumero.value = numeroGerado;
        inputNumero1.value = numeroGerado; // atribuir o mesmo número gerado ao segundo input
    };


      function limparCanvas() {
        var canvas = document.getElementById("signatureCanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }


    function limparCanvas1() {
        var canvas = document.getElementById("signatureCanvas1");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

  
    function limparCanvas2() {
        var canvas = document.getElementById("signatureCanvas2");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas3() {
        var canvas = document.getElementById("signatureCanvas3");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    
    function limparCanvas4() {
        var canvas = document.getElementById("signatureCanvas4");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas5() {
        var canvas = document.getElementById("signatureCanvas5");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas6() {
        var canvas = document.getElementById("signatureCanvas6");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas7() {
        var canvas = document.getElementById("signatureCanvas7");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas8() {
        var canvas = document.getElementById("signatureCanvas8");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas9() {
        var canvas = document.getElementById("signatureCanvas9");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas10() {
        var canvas = document.getElementById("signatureCanvas10");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas11() {
        var canvas = document.getElementById("signatureCanvas11");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas12() {
        var canvas = document.getElementById("signatureCanvas12");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas13() {
        var canvas = document.getElementById("signatureCanvas13");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas14() {
        var canvas = document.getElementById("signatureCanvas14");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }


    function limparCanvas15() {
        var canvas = document.getElementById("signatureCanvas15");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas16() {
        var canvas = document.getElementById("signatureCanvas16");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas17() {
        var canvas = document.getElementById("signatureCanvas17");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas18() {
        var canvas = document.getElementById("signatureCanvas18");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }

    function limparCanvas19() {
        var canvas = document.getElementById("signatureCanvas19");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o conteúdo do canvas
    }



// Função para desenhar uma linha em um canvas
function draw(canvasId, lastPos, mousePos) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(lastPos.x, lastPos.y);
    context.lineTo(mousePos.x, mousePos.y);
    context.stroke();
}

// Configurar eventos de mouse para desenho
function setupDrawing(canvasId) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");
    var drawing = false;
    var mousePos = { x:0, y:0 };
    var lastPos = mousePos;

    canvas.addEventListener('mousedown', function(e) {
        drawing = true;
        lastPos = getMousePos(canvas, e);
    }, false);

    canvas.addEventListener('mouseup', function(e) {
        drawing = false;
    }, false);

    canvas.addEventListener('mousemove', function(e) {
        mousePos = getMousePos(canvas, e);
        draw(canvasId, lastPos, mousePos);
        lastPos = mousePos;
    }, false);
}

// Obter a posição do mouse
function getMousePos(canvasDom, mouseEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
    };
}

// Configurar desenho para todos os campos de assinatura
setupDrawing('signatureCanvas');
setupDrawing('signatureCanvas1');
setupDrawing('signatureCanvas2');
setupDrawing('signatureCanvas3');
setupDrawing('signatureCanvas4');
setupDrawing('signatureCanvas5');
setupDrawing('signatureCanvas6');
setupDrawing('signatureCanvas7');
setupDrawing('signatureCanvas8');
setupDrawing('signatureCanvas9');
setupDrawing('signatureCanvas10');
setupDrawing('signatureCanvas11');
setupDrawing('signatureCanvas12');
setupDrawing('signatureCanvas13');
setupDrawing('signatureCanvas14');
setupDrawing('signatureCanvas15');
setupDrawing('signatureCanvas16');
setupDrawing('signatureCanvas17');
setupDrawing('signatureCanvas18');
setupDrawing('signatureCanvas19');









