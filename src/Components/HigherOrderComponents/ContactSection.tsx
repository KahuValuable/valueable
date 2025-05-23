import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.location.href = `mailto:hello@valueable.co.nz?subject=Contact from ${encodeURIComponent(
      form.name
    )}&body=Name: ${encodeURIComponent(
      form.name
    )}%0AEmail: ${encodeURIComponent(form.email)}%0A%0A${encodeURIComponent(
      form.message
    )}`;
  };

  return (
    <div>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center "
      >
        <div className="flex flex-col items-center">
          <h1 className="heading-text mb-4">contact us</h1>
          <a className="subheading-text" href="mailto:hello@valueable.co.nz">
            hello@valueable.co.nz
          </a>
          <br />
          <br />
          <p className="body-text text-center mb-4">or reach out to us here:</p>
          <br />
          <form
            className="flex flex-col gap-4 w-72"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-2 rounded"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border p-2 rounded"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
            <textarea
              name="message"
              placeholder="Your Message"
              className="border p-2 rounded h-32"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
            <button
              className="bg-orange-400 text-white p-2 rounded"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
