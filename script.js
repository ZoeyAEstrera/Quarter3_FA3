function generateStory() {
    let num1 = Math.ceil(Math.random() * 20); // Physics score
    let num2 = Math.ceil(Math.random() * 20); // Biology score
    let num3 = Math.ceil(Math.random() * 20); // Chemistry score

    // Display scores in HTML
    document.getElementById("first").innerHTML = num1; 
    document.getElementById("second").innerHTML = num2;
    document.getElementById("third").innerHTML = num3; 

    let biggest = Math.max(num1, num2, num3);
    let resultText = "";

    if (biggest === num1 && biggest === num2) {
        resultText = `The highest number of passers is from the subjects: Physics, Biology (${biggest})`;
    } else if (biggest === num1 && biggest === num3) {
        resultText = `The highest number of passers is from the subjects: Physics, Chemistry (${biggest})`;
    } else if (biggest === num2 && biggest === num3) {
        resultText = `The highest number of passers is from the subjects: Biology, Chemistry (${biggest})`;
    } else if (biggest === num1) {
        resultText = `The highest number of passers is from the subject Physics (${biggest})`;
    } else if (biggest === num2) {
        resultText = `The highest number of passers is from the subject Biology (${biggest})`;
    } else {
        resultText = `The highest number of passers is from the subject Chemistry (${biggest})`;
    }

    document.getElementById("scores").innerHTML = resultText;

    // Determine first letter of highest scorer
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = alphabet[num1 - 1] || "Z"; // If num1 > 26, default to "Z"

    document.getElementById("letter").innerHTML = 
        `It showed that the highest scorer's name starts with the letter ${letter}`;

    // Calculate estimated study time
    let totalTime = num2 * num3;
    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

    document.getElementById("time").innerHTML = 
        `Ethan found that the top scorer studied for ${totalTime} minutes (~${hours} hours and ${minutes} minutes).`;
}

// Call the function when the page loads
generateStory();
