const commentFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector("#comment-text").value;
console.log(text);
const blog_id = document.querySelector("#comment-blog_id").value;

  if (text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ text, blog_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert(response.statusText);
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
