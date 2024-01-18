const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#Blog-title").value;
  const description = document.querySelector("#blog-desc").value;
  const body = document.querySelector("#blog-body").value;

console.log(title);
console.log(description);
console.log(body);

  if (title && description && body) {
    const response = await fetch('/api/blogs/create', {
      method: "POST",
      body: JSON.stringify({ title, description, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create blog post");
    }
  }
};

const delButtonHandler = async (event) => {

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete blog post");
    }
  }
};

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newBlogHandler);

document
  .querySelector(".blog-list")
  .addEventListener("click", delButtonHandler);
