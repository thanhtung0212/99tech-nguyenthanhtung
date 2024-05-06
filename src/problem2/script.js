function validateForm(event) {
  event.preventDefault();
  console.log("event", event);
  const inputAmount = document.getElementById("input-amount");
  const outputAmount = document.getElementById("output-amount");
  const button = document.querySelector("button");

  // Check if input amounts are valid
  if (inputAmount.value === "" || outputAmount.value === "") {
    alert("Please enter both input and output amounts.");
    return false;
  }

  // Perform additional validation if needed

  // If all validations pass, submit the form
  return true;
}
