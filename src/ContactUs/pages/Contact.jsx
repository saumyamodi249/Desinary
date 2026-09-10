import React, { useState } from "react";
import { ContactUs } from "../data/data";

import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

// ================= VALIDATION REGEX =================

// First name: letters and numbers only
const FIRST_NAME_REGEX = /^[a-zA-Z0-9]+$/;

// Last name: letters only
const LAST_NAME_REGEX = /^[a-zA-Z]+$/;

// Email validation
const EMAIL_SHAPE_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone: exactly 10 digits
const PHONE_REGEX = /^\d{10}$/;

// ================= INITIAL FORM STATE =================

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

// ================= COMPONENT =================

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ================= CLEAR ERROR =================

  const clearError = (field) => {
    setErrors((prev) =>
      prev[field]
        ? {
            ...prev,
            [field]: "",
          }
        : prev,
    );
  };

  // ================= FIRST NAME =================
  // User can type anything
  // Validation happens only on submit

  const handleFirstNameChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      firstName: value,
    }));

    clearError("firstName");
  };

  // ================= LAST NAME =================
  // User can type anything
  // Validation happens only on submit

  const handleLastNameChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      lastName: value,
    }));

    clearError("lastName");
  };

  // ================= EMAIL =================

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      email: value,
    }));

    clearError("email");
  };

  // ================= PHONE =================
  // User can type letters, symbols etc.
  // Validation only happens on submit

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    clearError("phone");
  };

  // ================= MESSAGE =================

  const handleMessageChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      message: value,
    }));

    clearError("message");
  };

  // ================= VALIDATION =================

  const validate = () => {
    const nextErrors = {};

    // ---------- FIRST NAME ----------

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required";
    } else if (!FIRST_NAME_REGEX.test(formData.firstName.trim())) {
      nextErrors.firstName =
        "First name can contain only letters and numbers";
    }

    // ---------- LAST NAME ----------

    if (!formData.lastName.trim()) {
      nextErrors.lastName = "Last name is required";
    } else if (!LAST_NAME_REGEX.test(formData.lastName.trim())) {
      nextErrors.lastName =
        "Last name can contain only letters";
    }

    // ---------- EMAIL ----------

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!EMAIL_SHAPE_REGEX.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    // ---------- PHONE ----------

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!PHONE_REGEX.test(formData.phone.trim())) {
      nextErrors.phone =
        "Phone number must contain exactly 10 digits";
    }

    // ---------- MESSAGE ----------

    if (!formData.message.trim()) {
      nextErrors.message = "Please tell us how we can help";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(false);

    if (!validate()) return;

    console.log("Contact form submitted:", formData);

    setFormData(initialFormState);
    setErrors({});
    setSubmitted(true);
  };

  // ================= STYLING =================

  const baseInputClasses =
    "w-full rounded-md border bg-transparent py-[9px] lg:py-[8px] text-sm font-normal text-[var(--theme-Contact-Form-title)] placeholder:text-[var(--theme-Contact-Form-description)] outline-none transition-colors hover:!border-[var(--theme-Contact-Form-description-border-hover)] focus:border-[var(--theme-Contact-org)]";

  const borderClasses = (hasError) =>
    hasError
      ? "border-[#FF4D4F]"
      : "border-[var(--theme-Contact-Form-description-border)]";

  return (
    <section className="w-full bg-[var(--theme-Contact-bg)] transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 md:gap-14 lg:gap-[115px] px-4 md:px-10 lg:px-[120px] pt-10 md:pt-14 lg:pt-[90px] pb-12 md:pb-16 lg:pb-[91px] lg:flex-row">

        {/* ================= LEFT COLUMN ================= */}

        <div className="flex w-full flex-1 flex-col gap-8 md:gap-10 lg:gap-16 py-0 lg:py-[9.5px]">

          {/* CONTACT INTRO */}

          <div className="text-center lg:text-left">
            <h2 className="mb-4 lg:mb-8 text-[32px] md:text-[38px] lg:text-5xl font-semibold text-[var(--theme-Contact-title)]">
              {ContactUs.intro.heading}
              <span className="text-[var(--theme-Contact-org)]">
                {ContactUs.intro.headingAccent}
              </span>
            </h2>

            <p className="mb-3 max-w-[620px] lg:max-w-[340px] mx-auto lg:mx-0 text-[13px] md:text-sm font-normal leading-[180%] text-[var(--theme-Contact-description)]">
              {ContactUs.intro.description}
            </p>

            <a
              className="mb-2 block w-fit mx-auto lg:mx-0 text-sm font-normal text-[var(--theme-Contact-description)] underline-offset-1 transition-colors hover:underline"
              href={`mailto:${ContactUs.intro.email}`}
            >
              {ContactUs.intro.email}
            </a>

            <p className="block w-full text-center lg:text-left text-sm font-normal text-[var(--theme-Contact-description)]">
              {ContactUs.intro.phone}
            </p>
          </div>

          {/* CONTACT BLOCKS */}

          <div className="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[29px]">
            {ContactUs.blocks.map((block) => (
              <div key={block.title} className="text-center md:text-left">
                <h3 className="mb-2 text-xl font-medium text-[var(--theme-Contact-title)]">
                  {block.title}
                </h3>

                <p className="max-w-[420px] lg:max-w-[333px] mx-auto md:mx-0 text-[13px] md:text-sm font-normal leading-relaxed text-[var(--theme-Contact-description)]">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN / FORM ================= */}

        <div className="w-full flex-1 max-w-[480px] md:max-w-[540px] lg:max-w-[460px] mx-auto lg:mx-0">

          <form
            className="rounded-xl lg:rounded-md border border-[var(--theme-Contact-Form-border)] bg-[var(--theme-Contact-bg-card,#ffffff)] p-6 md:p-8 lg:p-4 shadow-sm lg:shadow-none min-h-auto lg:min-h-[530px]"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* FORM HEADING */}

            <h3 className="mb-1 text-[24px] md:text-[28px] lg:text-[32px] font-medium text-center text-[var(--theme-Contact-Form-title)]">
              {ContactUs.form.heading}
            </h3>

            <p className="mb-6 text-xs md:text-sm font-normal text-center text-[var(--theme-Contact-Form-description)]">
              {ContactUs.form.description}
            </p>

            {/* ================= FIRST + LAST NAME ================= */}

            <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:gap-1">

              {/* FIRST NAME */}

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleFirstNameChange}
                  className={`${baseInputClasses} ${borderClasses(
                    errors.firstName,
                  )} px-3.5`}
                />

                {errors.firstName && (
                  <p className="mt-1.5 text-sm text-[#FF4D4F]">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* LAST NAME */}

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleLastNameChange}
                  className={`${baseInputClasses} ${borderClasses(
                    errors.lastName,
                  )} px-3.5`}
                />

                {errors.lastName && (
                  <p className="mt-1.5 text-sm text-[#FF4D4F]">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* ================= EMAIL ================= */}

            <div className="mb-4">

              <div className="relative flex items-center">
                <MdOutlineMailOutline className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--theme-Contact-Form-description)]" />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`${baseInputClasses} ${borderClasses(
                    errors.email,
                  )} pl-11 pr-3.5`}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-sm text-[#FF4D4F]">
                  {errors.email}
                </p>
              )}
            </div>

            {/* ================= PHONE ================= */}

            <div className="mb-4">

              <div className="relative flex items-center">
                <AiOutlinePhone className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--theme-Contact-Form-description)]" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`${baseInputClasses} ${borderClasses(
                    errors.phone,
                  )} pl-11 pr-3.5`}
                />
              </div>

              {errors.phone && (
                <p className="mt-1.5 text-sm text-[#FF4D4F]">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* ================= MESSAGE ================= */}

            <div className="relative mb-4">

              <textarea
                placeholder="How can we help?"
                value={formData.message}
                maxLength={ContactUs.form.messageMaxLength || 120}
                onChange={handleMessageChange}
                className={`${baseInputClasses} ${borderClasses(
                  errors.message,
                )} px-3.5 h-[111px] pb-6 resize-none overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
              />

              <span className="pointer-events-none absolute bottom-2 right-3 text-xs text-[#999999]">
                {formData.message.length}/{ContactUs.form.messageMaxLength || 120}
              </span>

              {errors.message && (
                <p className="mt-1.5 text-sm text-[#FF4D4F]">
                  {errors.message}
                </p>
              )}
            </div>

            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              className="mt-2 w-full rounded-md lg:rounded-sm bg-[var(--theme-Contact-Form-button)] py-3 lg:py-3.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>

            {/* ================= SUCCESS MESSAGE ================= */}

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