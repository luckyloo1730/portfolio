anime({
    targets: ".animated",
    color: [
        {value: "#f59e42"},
        {value: "#f59342"},
        {value: "#f58442"},
        {value: "#f59e42"},
        {value: "#f58442"},
        {value: "#f59e42"},
    ],
    duration: 4000,
    loop: true,
    easing: "linear"
})

anime({
    targets: ".ua",
    color: [
        { value: "#0057B7" }, // Ukrainian blue
        { value: "#FFD700" }, // Ukrainian yellow
        { value: "#0057B7" },
        { value: "#FFD700" },
        { value: "#0057B7" },
        { value: "#FFD700" }
      ],
      duration: 8000,
      easing: "easeInOutSine",
      loop: true
});

anime({
    targets: ".js",
    color: [
        {value: "#f59e42"},
        {value: "#f59342"},
        {value: "#f58442"},
        {value: "#f59e42"},
        {value: "#f58442"},
        {value: "#f59e42"},
    ],
    duration: 4000,
    loop: true,
    easing: "linear"
})

anime({
    targets: ".dev",
    color: [
        {value: "#03fc66"},
        {value: "#03fc52"},
        {value: "#03fc28"},
        {value: "#f59e42"},
        {value: "#a9fc03"},
        {value: "#03fc66"},
    ],
    duration: 4000,
    loop: true,
    easing: "linear"
})

anime({
    targets: ".contact",
    color: [
        {value: "#0091ff"},
        {value: "#00aeff"},
        {value: "#00d5ff"},
        {value: "#0091ff"},
    ],
    duration: 4000,
    loop: true,
    easing: "linear"
})

const currentDate = new Date();
const date = new Date();
console.log(date);
let time = document.querySelector(".date")
function updateTime() {
    const currentDate = new Date();
    time.innerHTML = "📅 " + currentDate.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000)