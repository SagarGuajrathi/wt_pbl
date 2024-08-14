// Script to handle doctor and patient login, registration, and appointment booking

let doctors = []; // Array to hold registered doctors
let patients = []; // Array to hold registered patients

// Handle doctor registration
document.getElementById('doctor-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const doctor = {
        name: document.getElementById('doc-name').value,
        specialty: document.getElementById('doc-specialty').value,
        email: document.getElementById('doc-email').value,
        phone: document.getElementById('doc-phone').value,
        password: 'doctor-password' // Password can be handled more securely with hashing
    };

    doctors.push(doctor);
    alert('Doctor registered successfully!');
    document.getElementById('doctor-form').reset();
});

// Handle doctor login
document.getElementById('doctor-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('doc-login-email').value;
    const password = document.getElementById('doc-login-password').value;

    const doctor = doctors.find(doc => doc.email === email && doc.password === password);

    if (doctor) {
        alert('Doctor logged in successfully!');
        // Redirect to doctor's profile or dashboard
    } else {
        alert('Invalid email or password');
    }
    document.getElementById('doctor-login-form').reset()
});

// Handle patient registration (optional)
document.getElementById('patient-registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patient = {
        name: document.getElementById('pat-name').value,
        email: document.getElementById('pat-email').value,
        phone: document.getElementById('pat-phone').value,
        password: 'patient-password' // Password can be handled more securely with hashing
    };

    patients.push(patient);
    alert('Patient registered successfully!');
    document.getElementById('patient-registration-form').reset();
});

// Handle patient login
document.getElementById('patient-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('pat-login-email').value;
    const password = document.getElementById('pat-login-password').value;

    const patient = patients.find(pat => pat.email === email && pat.password === password);

    if (patient) {
        alert('Patient logged in successfully!');
        // Redirect to patient's appointment history or dashboard
    } else {
        alert('Invalid email or password');
    }
});

// Handle appointment booking
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const patientName = document.getElementById('pat-name').value;
    const doctorName = document.getElementById('doc-selection').value;
    const appointmentDate = document.getElementById('appointment-date').value;

    alert(`Appointment booked successfully with Dr. ${doctorName} on ${appointmentDate}!`);
    document.getElementById('booking-form').reset();

    // Optionally, send a confirmation email or SMS to the patient
});

// Search and Filter Doctors (example for filtering by specialty)
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    const filteredDoctors = doctors.filter(doc => 
        doc.name.toLowerCase().includes(searchQuery) || 
        doc.specialty.toLowerCase().includes(searchQuery)
    );

    // Display the filtered doctors (can be added to a dynamic list)
    console.log(filteredDoctors);
});
