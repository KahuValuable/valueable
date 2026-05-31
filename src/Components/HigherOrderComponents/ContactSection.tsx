import React, { useState } from "react";
import Reveal from "@/Components/Reveal";
import { CONTACT_EMAIL } from "@/config/links";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const e: { [key: string]: string } = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website enquiry from " + form.name)}` +
      `&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
  };

  const field =
    "w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] " +
    "placeholder:text-[var(--ink-soft)]/60 outline-none transition-colors " +
    "focus:border-[var(--ember)] focus:ring-2 focus:ring-[rgba(242,140,56,0.25)]";

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal as="span" className="eyebrow">Get in touch</Reveal>
          <Reveal as="h2" className="display-lg mt-4" delay={60}>
            Let&apos;s measure what matters
          </Reveal>
          <Reveal as="p" className="lead mt-6" delay={120}>
            Tell us about your organisation and what you want to understand. We&apos;ll
            show you how valueable can help you tell your impact story.
          </Reveal>
          <Reveal delay={180}>
            <a href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 font-display text-xl font-semibold text-[var(--ember-deep)] underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} noValidate className="card flex flex-col gap-4 p-8">
            <div>
              <input name="name" placeholder="Your name" className={field} value={form.name} onChange={handleChange} />
              {errors.name && <span className="mt-1 block text-sm text-[var(--ember-deep)]">{errors.name}</span>}
            </div>
            <div>
              <input type="email" name="email" placeholder="Your email" className={field} value={form.email} onChange={handleChange} />
              {errors.email && <span className="mt-1 block text-sm text-[var(--ember-deep)]">{errors.email}</span>}
            </div>
            <div>
              <textarea name="message" placeholder="How can we help?" className={`${field} h-36 resize-none`} value={form.message} onChange={handleChange} />
              {errors.message && <span className="mt-1 block text-sm text-[var(--ember-deep)]">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center">Send message</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
