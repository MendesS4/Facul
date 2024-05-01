let reservations = [];

function saveReservation() {
    const licensePlate = document.getElementById('licensePlate').value;
    const ownerName = document.getElementById('ownerName').value;
    const apartmentNumber = document.getElementById('apartmentNumber').value;
    const apartmentBlock = document.getElementById('apartmentBlock').value;
    const vehicleModel = document.getElementById('vehicleModel').value;
    const vehicleColor = document.getElementById('vehicleColor').value;
    const parkingSpot = document.getElementById('parkingSpot').value;

    const reservation = {
        licensePlate,
        ownerName,
        apartmentNumber,
        apartmentBlock,
        vehicleModel,
        vehicleColor,
        parkingSpot
    };

    reservations.push(reservation);

    console.log(reservations)

    document.getElementById('reservationForm').reset();

    alert('Reserva realizada com sucesso!');

    updateParkingList();
}

// Função para listar as vagas
function updateParkingList() {
    const list = document.getElementById('parkingList');
    list.innerHTML = ''; 

    reservations.forEach((reservation, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Vaga: ${reservation.parkingSpot} - Placa: ${reservation.licensePlate}`;
        
        // Botão para excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteReservation(index); 
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
    });
}

function deleteReservation(index) {
    reservations.splice(index, 1); 
    updateParkingList(); 
}
