async function salvarTop10() {
    const buscarMusicaUrl = '/MyTop10/salvar'; // URL para o servlet
    const cardData = [];
    
    rows.forEach((row, index) => {
        const card = row.querySelector('.card');
        if (card) {
            const cardInfo = {
                id: card.id,
                posicao: index + 1 // Define a posição exata baseada na linha (1-indexado)
            };
            cardData.push(cardInfo);
        }
    });
    
    const data = JSON.stringify(cardData);
    
    try {
        const response = await fetch(buscarMusicaUrl, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Definindo o tipo de conteúdo como JSON
            },
            body: data 
        });
        
        if (response.ok) {
            console.log('Top 10 adicionado com sucesso');
        } else {
            console.error('Erro ao adicionar o Top 10:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
    }
}


