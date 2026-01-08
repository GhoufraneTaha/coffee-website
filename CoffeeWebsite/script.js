(function () {
  emailjs.init("Us0jcU3vugTHdToDB"); // Your public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_a430ze7",        // Your Service ID
    "__ejs-test-mail-service__", // Your Template ID
    this
  ).then(() => {
    document.getElementById("status").innerText = "Message sent successfully ☕";
    this.reset();
  }, () => {
    document.getElementById("status").innerText = "Error sending message ❌";
  });
});
