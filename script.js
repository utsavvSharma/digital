// navbar

/* =========================================
   MOBILE MENU
========================================= */

const dmToggle =
    document.getElementById("dmMobileToggle");

const dmMenu =
    document.getElementById("dmMobileMenu");

const dmClose =
    document.getElementById("dmMobileClose");

const dmOverlay =
    document.getElementById("dmOverlay");


function dmOpenMenu() {

    dmMenu.classList.add("show");

    dmOverlay.classList.add("show");

    dmToggle.classList.add("open");

    document.body.classList.add("dm-menu-open");

}


function dmCloseMenu() {

    dmMenu.classList.remove("show");

    dmOverlay.classList.remove("show");

    dmToggle.classList.remove("open");

    document.body.classList.remove("dm-menu-open");

}


dmToggle.addEventListener(
    "click",
    dmOpenMenu
);


dmClose.addEventListener(
    "click",
    dmCloseMenu
);


dmOverlay.addEventListener(
    "click",
    dmCloseMenu
);



/* =========================================
   MOBILE DROPDOWNS
========================================= */

const dmDropdownButtons =
    document.querySelectorAll(
        ".dm-mobile-dropdown-btn"
    );


dmDropdownButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        const parent =
            this.parentElement;

        const allDropdowns =
            document.querySelectorAll(
                ".dm-mobile-dropdown"
            );


        allDropdowns.forEach(function(item) {

            if (item !== parent) {

                item.classList.remove("open");

            }

        });


        parent.classList.toggle("open");

    });

});



/* =========================================
   MOBILE LINK CLOSE
========================================= */

const dmMobileLinks =
    document.querySelectorAll(
        ".dm-mobile-nav a:not(.dm-mobile-dropdown-btn)"
    );


dmMobileLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        dmCloseMenu();

    });

});


// hero section

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    const dmaRevealElements =
        document.querySelectorAll(".dma-scroll-reveal");

    const dmaObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("dma-show");

                    /* Animation only once */
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    dmaRevealElements.forEach((element) => {
        dmaObserver.observe(element);
    });



    /* =========================
       SMOOTH CTA SCROLL
    ========================= */

    const dmaAuditButtons =
        document.querySelectorAll('a[href="#dmaAuditForm"]');


    dmaAuditButtons.forEach((button) => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const form =
                document.querySelector("#dmaAuditForm");

            if (form) {

                form.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    });



    /* =========================
       FORM DEMO SUBMIT
    ========================= */

    const dmaForm =
        document.querySelector(".dma-form");


    if (dmaForm) {

        dmaForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const btn =
                dmaForm.querySelector(".dma-submit-btn");

            const originalText =
                btn.innerHTML;


            btn.innerHTML =
                "<span>Request Submitted ✓</span>";

            btn.style.pointerEvents = "none";


            setTimeout(() => {

                btn.innerHTML = originalText;

                btn.style.pointerEvents = "auto";

            }, 3000);

        });

    }

});


// servie


document.addEventListener("DOMContentLoaded", function () {

    const srvxItems =
        document.querySelectorAll(".srvx-reveal");


    const srvxObserver =
        new IntersectionObserver(

            function(entries, observer) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("srvx-show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    srvxItems.forEach(function(item, index) {

        if (
            item.classList.contains(
                "srvx-card"
            )
        ) {

            item.style.transitionDelay =
                Math.min(index * 70, 300)
                + "ms";
        }


        srvxObserver.observe(item);

    });

});

// about


/* ==================================
   XNTROVA ABOUT SCROLL ANIMATION
================================== */

document.addEventListener("DOMContentLoaded", function () {

    const revealItems =
        document.querySelectorAll(
            ".xnt-reveal-left, .xnt-reveal-right"
        );


    const observer =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("xnt-show");


                        /* Run animation only once */

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.16,

                rootMargin:
                    "0px 0px -50px 0px"
            }

        );


    revealItems.forEach(item => {

        observer.observe(item);

    });

});



// why we choose 


document.addEventListener("DOMContentLoaded", function () {

    const revealItems = document.querySelectorAll(
        ".reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-active");

                    // animation only once
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealItems.forEach(item => {
        observer.observe(item);
    });

});



// process


