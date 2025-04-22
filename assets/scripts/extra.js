/*===== Screen Loder  =====*/
function screenLoad(){
    $("#pre_loader").hide();
}


/*===== COLLAPSE MENU  =====*/
$(document).ready(function () {

    var toggle = document.getElementById('toggle');

    toggle.addEventListener('click', () => {
        $('#sidebar').toggleClass("close");
    })
})

/*===== MAIN MENU LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.menu_bar_item')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

/*===== MOBILE MENU LINK ACTIVE  =====*/
const mLinkColor = document.querySelectorAll('.nav_item')

function colorLink() {
    mLinkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
mLinkColor.forEach(l => l.addEventListener('click', colorLink))


//PORTFOLIO effect
$(document).ready(function () {

    var containerEl = document.querySelector('.gallery');

    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)'
        },
        load: {
            filter: 'none'
        }

    });

    containerEl.classList.add('mixitup-ready');

    mixer.show()
        .then(function() {

            mixer.configure({
                animation: {
                    effects: 'fade scale'
                }
            });
        }
    );
})

// SCROLL AUTO SELECT MENU 
$(document).ready(function () {

    var el = $('.vlt-fullpage-slider'),
        progress_bar = el.find('.vlt-fullpage-slider-progress-bar'),
        numbers = el.find('.vlt-fullpage-slider-numbers'),
        loop_top = el.data('loop-top') ? true : false,
        loop_bottom = el.data('loop-bottom') ? true : false,
        speed = el.data('speed') || 800,
        anchors = [];

    VLTJS.body.css('overflow', 'hidden');
    VLTJS.html.css('overflow', 'hidden');

    

    // Sidebar  Menu Auto Select for scrolling
    el.find('.pp-scrollable').on('scroll', function () {
        var section = el.find('.vlt-section.active').attr('id');

        if( section == 'Home' ){
            // Remove active class from all menu items
            $('.menu_bar_item').removeClass('active');
            $('.menu_home').addClass('active');
        }

        if( section == 'Services' ){
            $('.menu_bar_item').removeClass('active');
            $('.menu_services').addClass('active');
        }

        else if( section == 'Experience' ){
            $('.menu_bar_item').removeClass('active');
            $('.menu_experience').addClass('active');
        }

        else if( section == 'Skills' ){
            $('.menu_bar_item').removeClass('active');
            $('.menu_skills').addClass('active');
        }

        else if( section == 'Portfolio' ){
            $('.menu_bar_item').removeClass('active');
            $('.menu_portfolio').addClass('active');
        }

        else if( section == 'Testimonials' ){
            $('.menu_bar_item').removeClass('active');
            $('.menu_testimonials').addClass('active');
        }

        else if( section == 'Contact' ){
            $('.menu_bar_item').removeClass('active');
            $('.menu_contact').addClass('active');
        }
    })

    // Click event handler for menu items
    $('.menu_bar_item').on('click', function () {
        // Remove active class from all menu items
        $('.menu_bar_item').removeClass('active');
        // Add active class to the clicked menu item
        $(this).addClass('active');
    });

    // Mobile Menu Auto Select for scrolling
    el.find('.pp-scrollable').on('scroll', function () {
        var section = el.find('.vlt-section.active').attr('id');

        console.log(section);

        if( section == 'Home' ){
            $('.nav_item').removeClass('active');
            $('.mobile_menu_home').addClass('active');
        }

        if( section == 'Services' ){
            $('.nav_item').removeClass('active');
            $('.mobile_menu_services').addClass('active');
        }

        else if( section == 'Experience' ){
            $('.nav_item').removeClass('active');
            $('.mobile_menu_experience').addClass('active');
        }

        else if( section == 'Skills' ){
            $('.nav_item').removeClass('active');
            $('.mobile_menu_skills').addClass('active');
        }

        else if( section == 'Portfolio' ){
            $('.nav_item').removeClass('active');
            $('.mobile_menu_portfolio').addClass('active');
        }

        else if( section == 'Testimonials' ){
            $('.nav_item').removeClass('active');
            $('.mobile_menu_testimonials').addClass('active');
        }

        else if( section == 'Contact' ){
            $('.nav_item').removeClass('active');
            $('.mobile_menu_contact').addClass('active');
        }
    })
})

// unveil function
// $(document).ready(function() {
//     $('img').unveil(100);
// });

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "100px", // preload before it appears
    });

    images.forEach(img => observer.observe(img));
}




