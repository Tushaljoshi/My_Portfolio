import React, { useState, useRef } from "react";
import { testimonials as initialTestimonials } from "../constants";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = formRef.current;

    const newTestimonial = {
      testimonial: form.message.value,
      name: form.name.value,
      designation: form.designation.value,
      company: form.company.value,
      image: "https://api.dicebear.com/7.x/initials/svg?seed=" + form.name.value,
    };

    // Simulate send without emailjs
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTestimonials([newTestimonial, ...testimonials]);
      setVisibleCount((prev) => prev + 1);
      form.reset();
    }, 1000);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold mb-6">What Clients Say 💬</h2>

      {/* Display Testimonials */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {testimonials.slice(0, visibleCount).map((t, index) => (
          <div key={index} className="bg-[#1f2937] p-6 rounded-lg shadow-md">
            <p className="text-sm mb-4">“{t.testimonial}”</p>
            <div className="flex items-center gap-3">
              <img src={t.image} alt="client" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-400">
                  {t.designation} at {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < testimonials.length && (
        <div className="flex justify-center mb-10">
          <button
            onClick={handleLoadMore}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}

      {/* Submission Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="bg-[#111827] p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Submit Your Review ✍️</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input name="name" placeholder="Name" required className="p-2 rounded bg-gray-800 text-white" />
          <input name="email" placeholder="Email" required className="p-2 rounded bg-gray-800 text-white" />
          <input name="designation" placeholder="Designation" className="p-2 rounded bg-gray-800 text-white" />
          <input name="company" placeholder="Company" className="p-2 rounded bg-gray-800 text-white" />
        </div>
        <textarea
          name="message"
          placeholder="Your Review..."
          required
          rows="4"
          className="w-full p-2 rounded bg-gray-800 text-white mb-4"
        ></textarea>
        <button
          type="submit"
          className="bg-[#111827] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          {sending ? "Sending..." : "Send Testimonial"}
        </button>
        {submitted && <p className="text-green-400 mt-2">Thanks! Your feedback is submitted 🎉</p>}
      </form>
    </div>
  );
};

export default Testimonials;
