const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#signup-name").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;

  if (name && email && password) {

    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Please check your email and make sure your password is between 8 and 32 characters");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
