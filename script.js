{\rtf1\ansi\ansicpg950\cocoartf2638
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Assuming data.json contains an array of card objects with 'title' and 'content' properties\
\
fetch('data.json')\
    .then(response => response.json())\
    .then(data => \{\
        const cardContainer = document.getElementById('cardContainer');\
        data.forEach(cardData => \{\
            const card = document.createElement('div');\
            card.classList.add('card');\
            card.innerHTML = `\
                <h2>$\{cardData.title\}</h2>\
                <p>$\{cardData.content\}</p>\
            `;\
            cardContainer.appendChild(card);\
        \});\
    \})\
    .catch(error => console.error('Error fetching data:', error));\
}