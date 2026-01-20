export const formatDateToYear = (month: number, year: number) => {
  const date = new Date(year, month);
  return new Intl.DateTimeFormat(["en-GB", "id-ID"], {
    year: "numeric",
    month: "short",
  }).format(date);
};
