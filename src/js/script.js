const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , ( ) => {

        const selecaoHeroi = document.querySelector('.selecionado');
    
        selecaoHeroi.classList.remove('selecionado')
        personagem.classList.add('selecionado');
    
    
        const imgPersonagemGrande = document.querySelector('.personagem-grande');
        console.log(imgPersonagemGrande);

        const idPersonagem = personagem.attributes.id.value;
        imgPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;


        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 7  - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        
    })


})


// Passo 4 - pegar o elemento do personagem grande para adicionar as informações nele

// Passo 5 - alterar a imagem do personagem

// Passo 6  - alterar o nome do personagem grande

// Passo 7  - alterar a descrição do personagem grande