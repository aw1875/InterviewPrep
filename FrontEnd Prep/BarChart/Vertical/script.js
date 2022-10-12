const API_URI = "https://wolfyy.me/api/v1/testColors";

window.addEventListener("DOMContentLoaded", async () => {
    const data = await fetch(API_URI).then((res) => res.json());
    const chart = document.querySelector(".chart");

    const innerChart = document.createElement("div");
    innerChart.classList.add("innerChart");

    data.forEach((i) => {
        // Generate random percentage
        const percentage = Math.floor(Math.random() * 101);

        const col = document.createElement("div");
        col.classList.add("col");

        // Create Percent tag
        const percent = document.createElement("p");
        percent.textContent = `${percentage}%`;

        // Create Bar
        const bar = document.createElement("div");
        bar.classList.add("bar");

        const innerBar = document.createElement("div");
        innerBar.classList.add("innerBar");
        innerBar.style.height = "0";
        innerBar.style.transition = "0.5s linear height";
        setTimeout(() => {
            innerBar.style.height = `${percentage}%`;
        }, 10);
        innerBar.style.background = i.hex;

        bar.append(innerBar);

        // Create Title
        const title = document.createElement("p");
        title.textContent = i.title;

        // Append content to col
        col.append(percent);
        col.append(bar);
        col.append(title);

        // Append row to chart
        innerChart.append(col);
    });

    chart.append(innerChart);
    // const wrapperDiv = document.querySelector(".chart");

    // const yAxis = document.createElement("div");
    // yAxis.classList.add("yAxis");

    // for (let i = 100; i >= 0; i = i - 10) {
    //     const p = document.createElement("p");
    //     p.textContent = i;
    //     yAxis.append(p);
    // }

    // wrapperDiv.append(yAxis);

    // // Add content
    // data.forEach((i) => {
    //     const col = document.createElement("div");
    //     col.classList.add("col");

    //     const bar = document.createElement("div");
    //     bar.classList.add("bar");
    //     bar.style.height = `${i.percent}%`;
    //     bar.textContent = `${i.percent}%`;

    //     const title = document.createElement("p");
    //     title.textContent = i.title

    //     // Append content
    //     col.append(bar);
    //     col.append(title);

    //     wrapperDiv.append(col);
    // });
});
