// ---------- NAVIGATION ----------
function goHome() {
  window.location.href = "index.html";
}
function goAdmin() {
  window.location.href = "login.html";
}
function goAdminPage() {
  window.location.href = "admin.html";
}
function goAddTournament() {
  window.location.href = "add_tournament.html";
}
function goTournaments() {
  window.location.href = "tournament.html";
}
function goViewTeams() {
  window.location.href = "view_teams.html";
}

// ---------- ADMIN LOGIN ----------
function adminLogin() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "admin" && p === "admin123") {
    localStorage.setItem("adminLogged", "true");
    window.location.href = "admin.html";
  } else {
    alert("Invalid username or password");
  }
}

function checkAdmin() {
  if (localStorage.getItem("adminLogged") !== "true") {
    alert("Please login as admin");
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("adminLogged");
  goHome();
}

// ---------- TOURNAMENT ----------
function saveTournament() {
  const tournament = {
    name: document.getElementById("tname").value,
    date: document.getElementById("tdate").value,
    time: document.getElementById("ttime").value,
    venue: document.getElementById("tvenue").value,
  };

  if (
    !tournament.name ||
    !tournament.date ||
    !tournament.time ||
    !tournament.venue
  ) {
    alert("Fill all fields");
    return;
  }

  let tournaments = JSON.parse(localStorage.getItem("tournaments")) || [];
  tournaments.push(tournament);
  localStorage.setItem("tournaments", JSON.stringify(tournaments));

  alert("Tournament Added Successfully");
  goAdminPage();
}

function loadTournaments() {
  let tournaments = JSON.parse(localStorage.getItem("tournaments")) || [];
  let div = document.getElementById("tournamentList");
  div.innerHTML = "";

  if (tournaments.length === 0) {
    div.innerHTML = "No tournaments available";
    return;
  }

  tournaments.forEach((t) => {
    div.innerHTML += `
      <div class="card">
        <p><b>Name:</b> ${t.name}</p>
        <p><b>Date:</b> ${t.date}</p>
        <p><b>Time:</b> ${t.time}</p>
        <p><b>Venue:</b> ${t.venue}</p>
        <button onclick="window.location.href='team_register.html'">Register Team</button>
      </div>
    `;
  });
}

// ---------- TEAM ----------
function registerTeam() {
  const team = {
    teamName: document.getElementById("teamName").value,
    captain: document.getElementById("captainName").value,
    phone: document.getElementById("phone").value,
  };

  if (!team.teamName || !team.captain || !team.phone) {
    alert("Fill all fields");
    return;
  }

  let teams = JSON.parse(localStorage.getItem("teams")) || [];
  teams.push(team);
  localStorage.setItem("teams", JSON.stringify(teams));

  alert("Team Registered Successfully");
  goHome();
}

function loadTeams() {
  let teams = JSON.parse(localStorage.getItem("teams")) || [];
  let div = document.getElementById("teamList");
  div.innerHTML = "";

  if (teams.length === 0) {
    div.innerHTML = "No teams registered";
    return;
  }

  teams.forEach((t) => {
    div.innerHTML += `
      <div class="card">
        <p><b>Team:</b> ${t.teamName}</p>
        <p><b>Captain:</b> ${t.captain}</p>
        <p><b>Phone:</b> ${t.phone}</p>
      </div>
    `;
  });
}
