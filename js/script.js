const tickets = [
    { id: 104, title: "Refactorizar conexión DB", status: "Pendiente" },
    { id: 105, title: "Optimizar Query Oracle", status: "En Progreso" }
];

const container = document.getElementById('ticket-container');

tickets.forEach(ticket => {
    container.innerHTML += `
        <div class="card" style="border-left-color: #fbbf24;">
            <h3>Ticket #${ticket.id}</h3>
            <p>${ticket.title}</p>
            <button onclick="alert('Iniciando ticket...')">Resolver</button>
        </div>
    `;
});
