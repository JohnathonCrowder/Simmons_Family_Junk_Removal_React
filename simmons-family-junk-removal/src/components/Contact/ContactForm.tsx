import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/config";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    items: [] as string[],
    pickupDate: "",
    pickupTime: "",
    city: "",
    instructions: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Cities within a 30-mile radius of Springfield, MO
  const cities = [
    "Springfield",
    "Nixa",
    "Ozark",
    "Republic",
    "Rogersville",
    "Battlefield",
    "Strafford",
    "Willard",
    "Clever",
    "Highlandville",
    "Marionville",
    "Ash Grove",
    "Bolivar",
  ];

  const serviceTypes = ["Residential", "Commercial"];
  const itemOptions = [
    "Furniture",
    "Electronics",
    "Appliances",
    "Construction Debris",
    "Yard Waste",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    if (type === "checkbox" && name === "items") {
      const newItems = checked
        ? [...formData.items, value]
        : formData.items.filter((item) => item !== value);
      setFormData({ ...formData, items: newItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await axios.post(`${BASE_URL}/api/contact`, formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        items: [],
        pickupDate: "",
        pickupTime: "",
        city: "",
        instructions: "",
      });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600">
        Request Junk Removal Service
      </h2>
      <p className="text-center text-gray-500">
        Please fill out the form below, and our team will contact you shortly!
      </p>

      {/* Personal Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Service Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service Type <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Service Type</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Items */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Items to Remove <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {itemOptions.map((item) => (
              <label key={item} className="flex items-center">
                <input
                  type="checkbox"
                  name="items"
                  value={item}
                  checked={formData.items.includes(item)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Pickup Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Pickup Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Pickup Time <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            required
            className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* City Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          City <span className="text-red-500">*</span>
        </label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Instructions */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Additional Instructions
        </label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          rows={4}
          placeholder="Any additional notes for our team..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full p-4 rounded-lg text-white ${
            status === "loading"
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          } transition-colors`}
        >
          {status === "loading" ? "Submitting..." : "Submit Request"}
        </button>
      </div>

      {/* Feedback Messages */}
      {status === "success" && (
        <div className="mt-4 text-green-500">
          Your request has been submitted successfully!
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 text-red-500">{errorMessage}</div>
      )}
    </form>
  );
};

export default ContactForm;
