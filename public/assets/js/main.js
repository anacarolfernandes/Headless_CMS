// console.log("main.js is loaded");

document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded and parsed ");

  fetch("/assets/js/data.json")
    .then(response => {
    //   console.log("Fetching data.json...");
      return response.json();
    })
    .then(data => {
    //   console.log("Data successfully loaded:", data);

      renderStats(data.stats);
      renderMetrics(data.metrics);
      renderTickets(data.tickets);
      renderTasks(data.tasks);
    })
    .catch(error => console.error("Error loading JSON:", error));
});

function renderStats(stats) {
//   console.log("Rendering stats...");
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
//   console.log("Rendering metrics...");
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
//   console.log("Rendering tickets...");
  const container = document.getElementById("ticket-container");
  container.innerHTML = tickets.map(ticket => `
    <div class="ticket-item">
      <span>${ticket.label}</span>
      <span>${ticket.value}</span>
    </div>
  `).join('');
}

function renderTasks(tasks) {
//   console.log("Rendering tasks...");
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

//   For this project, I used JavaScript to load content from an external data.json file using fetch(). Then, I used loops like .map() to display that data inside my Bootstrap dashboard. I filled in sections like the stats cards, metrics, tickets, and tasks—all using JSON instead of hardcoding the content. This setup simulates how a headless CMS would work, and helped me practice separating content from structure. Everything is styled with SCSS, and I made sure my code stayed clean and consistent.