document.addEventListener('DOMContentLoaded', () => {

    const map = L.map('map').setView([20.5937, 78.9629], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

   
    const touristPlaces = [
        {
            name: 'Taj Mahal',
            coords: [27.1751, 78.0421],
            details: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.',
            virtualTourUrl: 'https://www.example.com/taj-mahal-virtual-tour'
        },
        {
            name: 'Qutub Minar',
            coords: [28.5245, 77.1855],
            details: 'Qutub Minar is a towering minaret in Delhi, India, and an important example of Indo-Islamic Afghan architecture.',
            virtualTourUrl: 'https://www.example.com/qutub-minar-virtual-tour'
        },
        {
            name: 'Gateway of India',
            coords: [18.9219, 72.8347],
            details: 'The Gateway of India is an arch-monument built in the early 20th century in Mumbai, India.',
            virtualTourUrl: 'https://www.example.com/gateway-of-india-virtual-tour'
        },
        
    ];

 
    touristPlaces.forEach(place => {
        const marker = L.marker(place.coords).addTo(map);
        marker.bindPopup(`<b>${place.name}</b>`);

        marker.on('click', () => {
            const infoBox = document.getElementById('info-box');
            infoBox.innerHTML = `
                <h2>${place.name}</h2>
                <p>${place.details}</p>
                <a href="${place.virtualTourUrl}" target="_blank">Virtual Tour</a>
            `;
            infoBox.style.display = 'block';
            infoBox.style.opacity = 1;
        });
    });

  
    map.on('click', () => {
        document.getElementById('info-box').style.display = 'none';
    });
});
