async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="post-content"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch("/api/posts", {
    method: "post",
    body: JSON.stringify({
      title,
      content,
      post_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
