function sanitizeYAMLString(str) {
  // Escape single quotes
  let sanitized = str.replace(/'/g, "''");

  // Remove new lines and carriage returns
  sanitized = sanitized.replace(/(\r\n|\n|\r)/gm, " ");

  // Escape colons followed by a space
  sanitized = sanitized.replace(/:(\s)/g, "\\:$1");

  return sanitized;
}

export default sanitizeYAMLString;
