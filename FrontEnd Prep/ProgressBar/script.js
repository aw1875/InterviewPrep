let percentage = 0;
let timeInterval = 1000;
let timerInterval;

// Start Timer
const startTimer = () => {
    percentage = 0;
    timerInterval = setInterval(() => {
        if (percentage <= 100) {
            updateLabel();
            updateProgress();
            percentage++;
        } else {
            clearInterval(timerInterval);

            // Change Start Button
            document.getElementById("start_button").innerText = "Restart";

            setTimeout(() => alert("Done"), 100);
        }
    }, timeInterval / 100);
};

// Update ProgressBar Label
const updateLabel = () => {
    const label = document.getElementById("pb_label");
    label.innerText = `${percentage}%`; 
};

// Update ProgressBar inner width
const updateProgress = () => {
    const progress_inner = document.querySelector('.pb_inner');
    progress_inner.style.width = `${percentage}%`;
};

// Set Time
const setTime = (time) => {
    timeInterval = time;
    document.getElementById("timeInterval").innerText = `Current Time: ${time / 1000}s`;
}
