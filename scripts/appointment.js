
/*
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(form);

    // Initialize an empty array to store selected services
    const selectedServices = [];

    // Check each checkbox individually to see if it's selected
    // Instead of checking each option individually, we check for the 'services' key in the form data
    if (formData.has("services")) {
      // Get the array of selected services from the form data
      const selectedServicesFromForm = formData.getAll("services");
      // Add the selected services to the selectedServices array
      selectedServicesFromForm.forEach(service => {
        selectedServices.push(service);
      });
    }

   // Send appointment data to server
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
      service: selectedServices // Use the selectedServices array
      // services: Array.from(formData.getAll("services"))
    })
  })
  .then(response => {
    if (response.ok) {
      // Appointment booked successfully
      console.log("Appointment booked successfully!");
      alert("Appointment booked successfully! You will receive a confirmation email shortly.");
      form.reset();
      // Redirect to home page
      // window.location.href = "/index.html";
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
*/
/*
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const formData = new FormData(form);
    const appointmentData = {};
    formData.forEach((value, key) => {
      appointmentData[key] = value;
    });

    // Send appointment data to server
    fetch("http://localhost:8080/h2-console", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(appointmentData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(data => {
      // Show confirmation to the user
      alert("Your appointment has been successfully booked!");
      // You can also redirect the user to a confirmation page if needed
      // window.location.href = "confirmation.html";
    })
    .catch(error => {
      console.error("There was a problem with your fetch operation:", error);
      // Show error message to the user
      alert("There was an error booking your appointment. Please try again later.");
    });
  });
});
*/

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Gather form data
  const formData = new FormData(form);

  // Convert form data to JSON
  const jsonData = {}; // Initialize an empty object to store form data as JSON
  // Use forEach to iterate through form data and add it to the JSON object
  formData.forEach((value, key) => { 
    jsonData[key] = value;
  });

    // Initialize an empty array to store selected services
    const selectedServices = [];

    // Loop through all checkboxes with name "services" and check if they are checked
    const checkboxes = document.querySelectorAll('input[name="services"]:checked');
    checkboxes.forEach(function(checkbox) {
      selectedServices.push(checkbox.value);
    });
  
    // Add the selected services to the JSON object
    jsonData.services = selectedServices;

  // Send appointment data to server
  fetch("/appointment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => {
    if (response.ok) {
      // Appointment booked successfully
      console.log("Appointment booked successfully!");
      alert("Appointment booked successfully! You will receive a confirmation email shortly.");
      form.reset();
      // Redirect to home page
      // window.location.href = "/index.html";
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