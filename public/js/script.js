const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

const init = () => {
    dropBtn.addEventListener("click", handleDropdown);

}


const handleDropdown = () => {
    dropContent.classList.toggle("dropdown-content-toggle");
    dropBtn.classList.toggle("dropbtn-toggle");

    console.log("clicked");
}

init();