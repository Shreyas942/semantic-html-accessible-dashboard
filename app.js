const reportForm = document.getElementById("reportForm");
const userForm = document.getElementById("userForm");

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const settingsModal = document.getElementById("settingsModal");

// Load saved users
let users = JSON.parse(localStorage.getItem("dashboardUsers")) || [
    {
        name: "Arjun Patil",
        email: "arjun@example.com",
        role: "Administrator",
        status: "Active"
    },
    {
        name: "Rahul Sharma",
        email: "rahul@example.com",
        role: "Editor",
        status: "Active"
    },
    {
        name: "Priya Deshmukh",
        email: "priya@example.com",
        role: "User",
        status: "Inactive"
    }
];

function displayUsers() {
    const tableBody =
        document.getElementById("userTableBody") ||
        document.getElementById("recentUsersBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    users.forEach(function(user) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.status}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Add new user
if (userForm) {
    userForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("userName").value;
        const email = document.getElementById("userEmail").value;
        const role = document.getElementById("userRole").value;

        const roleName = {
            admin: "Administrator",
            editor: "Editor",
            user: "User"
        };

        const newUser = {
            name: name,
            email: email,
            role: roleName[role],
            status: "Active"
        };

        users.push(newUser);

        localStorage.setItem(
            "dashboardUsers",
            JSON.stringify(users)
        );

        displayUsers();

        const message = document.getElementById("formMessage");

        if (message) {
            message.textContent =
                name + " was added successfully.";
        }

        userForm.reset();
    });
}

// Report form
if (reportForm) {
    reportForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Report request submitted successfully.");
    });
}

// Modal
if (openModal && settingsModal) {
    openModal.addEventListener("click", function() {
        settingsModal.showModal();
    });
}

if (closeModal && settingsModal) {
    closeModal.addEventListener("click", function() {
        settingsModal.close();
    });
}

// Display users when page loads
displayUsers();