document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("messageForm");
  const userResponseDisplay = document.getElementById("userMessageDisplay");

  userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputEl = userForm.elements.text;
    const userText = String(inputEl.value || "").trim();
    if (!userText) return;

    // user bubble
    const userOuter = document.createElement("div");
    userOuter.classList.add("flex", "justify-end", "mb-2");

    const userLi = document.createElement("li");
    userLi.classList.add(
      "max-w-[80%]",
      "rounded-2xl",
      "rounded-tr-sm",
      "bg-indigo-600/90",
      "text-white",
      "px-4",
      "py-3",
      "m-[5px]",
      "shadow",
      "list-none",
      "whitespace-pre-wrap"
    );
    userLi.textContent = userText;
    userOuter.appendChild(userLi);
    userResponseDisplay.appendChild(userOuter);

    // clear input
    inputEl.value = "";

    // fetch AI reply
    const res = await fetch("/post-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userText })
    });
    const data = await res.json();

    // normalize to HTML
    let html = "";
    if (data.html) {
      html = data.html; // server already returns HTML
    } else if (data.aiResponse) {
      html = marked.parse(data.aiResponse); // markdown to HTML
    } else if (data.text) {
      html = marked.parse(data.text); // markdown to HTML
    } else {
      html = "<p>(no reply)</p>";
    }
    const safe = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

    // AI bubble
    const aiOuter = document.createElement("div");
    aiOuter.classList.add("flex", "justify-start", "mb-4");

    const aiLi = document.createElement("li");
    aiLi.classList.add(
      "max-w-[80%]",
      "rounded-2xl",
      "rounded-tl-sm",
      "bg-white/10",
      "px-4",
      "py-3",
      "m-[5px]",
      "shadow",
      "list-none",
      "prose",
      "prose-invert",
      "whitespace-pre-wrap"
    );
    aiLi.innerHTML = safe;

    aiOuter.appendChild(aiLi);
    userResponseDisplay.appendChild(aiOuter);
  });
});
