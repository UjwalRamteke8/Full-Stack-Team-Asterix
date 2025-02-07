import { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    userFeedback: "", // Ensure it matches input field name
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    state: "", // Renamed from "region" to match backend
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.userFeedback || !formData.email || !formData.firstName) {
      alert("Please fill in the required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFormData({
          userFeedback: "",
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          city: "",
          state: "",
          postalCode: "",
        });
      } else {
        alert("Error submitting feedback.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="/home"
      className="container flex flex-col justify-center items-center mt-7 border rounded-md mx-auto p-6 max-w-lg"
    >
      <h2 className="text-lg font-bold font-mulish text-gray-900 mb-4">
        Feedback Form
      </h2>

      {/* Feedback Field */}
      <div className="w-full">
        <label
          htmlFor="userFeedback"
          className="block text-sm font-medium text-gray-900"
        >
          Feedback
        </label>
        <textarea
          id="userFeedback"
          name="userFeedback"
          rows={3}
          value={formData.userFeedback} // Fixed value binding
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Personal Information */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-900"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-900"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="w-full mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Country Select */}
      <div className="w-full mt-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-900"
        >
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select your country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Location Fields */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-900"
          >
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-900"
          >
            State / Province
          </label>
          <input
            id="state"
            name="state"
            type="text"
            value={formData.state} // Fixed field name
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Postal Code */}
      <div className="w-full mt-4">
        <label
          htmlFor="postalCode"
          className="block text-sm font-medium text-gray-900"
        >
          ZIP / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          value={formData.postalCode}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Submit Button */}
      <div className="w-full mt-6 flex justify-center">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
