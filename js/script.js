const ticketContainer = document.getElementById('ticket-container');
// Solo un ticket para tu ejemplo pragmático
const ticket = { id: 104, title: "Optimizar conexión Base de Datos Oracle", status: "Pendiente" };

ticketContainer.innerHTML = `
    <div class="ticket-card">
        <div>
            <h3 style="margin:0">#${ticket.id} - ${ticket.title}</h3>
            <small style="color: #94a3b8;">Estado: ${ticket.status}</small>
        </div>
        <button style="padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer;">Resolver</button>
    </div>
`;
