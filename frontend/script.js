function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Please enter username and password");
        return;
    }

    alert("Login Successful");
    window.location.href = "dashboard.html";
}

function signup() {
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Signup Successful");
    window.location.href = "index.html";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function resetForm() {
    document.querySelectorAll("input").forEach(input => input.value = "");
}

window.onload = function () {

    let placement = localStorage.getItem("placement");
    let probability = localStorage.getItem("probability");
    let risk = localStorage.getItem("risk");
    let gaps = localStorage.getItem("gaps");

    if (document.getElementById("placement")) {

        document.getElementById("placement").innerText = placement;
        document.getElementById("probability").innerText = probability + "%";
        document.getElementById("risk").innerText = risk;
        document.getElementById("gaps").innerText = gaps;

        let bar = document.getElementById("progressBar");
        bar.style.width = probability + "%";

        if (probability > 60) {
            bar.style.background = "limegreen";
        } else {
            bar.style.background = "red";
        }
    }
};

function analyze() {

    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    let cgpa = parseFloat(document.getElementById("cgpa").value);
    let attendance = parseFloat(document.getElementById("attendance").value);
    let coding = parseFloat(document.getElementById("coding").value);
    let internships = parseInt(document.getElementById("internships").value);
    let projects = parseInt(document.getElementById("projects").value);
    let certifications = parseInt(document.getElementById("certifications").value);
    let backlogs = parseInt(document.getElementById("backlogs").value);

    if (isNaN(cgpa) || isNaN(attendance) || isNaN(coding)) {
        alert("Fill all fields correctly");
        return;
    }

    let score = (cgpa * 10) + (attendance * 0.3) + coding +
                (internships * 5) + (projects * 5) +
                (certifications * 3) - (backlogs * 10);

    let probability = Math.min(100, Math.max(0, score / 2));

    let placement = probability > 60 ? "Placed ✅" : "Not Placed ❌";

    let risk = (cgpa < 6 || attendance < 75 || backlogs > 0)
        ? "High Risk ⚠️"
        : "Low Risk ✅";

    let gaps = [];
    if (coding < 60) gaps.push("Coding");
    if (internships === 0) gaps.push("Internships");
    if (projects < 2) gaps.push("Projects");
    if (certifications < 1) gaps.push("Certifications");

    if (gaps.length === 0) gaps.push("No major gaps");

    let suggestions = [];
    if (coding < 60) suggestions.push("Improve coding to increase placement chances by 20%");
    if (internships === 0) suggestions.push("Do at least 1 internship");
    if (projects < 2) suggestions.push("Build more projects");
    if (cgpa < 7) suggestions.push("Improve CGPA above 7");

    localStorage.setItem("placement", placement);
    localStorage.setItem("probability", probability.toFixed(2));
    localStorage.setItem("risk", risk);
    localStorage.setItem("gaps", JSON.stringify(gaps));
    localStorage.setItem("suggestions", suggestions.join(", "));
    localStorage.setItem("department", department);
    localStorage.setItem("year", year);

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
        probability,
        cgpa,
        coding,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("history", JSON.stringify(history));

    window.location.href = "result.html";
}

window.onload = function () {

    let placement = localStorage.getItem("placement");
    let probability = localStorage.getItem("probability");
    let risk = localStorage.getItem("risk");
    let gaps = JSON.parse(localStorage.getItem("gaps")) || [];
    let suggestions = localStorage.getItem("suggestions");

    if (document.getElementById("placement")) {

        document.getElementById("placement").innerText = placement;
        document.getElementById("probability").innerText = probability + "%";
        document.getElementById("risk").innerText = risk;
        document.getElementById("gaps").innerText = gaps.join(", ");

        document.getElementById("aiSuggestions").innerText =
            suggestions && suggestions.length > 0
            ? suggestions
            : "No suggestions needed 🎉";

        new Chart(document.getElementById("probChart"), {
            type: "bar",
            data: {
                labels: ["Probability"],
                datasets: [{
                    label: "%",
                    data: [parseFloat(probability)]
                }]
            }
        });

        new Chart(document.getElementById("gapChart"), {
            type: "pie",
            data: {
                labels: gaps,
                datasets: [{
                    data: gaps.map(() => 1)
                }]
            }
        });

        let history = JSON.parse(localStorage.getItem("history")) || [];

        let labels = history.map(h => h.date);
        let values = history.map(h => h.probability);

        let canvas = document.createElement("canvas");
        document.body.appendChild(canvas);

        new Chart(canvas, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Performance Over Time",
                    data: values
                }]
            }
        });
    }
};

function goBack() {
    window.location.href = "dashboard.html";
}
