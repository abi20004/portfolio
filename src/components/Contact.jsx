import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});


const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};



const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess(true);

  try {
    const response = await fetch("https://your-backend-url.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.text();
    // alert(result);

    setLoading(false);
    setSuccess(true);

    // Clear form after success
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    // Hide success after 3 seconds
    setTimeout(() => setSuccess(false), 1500);

  } catch (error) {
    console.error("Error:", error);

    setLoading(false);

    alert("Something went wrong!");
  }
};
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-950">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
        <div className="w-full max-w-screen py-16 sm:py-20 md:py-24">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl sm:text-2xl md:text-4xl font-medium text-cyan-50 text-center"
          >
            Contact <b className="text-teal-300">Me</b>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false }}
            className="text-sm md:text-base text-teal-200 font-serif pt-4 text-center"
          >
            Feel free to reach out anytime :
          </motion.p>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-44">


            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-6 py-6">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <label className="text-cyan-50 text-md sm:text-lg md:text-xl">Name :</label>
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full mt-2 rounded-md border border-teal-100 px-4 py-2 
                               focus:ring-2 focus:ring-teal-300 focus:outline-none text-teal-100"
                  />
                </motion.div>
              </div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <label className="text-cyan-50 text-md sm:text-lg md:text-xl">Email :</label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full mt-2 rounded-md border border-teal-100 px-4 py-2 
                               focus:ring-2 focus:ring-teal-300 focus:outline-none text-teal-100"
                  />
                </motion.div>
              </div>
            </div>


            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="pt-4"
            >
              <label className="text-cyan-50 text-md sm:text-lg md:text-xl">Subject :</label>
              <input
                 type="text"
                 name="subject"
                 value={formData.subject}
                 onChange={handleChange}
                placeholder="Subject of your message"
                className="w-full mt-2 rounded-md border border-teal-100 px-4 py-2 
                           focus:ring-2 focus:ring-teal-300 focus:outline-none text-teal-100"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="pt-6"
            >
              <label className="text-cyan-50 text-md sm:text-lg md:text-xl">Message :</label>
              <textarea
               rows="6"
               name="message"
               value={formData.message}
               onChange={handleChange}
                placeholder="Write your message..."
                className="w-full mt-2 rounded-md border border-teal-100 px-4 py-4 
                           focus:ring-2 focus:ring-teal-300 focus:outline-none text-teal-100"
              ></textarea>
            </motion.div>

            {/* Send Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="pt-8 flex justify-center"
            >
              <button
                type="submit"
                disabled={loading}
                className="w-36 h-12 bg-teal-200 text-teal-300 font-semibold text-sm py-2 rounded-md shadow-md 
                           hover:bg-teal-700 hover:text-teal-600 hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                {loading ? (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  ) : (
    "Send ✈️"
  )}
              </button>
            </motion.div>

            {/* ✅ SUCCESS MESSAGE HERE */}
{success && (
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-teal-400 font-bold text-center mt-4"
  >
    ✅ Message Sent Successfully!
  </motion.p>
)}

          </form >
        </div>
      </div>
    </div>
  );
};

export default Contact;