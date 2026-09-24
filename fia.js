const scriptURL = "https://script.google.com/macros/s/AKfycbyJmGmMBDBPaTTSNCRvAX5UiFAX3Wz6HG3prj5ifNIgjT6-Dyk8NEaRHGl6Xo0kSy3QbQ/exec";

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {

    const staff = {
        type: "staff",
        name: document.getElementById("name").value,
        pin: document.getElementById("pin").value,
        action: document.getElementById("action").value
    };

    if (
        staff.name === "" ||
        staff.pin === "" ||
        staff.action === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(staff)
    })
    .then(() => {

        alert("Staff Registered Successfully!");

        document.getElementById("name").selectedIndex = 0;
        document.getElementById("pin").value = "";
        document.getElementById("action").selectedIndex = 0;

    })
    .catch(error => {
        console.error(error);
        alert("Something went wrong: " + error.message);
    });

});