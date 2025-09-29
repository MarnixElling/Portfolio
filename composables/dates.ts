// Getters
export const getDifferenceInYears = (startDate: Date | string, endDate: Date | string) => new Date(endDate).getFullYear() - new Date(startDate).getFullYear();
export const getDifferenceInMonths = (startDate: Date | string, endDate: Date | string) => new Date(endDate).getMonth() - new Date(startDate).getMonth();

// Formatters
export const formatDateMonthYear = (date: Date | string) => new Date(date).toLocaleDateString('nl-NL', { month: 'short',  year: 'numeric' });

export const formatDateDifferenceYearsMonths = (startDate: Date | string, endDate: Date | string) => {
  let years = getDifferenceInYears(startDate, endDate);
  let months = getDifferenceInMonths(startDate, endDate);

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years ? `${years} jaar` : '';
  const monthStr = months ? `${months} maand${months > 1 ? 'en' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' en ');
};
