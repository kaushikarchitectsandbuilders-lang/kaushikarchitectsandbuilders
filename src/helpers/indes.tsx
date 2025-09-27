export function experienceLabel(startYear, startMonth) {
    const now = new Date(); // current date
    let years = now.getFullYear() - startYear;
    let months = now.getMonth() - (startMonth - 1); // JS months: 0-11
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    // If negative (start date in future), clamp to 0
    if (years < 0) return "0";
  
    // Return "N+" when there are leftover months, otherwise "N"
    return months > 0 ? `${years}+` : `${years}`;
  }
  