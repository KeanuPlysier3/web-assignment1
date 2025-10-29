const $dropdown = document.querySelector(".dropdown");
const $dropBtn = document.querySelector(".dropbtn");
const $dropContent = document.querySelector(".dropdown-content");

const $projects = document.querySelectorAll(".project");


const init = () => {
    $dropBtn.addEventListener("click", handleDropdown);
    animation();

}


const handleDropdown = () => {
    $dropContent.classList.toggle("dropdown-content-toggle");
    $dropBtn.classList.toggle("dropbtn-toggle");

    console.log("clicked");
}

const animation = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const $title = new SplitText(".header_title", { type: "chars" });

    gsap.from($title.chars, {
        scrollTrigger: {
            trigger: ".header_title",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        stagger: 0.02,
        duration: 0.6,
        ease: "power2.out"
    });


    $projects.forEach(project => {

        gsap.from(project, {
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: project,
                start: "top center",
                end: "bottom 50%",
            },
            stagger: 0.02,
            duration: 2,
            ease: "power2.out"
        });

    });

}

init();