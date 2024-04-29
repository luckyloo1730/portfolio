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
function isLaptopOrComputer() {
    var laptopScreenWidths = [1280, 1366, 1440, 1600, 1920];
    var screenWidth = window.screen.width;
    if (laptopScreenWidths.includes(screenWidth)) {
      return true;
    } else {
      return false;
    }
  }
  function displayPopupMessage() {
    var message = "To view this website, please use a laptop or computer.";
    alert(message);
  }
  
  if (!isLaptopOrComputer()) {
    displayPopupMessage();
  }
function isMobileDevice() {
    var mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return mobileDeviceRegex.test(navigator.userAgent);
  }
    function redirectMobileUsers() {
    var redirectUrl = "https://google.com";
      window.location.href = redirectUrl;
  }
  if (isMobileDevice()) {
    redirectMobileUsers();
  }
