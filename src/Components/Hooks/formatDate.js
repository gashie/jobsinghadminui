export const formatDate = (timestamp) => {
    // Create a Date object from the input timestamp
    const date = new Date(timestamp);

    // Define months array for formatting
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the date components
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Function to add the "st," "nd," "rd," or "th" suffix to the day
    function getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    }

    // Format the date in the desired format
    const formattedDate = `${getDayWithSuffix(day)} ${month}, ${year}`;

    return formattedDate;
  }