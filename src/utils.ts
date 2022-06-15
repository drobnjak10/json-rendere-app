function isDate(value: any) {
  if (typeof value === "string") {
    const regex =
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)? )((-(\d{2}):(\d{2}))?)$/;
    if (value.match(regex) || Date.parse(value)) {
      return true;
    }
  }
  return false;
}

export function checkFieldType(value: any) {
  if (isDate(value)) {
    return "date";
  } else if (typeof value == "boolean" || value === 'true' || value === 'false') {
    return "radio";
  } else if (typeof value === "string" && value.startsWith("+")) {
    return "text";
  } else if (Number(value)) {
    return "number";
  } else if (typeof value === "string" && value.length > 100) {
    return "textarea";
  } else if (typeof value === "string" && value.includes("@")) {
    return "email";
  } else if (typeof value === "string") {
    return "text";
  } else {
    return null;
  }
}
