fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('cardContainer');
        data.forEach((cardData, index) => {
            const card = document.createElement('a'); // Change to 'a' element for linking
            card.classList.add('card');
            card.href = `article-${index + 1}.html`; // Link to the corresponding article page
            card.innerHTML = `
                <img src="${cardData.image}" alt="${cardData.title}" class="card-image">
                <div class="card-content">
                    <h2>${cardData.title}</h2>
                    <p>${cardData.description}</p>
                </div>
            `;
            cardContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
