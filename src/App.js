import React, { useState } from "react";
import "./App.css"; // Importing the CSS for modal styling.

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Reset the form data and errors
  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
    setErrors({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", email: "", phone: "", dob: "" };

    // Validate Username
    if (!formData.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email. Please check your email address.";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      newErrors.phone =
        "Invalid phone number. Please enter a 10-digit phone number.";
      isValid = false;
    }

    // Validate Date of Birth
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
      isValid = false;
    } else {
      const dobDate = new Date(formData.dob);
      if (dobDate > new Date()) {
        newErrors.dob =
          "Invalid Date of Birth. Date of birth cannot in future.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
      closeModal();
    }
  };

  // Close modal if clicked outside the modal
  const handleModalClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
                {errors.dob && <p className="error">{errors.dob}</p>}
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>

            {/* <button onClick={closeModal}>Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
