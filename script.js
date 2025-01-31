function askAI() {
    let userInput = document.getElementById("user-input").value;
    let responseElement = document.getElementById("ai-response");

    if (userInput.trim() === "") {
        responseElement.innerText = "Please enter a question!";
        return;
    }

    responseElement.innerText = "AI is thinking..."; // Placeholder response
    
    // Simulate AI response (you can replace this with actual AI logic later)
    setTimeout(() => {
        responseElement.innerText = "This is a sample AI response!";
    }, 1000);
}