document.addEventListener("DOMContentLoaded", function () {

    const revealItems =
        document.querySelectorAll(
            ".xprocess-reveal"
        );

    const processLine =
        document.querySelector(
            ".xprocess-line"
        );


    const observer =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15,
                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealItems.forEach(item => {
        observer.observe(item);
    });


    /* LINE ANIMATION */

    if (processLine) {

        const lineObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                processLine
                                    .classList
                                    .add("active");

                            }

                        }
                    );

                },

                {
                    threshold: 0.25
                }

            );


        lineObserver.observe(
            processLine
        );

    }

});


// testiminials


document.addEventListener("DOMContentLoaded", function () {

    const slider =
        document.querySelector(
            ".xnt-testimonial-slider"
        );

    const track =
        document.querySelector(
            ".xnt-testimonial-track"
        );

    const cards =
        document.querySelectorAll(
            ".xnt-testimonial-card"
        );

    const prevBtn =
        document.querySelector(
            ".xnt-prev"
        );

    const nextBtn =
        document.querySelector(
            ".xnt-next"
        );


    let currentIndex = 0;


    /* =================================
       HOW MANY CARDS ARE VISIBLE
    ================================= */

    function getVisibleCards() {

        return window.innerWidth <= 650
            ? 1
            : 2;

    }


    /* =================================
       MOVE SLIDER
    ================================= */

    function updateSlider() {

        const visibleCards =
            getVisibleCards();

        const maxIndex =
            cards.length - visibleCards;


        if (currentIndex > maxIndex) {

            currentIndex = maxIndex;

        }


        if (currentIndex < 0) {

            currentIndex = 0;

        }


        if (window.innerWidth <= 650) {

            track.style.transform =
                `translateX(-${currentIndex * 100}%)`;

        } else {

            const cardWidth =
                cards[0].offsetWidth;

            const gap = 24;

            const move =
                currentIndex *
                (cardWidth + gap);

            track.style.transform =
                `translateX(-${move}px)`;

        }

    }


    /* =================================
       NEXT
    ================================= */

    nextBtn.addEventListener(
        "click",
        function () {

            const visibleCards =
                getVisibleCards();

            const maxIndex =
                cards.length - visibleCards;


            if (currentIndex >= maxIndex) {

                currentIndex = 0;

            } else {

                currentIndex++;

            }


            updateSlider();

        }
    );


    /* =================================
       PREVIOUS
    ================================= */

    prevBtn.addEventListener(
        "click",
        function () {

            const visibleCards =
                getVisibleCards();

            const maxIndex =
                cards.length - visibleCards;


            if (currentIndex <= 0) {

                currentIndex =
                    maxIndex;

            } else {

                currentIndex--;

            }


            updateSlider();

        }
    );


    /* =================================
       MOBILE SWIPE
    ================================= */

    let startX = 0;


    slider.addEventListener(
        "touchstart",
        function (e) {

            startX =
                e.touches[0]
                .clientX;

        },
        {
            passive: true
        }
    );


    slider.addEventListener(
        "touchend",
        function (e) {

            const endX =
                e.changedTouches[0]
                .clientX;

            const distance =
                startX - endX;


            if (
                Math.abs(distance) < 45
            ) {
                return;
            }


            if (distance > 0) {

                nextBtn.click();

            } else {

                prevBtn.click();

            }

        },
        {
            passive: true
        }
    );


    /* =================================
       RESPONSIVE RESIZE
    ================================= */

    window.addEventListener(
        "resize",
        updateSlider
    );


    /* =================================
       SCROLL REVEAL
    ================================= */

    const revealElements =
        document.querySelectorAll(
            ".xnt-testimonial-reveal"
        );


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "xnt-show"
                                );

                        }

                    }
                );

            },

            {
                threshold: 0.15,
                rootMargin:
                    "0px 0px -50px 0px"
            }

        );


    revealElements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );


    /* START POSITION */

    updateSlider();

});

// call to action
document.addEventListener("DOMContentLoaded", function () {

    const leadReveal =
        document.querySelectorAll(
            ".xlead-reveal-left, .xlead-reveal-right"
        );


    const leadObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("xlead-show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15,
                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    leadReveal.forEach(item => {

        leadObserver.observe(item);

    });

});


// footer

document.addEventListener("DOMContentLoaded", function () {

    const footerRevealItems =
        document.querySelectorAll(
            ".xfooter-reveal"
        );


    const footerObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("xfooter-show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -30px 0px"
            }

        );


    footerRevealItems.forEach(item => {
        footerObserver.observe(item);
    });

});
