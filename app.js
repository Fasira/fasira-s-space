
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // ---typing---
        var typingEffect = new Typed(".typedText",{
            strings : ["Road to UX/UI Designer", "Road to UX/UI Designer"],
            loop : true,
            typeSpeed : 150, 
            backSpeed : 120,
            backDelay : 1000
         })

        // -- SCROLL REVEAL ANIMATION -- 
        const sr = ScrollReveal({
                origin: 'top',
                distance: '80px',
                duration: 2000,
                reset: true     
        })

        /* -- HEADER -- */
        sr.reveal('.header',{})
        sr.reveal('.header-text',{delay: 100})
        sr.reveal('.header-name',{delay: 200})

        /* -- PROJECT BOX -- */
        sr.reveal('.color-container',{interval: 200})
    
        /* -- HEADINGS -- */
        sr.reveal('.ab',{})
        sr.reveal('.all-work h1',{})

        /* -- ABOUT INFO & Contact -- */
  const srLeft = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-1 p',{delay: 100})
  srLeft.reveal('.contact-left',{delay: 100})
  
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.tabs-container',{delay: 100})
  srRight.reveal('.tab-titles',{delay: 100})

  document.addEventListener('DOMContentLoaded', function() {
    // Get all color containers
    const colorContainers = document.querySelectorAll('.color-container');

    colorContainers.forEach(container => {
        const scrollContainer = container.querySelector('.scroll');
        const images = container.querySelectorAll('.project-img');
        const prevButton = container.querySelector('.prev');
        const nextButton = container.querySelector('.next');
        let index = 0;

        function showImage(index) {
            const offset = -index * images[0].clientWidth;
            scrollContainer.style.transform = `translateX(${offset}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (index > 0) {
                index--;
                showImage(index);
            }
        });

        nextButton.addEventListener('click', () => {
            if (index < images.length - 1) {
                index++;
                showImage(index);
            }
        });
    });
});
