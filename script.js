document.getElementById('humanizeBtn').addEventListener('click', function() {
    let aiText = document.getElementById('aiInput').value;
    
    if (!aiText.trim()) {
        alert("Please paste some text first!");
        return;
    }

    // Comprehensive list of AI words and casual human replacements
    let humanizedText = aiText
        // Transition words
        .replace(/Furthermore,/gi, "Also,")
        .replace(/Moreover,/gi, "Plus,")
        .replace(/In conclusion,/gi, "To wrap it up,")
        .replace(/Consequently,/gi, "So,")
        .replace(/Therefore,/gi, "Because of that,")
        
        // Overused AI verbs and phrases
        .replace(/delve into/gi, "look into")
        .replace(/testament to/gi, "proof of")
        .replace(/not only.*but also/gi, "both... and")
        .replace(/it is crucial to/gi, "we need to")
        .replace(/beacon of/gi, "example of")
        .replace(/tapestry of/gi, "mix of")
        .replace(/revolutionize/gi, "change")
        .replace(/foster/gi, "build")
        .replace(/utilize/gi, "use")
        .replace(/ underscore /gi, " highlight ")
        
        // Casual sentence adjustments
        .replace(/let's explore/gi, "let's look at")
        .replace(/delves deep/gi, "goes deep");

    document.getElementById('humanOutput').innerText = humanizedText;
});
