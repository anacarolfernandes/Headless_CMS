document.addEventListener("DOMContentLoaded", () => {
    fetch("/assets/js/data.json")
      .then(response => response.json())
      .then(data => {
        renderStats(data.stats);
        renderMetrics(data.metrics);
        renderTickets(data.tickets);
        renderTasks(data.tasks);
      })
      .catch(error => console.error("Error loading JSON:", error));
  });
  
  function renderStats(stats) {
    const statsRow = document.getElementById("stats-row");
    statsRow.innerHTML = stats.map(stat => `
      <div class="col">
        <div class="stats-card">
          <span class="stats-label">${stat.label}</span>
          <span class="stats-value">${stat.value}</span>
        </div>
      </div>
    `).join('');
  }
  
  function renderMetrics(metrics) {
    const container = document.getElementById("metrics-container");
    container.innerHTML = metrics.map((m, i) => `
      <div class="data-item">
        <span class="data-label">${m.label}</span>
        <span class="data-value">${m.value}</span>
      </div>
      ${i < metrics.length - 1 ? '<hr />' : ''}
    `).join('');
  }
  
  function renderTickets(tickets) {
    const container = document.getElementById("ticket-container");
    container.innerHTML = tickets.map(ticket => `
      <div class="ticket-item">
        <span>${ticket.label}</span>
        <span>${ticket.value}</span>
      </div>
    `).join('');
  }
  
  function renderTasks(tasks) {
    const container = document.getElementById("task-container");
    container.innerHTML = tasks.map((task, index) => `
      <div class="task-item">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="task-${index}" />
          <label class="form-check-label" for="task-${index}">${task.label}</label>
        </div>
        <span class="badge ${task.class}">${task.badge}</span>
      </div>
    `).join('');
  }