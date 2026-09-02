import React, { useState } from "react";

import { ContactUs } from "../data/data";

import { MdOutlineMailOutline } from "react-icons/md";

import { AiOutlinePhone } from "react-icons/ai";

// Only letters allowed
const FIRST_NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9]*$/;

const LAST_NAME_REGEX = /^[a-zA-Z]*$/;

// Basic email shape validation
const EMAIL_SHAPE_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const isValidEmail = (email) => {
  if (!EMAIL_SHAPE_REGEX.test(email)) return false;

  const domain = email.split("@")[1];

  return ContactUs.form.allowedEmailDomains.includes(domain);
};

const isValidPhone = (phone) => /^\d{10}$/.test(phone);
const baseInputClasses =
  "w-full rounded-sm border bg-transparent pl-[10px] py-[7.5px] text-sm font-normal text-[var(--theme-Contact-Form-title)] outline-none transition-colors hover:!border-[var(--theme-Contact-Form-description-border-hover)] focus:border-[var(--theme-Contact-org)]";

const borderClasses = (hasError) =>
  hasError
    ? "border-[#FF4D4F]"
    : "border-[var(--theme-Contact-Form-description-border)]";

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const clearError = (field) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));

  // First name / last name
  const handleFirstNameChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^[a-zA-Z][a-zA-Z0-9]*$/.test(value)) {
      setFormData((prev) => ({
        ...prev,
        firstName: value,
      }));

      clearError("firstName");
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;

    if (LAST_NAME_REGEX.test(value)) {
      setFormData((prev) => ({
        ...prev,
        lastName: value,
      }));

      clearError("lastName");
    }
  };

  // Email lowercase
  const handleEmailChange = (e) => {
    const value = e.target.value.toLowerCase();

    setFormData((prev) => ({
      ...prev,
      email: value,
    }));

    clearError("email");
  };

  // Phone validation
  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: digitsOnly,
    }));

    clearError("phone");
  };

  // Message
  const handleMessageChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      message: value,
    }));

    clearError("message");
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      nextErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = `Use a ${ContactUs.form.allowedEmailDomains.join(
        ", ",
      )} email address`;
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!isValidPhone(formData.phone)) {
      nextErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please tell us how we can help";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(false);

    if (!validate()) return;

    console.log("Contact form submitted:", formData);

    setFormData(initialFormState);

    setErrors({});

    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[var(--theme-Contact-bg)]">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-[115px] px-[120px] pt-[90px] pb-[91px] md:flex-row">
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-1 flex-col gap-16 py-[9.5px]">
          {/* CONTACT INTRO */}
          <div>
            <h2 className="mb-8 text-5xl font-semibold text-[var(--theme-Contact-title)]">
              {ContactUs.intro.heading}

              <span className="text-5xl font-semibold text-[var(--theme-Contact-org)]">
                {ContactUs.intro.headingAccent}
              </span>
            </h2>

            <p className="mb-2 max-w-[340px] leading-[180%] tracking-normal align-middle text-sm font-normal text-[var(--theme-Contact-description)]">
              {ContactUs.intro.description}
            </p>

            <a
              className="mb-2 block w-fit text-sm font-normal text-[var(--theme-Contact-description)] transition-colors hover:underline underline-offset-1"
              href={`mailto:${ContactUs.intro.email}`}
            >
              {ContactUs.intro.email}
            </a>

            <a
              className="block w-full text-sm font-normal text-[var(--theme-Contact-description)]"
              href={`tel:${ContactUs.intro.phone.replace(/\s/g, "")}`}
            >
              {ContactUs.intro.phone}
            </a>
          </div>

          {/* CONTACT BLOCKS */}
          <div className="grid w-fit grid-cols-1 gap-[29px] md:grid-cols-2">
            {ContactUs.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="mb-2 text-xl font-medium text-[var(--theme-Contact-title)]">
                  {block.title}
                </h3>

                <p className="max-w-[333px] leading-relaxed text-sm font-normal text-[var(--theme-Contact-description)]">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 md:max-w-[460px]">
          <form
            className="min-h-[530px] rounded-md border border-[var(--theme-Contact-Form-border)] bg-[var(--theme-Contact-bg-card,#ffffff)] p-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="mb-1 text-[32px] font-medium text-[var(--theme-Contact-Form-title)]">
              {ContactUs.form.heading}
            </h3>

            <p className="mb-6 text-sm font-normal text-[var(--theme-Contact-Form-description)]">
              {ContactUs.form.description}
            </p>

            {/* FIRST + LAST NAME */}
            <div className="mb-4 flex gap-1">
              <div className="flex-1">
                <input
                  className={`${baseInputClasses} ${borderClasses(
                    errors.firstName,
                  )}`}
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleFirstNameChange}
                />

                {errors.firstName && (
                  <p className="mt-1.5 text-sm text-[#FF4D4F]">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <input
                  className={`${baseInputClasses} ${borderClasses(
                    errors.lastName,
                  )}`}
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleLastNameChange}
                />

                {errors.lastName && (
                  <p className="mt-1.5 text-sm text-[#FF4D4F]">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div className="mb-4">
              <div className="relative flex items-center">
                <MdOutlineMailOutline className="pointer-events-none absolute left-2 h-6 w-6 text-[var(--theme-Contact-Form-description)]" />

                <input
                  className={`${baseInputClasses} ${borderClasses(
                    errors.email,
                  )} pl-[38px]`}
                  type="email"
                  placeholder="Your E-mail"
                  value={formData.email}
                  onChange={handleEmailChange}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-sm text-[#FF4D4F]">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div className="mb-4">
              <div className="relative flex items-center">
                <AiOutlinePhone className="pointer-events-none absolute left-2 h-6 w-6 text-[var(--theme-Contact-Form-description)]" />

                <input
                  className={`${baseInputClasses} ${borderClasses(
                    errors.phone,
                  )} pl-[38px]`}
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
              </div>

              {errors.phone && (
                <p className="mt-1.5 text-sm text-[#FF4D4F]">{errors.phone}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="relative mb-4">
              <textarea
                className={`${baseInputClasses} ${borderClasses(
                  errors.message,
                )} h-[111px] resize-none overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleMessageChange}
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-[#FF4D4F]">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-sm bg-[var(--theme-Contact-Form-button)] py-3.5 text-[14px] font-normal text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>

            {submitted && (
              <p className="mt-3.5 text-sm text-green-700">
                Thanks — we've received your message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
