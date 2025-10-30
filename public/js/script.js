// Grab elements
const $dropdown = document.querySelector(".dropdown");
const $dropBtn = document.querySelector(".dropbtn");
const $dropContent = document.querySelector(".dropdown-content");

const init = () => {
    // Only add dropdown listener if the elements exist
    if ($dropBtn && $dropContent) {
        $dropBtn.addEventListener("click", handleDropdown);
    }

    // Wait until fonts are loaded before animating text
    document.fonts.ready.then(() => {
        animation();
    });
};

const handleDropdown = () => {
    if (!$dropBtn || !$dropContent) return;

    $dropContent.classList.toggle("dropdown-content-toggle");
    $dropBtn.classList.toggle("dropbtn-toggle");
    console.log("clicked");
};

const animation = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Animate titles
    const $text = document.querySelectorAll(".skills_title, .header_title, .contact_title, .contact_text, .about_title");
    if ($text.length) {
        $text.forEach(text => {
            const split = new SplitText(text, { type: "chars" });
            gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 20,
                stagger: 0.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }

    // Animate contact items
    const $contact = document.querySelectorAll(".contact_item");
    if ($contact.length) {
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
            });
        });
    }

    // Animate project cards
    const $projects = document.querySelectorAll(".project");
    if ($projects.length) {
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


    const $about = document.querySelectorAll(".about_item");
    if ($about.length) {
        $about.forEach(item => {
            gsap.from(item, {
                opacity: 0,
                y: 30,
                scrollTrigger: {
                    trigger: item,
                    start: "top 35%",
                    end: "bottom 40%",
                    toggleActions: "play none none reverse"
                },
                stagger: 0.02,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    const $skills = document.querySelectorAll(".skills_item");
    if ($skills.length) {
        $skills.forEach(item => {
            gsap.from(item, {
                opacity: 0,
                y: 30,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 40%",
                    toggleActions: "play none none reverse"
                },
                stagger: 0.02,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

};

init();