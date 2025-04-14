// Sample JSON data
const dashboardData = {
  stats: [
    { label: "Unresolved", value: 60 },
    { label: "Overdue", value: 16 },
    { label: "Open", value: 43 },
    { label: "On hold", value: 64 }
  ],
  metrics: [
    { label: "Resolved", value: "449" },
    { label: "Received", value: "426" },
    { label: "Avg. first response time", value: "33m" },
    { label: "Avg. response time", value: "3h 8m" },
    { label: "Resolution within SLA", value: "94%" }
  ],
  tickets: [
    { label: "Waiting on Feature Request", value: "4238" },
    { label: "Awaiting Customer Response", value: "1005" },
    { label: "Awaiting Developer Fix", value: "914" },
    { label: "Pending", value: "281" }
  ],
  tasks: [
    { label: "Finish Ticket Update", badge: "URGENT", class: "bg-warning text-light" },
    { label: "Create New Ticket Example", badge: "NEW", class: "bg-success text-white" },
    { label: "Update Ticket Report", badge: "DEFAULT", class: "bg-secondary text-dark" }
  ]
};

// Populate everything on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  populateStats();
  populateMetrics();
  populateTickets();
  populateTasks();
});

// Populate Stats Cards
function populateStats() {
  const statsRow = document.getElementById("stats-row");
  statsRow.innerHTML = "";
  dashboardData.stats.forEach(stat => {
    statsRow.innerHTML += `
      <div class="col">
        <div class="stats-card">
          <span class="stats-label">${stat.label}</span>
          <span class="stats-value">${stat.value}</span>
        </div>
      </div>
    `;
  });
}

// Populate Metric Column (beside chart)
function populateMetrics() {
  const metricsContainer = document.getElementById("metrics-container");
  metricsContainer.innerHTML = "";
  dashboardData.metrics.forEach((metric, index) => {
    metricsContainer.innerHTML += `
      <div class="data-item">
        <span class="data-label">${metric.label}</span>
        <span class="data-value">${metric.value}</span>
      </div>
      ${index < dashboardData.metrics.length - 1 ? '<hr />' : ''}
    `;
  });
}

// 3. Populate Unresolved Tickets
function populateTickets() {
  const ticketContainer = document.getElementById("ticket-container");
  ticketContainer.innerHTML = "";
  dashboardData.tickets.forEach(ticket => {
    ticketContainer.innerHTML += `
      <div class="ticket-item">
        <span>${ticket.label}</span>
        <span>${ticket.value}</span>
      </div>
    `;
  });
}

// 4. Populate Tasks List
function populateTasks() {
  const taskContainer = document.getElementById("task-container");
  taskContainer.innerHTML = "";
  dashboardData.tasks.forEach((task, index) => {
    taskContainer.innerHTML += `
      <div class="task-item">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="task-${index}" />
          <label class="form-check-label" for="task-${index}">${task.label}</label>
        </div>
        <span class="badge ${task.class}">${task.badge}</span>
      </div>
    `;
  });
}
