// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("date");
    const result = document.getElementById("result");
  
    // Set maximum selectable date to today
    userInput.max = new Date().toISOString().split("T")[0];
  
    // Attach the calculateAge function to the global scope so it can be called from HTML
    window.calculateAge = function () {
      // Check if a date has been selected
      if (!userInput.value) {
        result.innerHTML = '<span style="color: red;">Please select your birth date.</span>';
        return;
      }
  
      // Parse the input date and get today's date
      const birthDate = new Date(userInput.value);
      const today = new Date();
  
      // Calculate the differences in years, months, and days
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
  
      // If the day difference is negative, borrow days from the previous month
      if (days < 0) {
        months--;
        days += getDaysInMonth(today.getFullYear(), today.getMonth());
      }
  
      // If the month difference is negative, adjust the year and month
      if (months < 0) {
        years--;
        months += 12;
      }
  
      // Display the result with styling
      result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, <span>${days}</span> days old.`;
    };
  
    // Helper function to get the number of days in a given month
    function getDaysInMonth(year, month) {

      return new Date(year, month, 0).getDate();
    }
  });
  