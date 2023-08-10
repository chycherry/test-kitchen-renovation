// Assuming data.json contains an array of card objects with 'title' and 'content' properties

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('cardContainer');
        data.forEach(cardData => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${cardData.title}</h2>
                <p>${cardData.content}</p>
            `;
            cardContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
