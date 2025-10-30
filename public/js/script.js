const $dropdown = document.querySelector(".dropdown");
const $dropBtn = document.querySelector(".dropbtn");
const $dropContent = document.querySelector(".dropdown-content");


const init = () => {
    $dropBtn.addEventListener("click", handleDropdown);
    document.fonts.ready.then(() => { // wait untill fonts are loaded
        animation();
    });

}


const handleDropdown = () => {
    $dropContent.classList.toggle("dropdown-content-toggle");
    $dropBtn.classList.toggle("dropbtn-toggle");

    console.log("clicked");
}

const animation = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);


    //adding animation to titles
    const $text = document.querySelectorAll(".header_title, .contact_title, .contact_text");
    $text.forEach(text => {
        split = new SplitText(text, { type: "chars" });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 20,
            stagger: 0.02,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    //animating the contact types (splittext does not work with spans)
    const $contact = document.querySelectorAll(".contact_item");
    $contact.forEach(contact => {
        gsap.from(contact, {
            x: -30,
            opacity: 0,
            scrollTrigger: {
                trigger: contact,
                start: "top 95%",
                toggleActions: "play none none reverse"
            },
            duration: 0.2

        })
    })


    //adding animation to project cards
    const $projects = document.querySelectorAll(".project");
    $projects.forEach(project => {

        gsap.from(project, {
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: project,
                start: "top center",
                end: "bottom 50%",
                toggleActions: "play none none reverse"
            },
            stagger: 0.02,
            duration: 0.5,
            ease: "power2.out"
        });

    });

}

init();