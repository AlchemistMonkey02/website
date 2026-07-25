fetch("http://localhost:3000/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "AI Test User",
    email: "ai.test@venturesnodes.com",
    phone: "1234567890",
    subject: "Automated System Test",
    message: "This is a test message to verify the Sanity CMS integration."
  })
})
.then(res => res.json())
.then(data => console.log("Response:", data))
.catch(err => console.error("Error:", err));
