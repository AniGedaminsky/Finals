const validateEmail = (email) => {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const result = document.getElementById('result');
  const email = document.getElementById('email').value;
  result.textContent = '';

  if (validateEmail(email)) {
      result.textContent = email + ' is valid.';
      result.style.color = 'green';
  } else {
      result.textContent = email + ' is invalid.';
      result.style.color = 'red';
  }
};

document.getElementById('email').addEventListener('input', validate);

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  // Add validation or authentication logic here if needed
  window.location.href = 'index.html'; // Redirect to Main page
});