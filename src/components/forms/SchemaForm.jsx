import { useState } from "react";
import PropTypes from "prop-types";
import { HONEYPOT_FIELD } from "../../forms/schemas";
import { readForm, submitNetlifyForm } from "../../forms/netlify";

const inputClass =
  "w-full px-4 py-2 rounded border border-professional-midgrey bg-professional-grey text-professional-offwhite focus:border-professional-yellow focus:outline-none placeholder:text-professional-lightgrey";

const Label = ({ field, htmlFor }) => (
  <label htmlFor={htmlFor} className="block mb-1 font-medium text-professional-offwhite">
    {field.label}
    {field.required && <span className="text-professional-yellow"> *</span>}
  </label>
);


Label.propTypes = { field: PropTypes.object.isRequired, htmlFor: PropTypes.string };

const Field = ({ formId, field }) => {
  const id = `${formId}-${field.name}`;

  if (field.type === "radio" || field.type === "checkboxes") {
    const inputType = field.type === "radio" ? "radio" : "checkbox";
    return (
      <fieldset>
        <legend className="mb-2 font-medium text-professional-offwhite">
          {field.label}
          {field.required && <span className="text-professional-yellow"> *</span>}
        </legend>
        <div
          className={
            inputType === "radio"
              ? "flex flex-wrap gap-x-6 gap-y-2"
              : "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"
          }
        >
          {field.options.map((option, i) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type={inputType}
                name={field.name}
                value={option}
                required={field.required && inputType === "radio" && i === 0}
                className="accent-professional-yellow w-4 h-4"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        <Label field={field} htmlFor={id} />
        <select id={id} name={field.name} required={field.required} defaultValue="" className={inputClass}>
          <option value="" disabled>
            Choose one…
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div>
        <Label field={field} htmlFor={id} />
        <textarea
          id={id}
          name={field.name}
          rows={4}
          required={field.required}
          maxLength={field.maxLength}
          placeholder={field.placeholder}
          className={inputClass}
        />
      </div>
    );
  }

  // Plain text-like inputs. URLs use type="text" so "mybusiness.com" (no
  // https://) isn't rejected by the browser's strict URL validation.
  const typeMap = { email: "email", tel: "tel", url: "text", text: "text" };
  return (
    <div>
      <Label field={field} htmlFor={id} />
      <input
        id={id}
        type={typeMap[field.type] ?? "text"}
        inputMode={field.type === "url" ? "url" : undefined}
        autoComplete={{ name: "name", email: "email", phone: "tel", businessName: "organization" }[field.name]}
        name={field.name}
        required={field.required}
        maxLength={field.maxLength}
        placeholder={field.placeholder}
        className={inputClass}
      />
    </div>
  );
};


Field.propTypes = { formId: PropTypes.string.isRequired, field: PropTypes.object.isRequired };

const SchemaForm = ({ schema, submitLabel, successMessage }) => {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitNetlifyForm(schema.id, readForm(event.currentTarget));
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-professional-yellow/40 bg-professional-darkgrey p-8 text-center">
        <p className="text-2xl font-bold text-professional-yellow mb-2">Got it, thank you!</p>
        <p className="text-lg">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      name={schema.id}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot={HONEYPOT_FIELD}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value={schema.id} />
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this empty: <input name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {schema.sections.map((section) => (
        <fieldset
          key={section.title}
          className="rounded-lg border border-professional-midgrey bg-professional-darkgrey/60 p-5 sm:p-6"
        >
          <legend className="px-2 text-xl font-semibold text-professional-yellow">{section.title}</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {section.fields.map((field) => (
              <div
                key={field.name}
                className={["radio", "checkboxes", "textarea"].includes(field.type) ? "sm:col-span-2" : ""}
              >
                <Field formId={schema.id} field={field} />
              </div>
            ))}
          </div>
        </fieldset>
      ))}

      {status === "error" && (
        <p role="alert" className="text-center text-red-400">
          Something went wrong sending the form. Please try again, or email or call me directly.
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-8 py-3 rounded-lg bg-professional-yellow text-black font-bold text-lg hover:bg-professional-darkyellow transition-colors disabled:opacity-60 disabled:cursor-wait"
        >
          {status === "submitting" ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
};


SchemaForm.propTypes = {
  schema: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  submitLabel: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
};

export default SchemaForm;
