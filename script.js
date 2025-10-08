const swiper = new Swiper('.companies-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
    },
    slidesPerView: 5,
    spaceBetween: 30,
    // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },

    // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});


const swiper2 = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});


const cards = document.querySelectorAll('.feature-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -20; // Tilt up/down
        const rotateY = ((x / rect.width) - 0.5) * 20;  // Tilt left/right

        card.style.setProperty('--rotateX', `${rotateX}deg`);
        card.style.setProperty('--rotateY', `${rotateY}deg`);
        card.classList.add('hover-effect');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-effect');
        card.style.setProperty('--rotateX', `0deg`);
        card.style.setProperty('--rotateY', `0deg`);
    });
});

// -------darktheme
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})


// move

document.addEventListener("DOMContentLoaded", function () {
    const bannerSection = document.querySelector(".banner-section");
    const shape2 = document.querySelector(".shape-2");

    bannerSection.addEventListener("mousemove", function (e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 50; // adjust X movement
        const y = (e.clientY / window.innerHeight - 0.5) * 50; // adjust Y movement

        shape2.style.transform = `translate(${x * 1.5}px, ${y * 0.5}px)`;
    });

    bannerSection.addEventListener("mouseleave", function () {
        shape2.style.transform = `translate(0px, 0px)`;
    });
});
// -----counter

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.step-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const hasPlus = counter.getAttribute('data-plus') === "true";
        const hasPercent = counter.getAttribute('data-percent') === "true";

        let count = 0;

        const updateCount = () => {
            const increment = target / speed;

            if (count < target) {
                count += increment;
                const displayValue = Math.ceil(count);

                counter.innerText =
                    hasPercent ? `${displayValue}%` :
                        hasPlus ? `${displayValue}+` :
                            `${displayValue}`;

                requestAnimationFrame(updateCount);
            } else {
                // Final value correction
                counter.innerText =
                    hasPercent ? `${target}%` :
                        hasPlus ? `${target}+` :
                            `${target}`;
            }
        };

        updateCount();
    });
})



// const split = new SplitText("#headline", { type: "lines,words" });

// gsap.from(split.words, {
//     duration: 1,
//     opacity: 0,
//     y: 50,
//     stagger: 0.05,
//     ease: "power2.out"
// });