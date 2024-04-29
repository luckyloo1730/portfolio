const currentDate = new Date();
const date = new Date();
console.log(date);
let time = document.querySelector(".time")
function updateTime() {
    const currentDate = new Date();
    time.innerHTML = "📅 " + currentDate.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000)
let changeTheme = document.querySelector(".theme2")
changeTheme.addEventListener("click", function()
{
    document.body.classList.toggle("light")
    changeTheme.innerHTML = "☀ Change Theme"
    document.querySelectorAll(".title, .time, .menu").forEach(element => {
        element.classList.toggle("light")
    })
})
function isMobileDevice() {
    var mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileDeviceRegex.test(navigator.userAgent);
  }
  
  function displayMobileMessage() {
    var message = "Please use a laptop to access this website.";
    alert(message);
    var redirectUrl = "https://smilenodes.xyz";
    window.location.href = redirectUrl;
  }
  
  if (isMobileDevice()) {
    displayMobileMessage();
  }
