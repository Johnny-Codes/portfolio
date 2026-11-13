// Netlify Forms only registers a form if it exists in the deployed static HTML
// with data-netlify="true" and a hidden "form-name" input. Our pages are
// prerendered, so rendering the <form> in React is enough — this helper just
// posts the AJAX submission in the format Netlify expects.

export async function submitNetlifyForm(formName, data) {
  const body = new URLSearchParams({ "form-name": formName });
  for (const [key, value] of Object.entries(data)) {
    // Checkbox groups arrive as arrays; Netlify stores one value per field.
    body.append(key, Array.isArray(value) ? value.join(", ") : value);
  }

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`);
  }
}

/** Collects a <form>'s values, keeping multi-value fields (checkboxes) as arrays. */
export function readForm(formElement) {
  const formData = new FormData(formElement);
  const data = {};
  for (const key of new Set(formData.keys())) {
    if (key === "form-name") continue;
    const values = formData.getAll(key);
    data[key] = values.length > 1 ? values : values[0];
  }
  return data;
}
