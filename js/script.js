const ticketContainer = document.getElementById('ticket-container');
const ticket = { id: 104, title: "Optimizar conexión Base de Datos Oracle", status: "Pendiente" };

function resolverTicket() {
    const btn = document.getElementById('btn-resolver');
    btn.innerText = "¡Ticket Resuelto!";
    btn.style.backgroundColor = "#10b981"; // Cambia a verde éxito
    document.getElementById('status-text').innerText = "Estado: Completado";
}

ticketContainer.innerHTML = `
    <div class="ticket-card">
        <div>
            <h3 style="margin:0">#${ticket.id} - ${ticket.title}</h3>
            <small id="status-text" style="color: #94a3b8;">Estado: ${ticket.status}</small>
        </div>
        <button id="btn-resolver" onclick="resolverTicket()" style="padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer;">Resolver</button>
    </div>
`;
