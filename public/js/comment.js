const commentFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector("#comment-text").value;
console.log(text);

  if (text) {
    const response = await fetch("/api/comments/create", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert(response.statusText);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
