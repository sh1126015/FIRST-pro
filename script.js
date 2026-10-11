document.getElementById('humanizeBtn').addEventListener('click', function() {
    // Get the text from the input box
    let aiText = document.getElementById('aiInput').value;
    
    if (!aiText.trim()) {
        alert("Please paste some text first!");
        return;
    }

    // A simple algorithmic placeholder to humanize the text
    // (Replaces common AI footprints with casual alternatives)
    let humanizedText = aiText
        .replace(/Furthermore,/gi, "Also,")
        .replace(/In conclusion,/gi, "To wrap it up,")
        .replace(/Testament to/gi, "Proof of")
        .replace(/Delve into/gi, "Look into")
        .replace(/Not only... but also/gi, "Both... and");

    // Output the changed text to the screen
    document.getElementById('humanOutput').innerText = humanizedText;
});
