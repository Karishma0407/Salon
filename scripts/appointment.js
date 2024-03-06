const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("/appointment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      services: Array.from(formData.getAll("services"))
    })
  })
  .then(response => {
    if (response.ok) {
      // Appointment booked successfully
      console.log("Appointment booked successfully!");
      alert("Appointment booked successfully! You will receive a confirmation email shortly.");
      form.reset();
      // Redirect to home page
      window.location.href = "/index.html";
    } else {
      // Error handling
      console.error("Error booking appointment:", response.statusText);
      alert("Error booking appointment. Please try again later.");
    }
  })
  .catch(error => {
    console.error("Error booking appointment:", error);
    alert("Error booking appointment. Please try again later.");
  });
});