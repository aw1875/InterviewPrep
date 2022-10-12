const API_URI = "https://wolfyy.me/api/v1/testColors";

window.addEventListener("DOMContentLoaded", async () => {
    const data = await fetch(API_URI).then((res) => res.json());
    const chart = document.querySelector(".chart");

    // Create and Append content
    data.forEach((i) => {
        // Generate random percentage
        const percentage = Math.floor(Math.random() * 101);

        const row = document.createElement("div");
        row.classList.add("row");

        // Create Title
        const title = document.createElement("p");
        title.textContent = i.title;

        // Create Percent tag
        const percent = document.createElement("p");
        percent.textContent = `${percentage}%`;

        // Create Top
        const top = document.createElement("div");
        top.classList.add("top");
        top.append(title);
        top.append(percent);

        // Create Bar and Inner bar
        const bar = document.createElement("div");
        bar.classList.add("bar");

        const innerBar = document.createElement("div");
        innerBar.classList.add("innerBar");
        innerBar.style.width = "0";
        innerBar.style.transition = "0.5s linear width";
        setTimeout(() => {
            innerBar.style.width = `${percentage}%`;
        }, 10);
        innerBar.style.background = i.hex;

        bar.append(innerBar);

        // Append content to row
        row.append(top);
        row.append(bar);

        // Append row to chart
        chart.append(row);
    });
});
