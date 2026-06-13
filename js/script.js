const ticketContainer = document.getElementById('ticket-container');
const ticket = { id: 104, title: "Optimizar conexión Base de Datos Oracle", status: "Pendiente" };

// Renderizamos el ticket
function renderTicket() {
    ticketContainer.innerHTML = `
        <div class="ticket-card">
            <div>
                <h3 style="margin:0">#${ticket.id} - ${ticket.title}</h3>
                <small id="status-text" style="color: #94a3b8;">Estado: ${ticket.status}</small>
            </div>
            <button id="btn-resolver" onclick="resolverTicket()" style="padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer;">Resolver</button>
        </div>
    `;
}

// Lógica de cambio de estado
function resolverTicket() {
    const btn = document.getElementById('btn-resolver');
    const status = document.getElementById('status-text');
    
    btn.innerText = "Procesando...";
    btn.disabled = true; // Deshabilita el botón para que parezca una petición real
    
    setTimeout(() => {
        status.innerText = "Estado: Completado";
        btn.innerText = "¡Ticket Resuelto!";
        btn.style.backgroundColor = "#10b981";
    }, 1500);
}

renderTicket();
