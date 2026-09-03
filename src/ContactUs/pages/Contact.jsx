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
    "w-full rounded-sm border bg-transparent pl-[10px] py-[7.5px] text-sm font-normal text-[var(--theme-Contact-Form-title)] outline-none transition-colors hover:!border-[var(--theme-Contact-Form-description-border-hover)] focus:border-[var(--theme-Contact-org)]";

  const borderClasses = (hasError) =>
    hasError
      ? "border-[#FF4D4F]"
      : "border-[var(--theme-Contact-Form-description-border)]";

  return (
    <section className="w-full bg-[var(--theme-Contact-bg)]">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-[115px] px-[120px] pb-[91px] pt-[90px] md:flex-row">

        {/* ================= LEFT COLUMN ================= */}

        <div className="flex w-full flex-1 flex-col gap-16 py-[9.5px]">

          {/* CONTACT INTRO */}

          <div>
            <h2 className="mb-8 text-5xl font-semibold text-[var(--theme-Contact-title)]">
              {ContactUs.intro.heading}

              <span className="text-5xl font-semibold text-[var(--theme-Contact-org)]">
                {ContactUs.intro.headingAccent}
              </span>
            </h2>

            <p className="mb-2 max-w-[340px] text-sm font-normal leading-[180%] text-[var(--theme-Contact-description)]">
              {ContactUs.intro.description}
            </p>

            <a
              className="mb-2 block w-fit text-sm font-normal text-[var(--theme-Contact-description)] underline-offset-1 transition-colors hover:underline"
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

                <p className="max-w-[333px] text-sm font-normal leading-relaxed text-[var(--theme-Contact-description)]">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}

        <div className="flex-1 md:max-w-[460px]">

          <form
            className="min-h-[530px] rounded-md border border-[var(--theme-Contact-Form-border)] bg-[var(--theme-Contact-bg-card,#ffffff)] p-4"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* FORM HEADING */}

            <h3 className="mb-1 text-[32px] font-medium text-[var(--theme-Contact-Form-title)]">
              {ContactUs.form.heading}
            </h3>

            <p className="mb-6 text-sm font-normal text-[var(--theme-Contact-Form-description)]">
              {ContactUs.form.description}
            </p>

            {/* ================= FIRST + LAST NAME ================= */}

            <div className="mb-4 flex gap-1">

              {/* FIRST NAME */}

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleFirstNameChange}
                  className={`${baseInputClasses} ${borderClasses(
                    errors.firstName,
                  )}`}
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
                  )}`}
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
                <MdOutlineMailOutline className="pointer-events-none absolute left-2 h-6 w-6 text-[var(--theme-Contact-Form-description)]" />

                <input
                  type="email"
                  placeholder="Your E-mail"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`${baseInputClasses} ${borderClasses(
                    errors.email,
                  )} pl-[38px]`}
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
                <AiOutlinePhone className="pointer-events-none absolute left-2 h-6 w-6 text-[var(--theme-Contact-Form-description)]" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`${baseInputClasses} ${borderClasses(
                    errors.phone,
                  )} pl-[38px]`}
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
                onChange={handleMessageChange}
                className={`${baseInputClasses} ${borderClasses(
                  errors.message,
                )} h-[111px] resize-none overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
              />

              {errors.message && (
                <p className="mt-1.5 text-sm text-[#FF4D4F]">
                  {errors.message}
                </p>
              )}
            </div>

            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              className="mt-2 w-full rounded-sm bg-[var(--theme-Contact-Form-button)] py-3.5 text-[14px] font-normal text-white transition-opacity hover:opacity-90"
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