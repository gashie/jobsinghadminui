export const formatDate2 = (timestamp) => {
    // Create a Date object from the input timestamp
    const date = new Date(timestamp);
  
    // Get the date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it's zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    // Format the date in the desired format
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }
  