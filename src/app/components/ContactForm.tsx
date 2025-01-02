import React, { useState } from "react";
import { Slider } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    requirement: "",
    budgetRange: [10, 100],
    enquiry: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const handleBudgetRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setFormData({ ...formData, budgetRange: newValue as number[] });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.companyName)
      newErrors.companyName = "Name/Company is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.requirement)
      newErrors.requirement = "Requirement is required.";
    if (!formData.enquiry) newErrors.enquiry = "Enquiry is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/meoqyqqw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your enquiry has been submitted successfully!");
        setFormData({
          companyName: "",
          email: "",
          requirement: "",
          budgetRange: [10, 100],
          enquiry: "",
        });
      } else {
        throw new Error("Failed to submit your enquiry. Please try again.");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unknown error occurred.";
      setSuccessMessage(message);
    }
  };

  return (
    <form
      className="mt-10 overflow-auto h-auto flex flex-col md:flex-row gap-10 md:gap-8 px-4 md:px-12 py-10  text-white rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      {/* Left Side - Name, Email, and Requirement */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <label htmlFor="companyName" className="text-xl font-semibold">
            Name / Company
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Your Name / Company"
            className={`w-full border-2 rounded-lg p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.companyName ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={!!errors.companyName}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full border-2 rounded-lg p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-xl font-semibold">Requirement Based On</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 ">
            {[
              "Idea Elaboration",
              "Market Research and Feasibility Analysis",
              "Wire-Framing and Prototyping",
              "MVP Development",
              "System Integration",
              "Custom Software Development",
              "Mobile and Web Application Development",
              "Quality Testing and Software Maintenance",
              "Other",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={` border-2 rounded-3xl w-full px-2 py-2  text-sm transition-all ${
                  formData.requirement === item
                    ? "bg-[#F5CB5C] text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-[#F5CB5C] hover:text-white`}
                onClick={() =>
                  setFormData({ ...formData, requirement: item })
                }
              >
                {item}
              </button>
            ))}
          </div>
          {errors.requirement && (
            <p className="text-red-500 text-sm mt-1">{errors.requirement}</p>
          )}
        </div>
      </div>

      {/* Right Side - Budget, Enquiry, and Submit */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <label className="text-xl font-semibold">Budget</label>
          <Slider
            value={formData.budgetRange}
            onChange={handleBudgetRangeChange}
            // valueLabelDisplay="auto"
            // valueLabelFormat={(value) => `$${value}`}
            min={10}
            max={1000}
            sx={{
              color: "#F5CB5C", 
              
            }}
          />
          <div className="text-lg mt-2 text-gray-500">
            Selected Budget: ${formData.budgetRange[0]}K - ${formData.budgetRange[1]}K
          </div>
        </div>

        <div>
          <label htmlFor="enquiry" className="text-xl font-semibold">
            Enquiry
          </label>
          <textarea
            id="enquiry"
            name="enquiry"
            rows={5}
            value={formData.enquiry}
            onChange={handleChange}
            placeholder="Give a brief about the project"
            className={`w-full border-2 rounded-lg p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.enquiry ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={!!errors.enquiry}
          ></textarea>
          {errors.enquiry && (
            <p className="text-red-500 text-sm mt-1">{errors.enquiry}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 text-textcolor-yellow  border  rounded-full text-xl mt-6 hover:scale-105 transition-all ease-in-out duration-300"
        >
          Submit Your Enquiry
        </button>

        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      </div>
    </form>
  );
};

export default ContactForm;