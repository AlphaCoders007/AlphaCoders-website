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
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 bg-[#7e7e7e]  rounded-3xl shadow-2xl">
      <h2 className="text-4xl sm:text-6xl font-bold text-center dark:text-gray-800  leading-tight mb-12">
        Let’s Get Into Work!
      </h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-12 font-thicccboi"
        onSubmit={handleSubmit}
      >
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <label htmlFor="companyName" className="block text-lg font-medium">
              Name / Company
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Name / Company"
              className={`w-full border-2 rounded-lg p-4   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.companyName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-2">{errors.companyName}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full border-2 rounded-lg p-4  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="enquiry" className="block text-lg font-medium">
              Enquiry
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              rows={5}
              value={formData.enquiry}
              onChange={handleChange}
              placeholder="Give a brief about the project"
              className={`w-full border-2 rounded-lg p-4  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.enquiry ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.enquiry && (
              <p className="text-red-500 text-sm mt-2">{errors.enquiry}</p>
            )}
          </div>
        </div>
        {/* Right Side */}
        <div className="space-y-8">
          <div>
            <label className="block text-lg font-medium">Budget</label>
            <Slider
              value={formData.budgetRange}
              onChange={handleBudgetRangeChange}
              min={10}
              max={1000}
              sx={{
                color: "#F5CB5C",
              }}
            />
            <div className="text-sm text-gray-900">
              Selected Budget: ${formData.budgetRange[0]}K - $
              {formData.budgetRange[1]}K
            </div>
          </div>

          <div>
            <label className="block text-lg ">
              Requirement Based On
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
                  className={`border-2 rounded-3xl px-4 py-2 text-sm  ${
                    formData.requirement === item
                      ? " text-textcolor-yellow dark:bg-black bg-white "
                      : " text-textcolor-yellow   "
                  } dark:hover:bg-black hover:bg-background-light`}
                  onClick={() =>
                    setFormData({ ...formData, requirement: item })
                  }
                >
                  {item}
                </button>
              ))}
            </div>
            {errors.requirement && (
              <p className="text-red-500 text-sm mt-2">{errors.requirement}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-textcolor-yellow hover:bg-yellow-500 rounded-full text-lg font-medium transition-transform transform hover:scale-105"
          >
            Submit Your Enquiry
          </button>
          {successMessage && (
            <p className="mt-4 text-green-500 text-center">{successMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
