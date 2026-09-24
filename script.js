const scriptURL = "https://script.google.com/macros/s/AKfycbzp_snw_cf98LsjMMEe0j6R2D2KJ9lfIDLNTR7AkXgrBcduEDBQtI1j-Y_5HqeKxEpNng/exec";

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {

    const visitor = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        office: document.getElementById("office").value,
        reason: document.getElementById("reason").value
    };

    // Check for empty fields
    if(
        visitor.name === "" ||
        visitor.phone === "" ||
        visitor.office === "Select Office" ||
        visitor.reason === ""
    ){
        alert("Please fill in all fields.");
        return;
    }

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(visitor)
    })
    .then(response => response.text())
    .then(result => {

        alert("Visitor Registered Successfully!");

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("office").selectedIndex = 0;
        document.getElementById("reason").value = "";

    })
    .catch(error => {

        alert("Something went wrong.");
        console.log(error);

    });

});
const visitor = {
    type: "visitor",
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    office: document.getElementById("office").value,
    reason: document.getElementById("reason").value
};