const businessEmail = "YOUR_EMAIL_HERE";

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav nav").classList.toggle("mobile");
});

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav nav").classList.remove("mobile");
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {

  event.preventDefault();

  const data = new FormData(event.target);

  if (businessEmail === "YOUR_EMAIL_HERE") {
    alert(
      "Please replace YOUR_EMAIL_HERE in script.js with your Petit Mémento business email."
    );
    return;
  }

  const subject = encodeURIComponent(
    "Petit Mémento Event Inquiry"
  );

  const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone") || "N/A"}

Message:
${data.get("message")}`
  );

  window.location.href =
    `mailto:${businessEmail}?subject=${subject}&body=${body}`;

});
