export const formatDate = (dateString, locale = "en-GB") => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
