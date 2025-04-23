$(document).ready(function () {
  home();
  service();
  education();
  professionalExperience();
  trainingExperience();
  aboutMe();
  portfolio();
  testimonial();
  workWith();
  contactSection();
  socialMedia();
});

/**
 * Home Section Data
 */
function home() {
  $.getJSON("data/home.json", function async(data) {
    document.getElementById("home_user_name").innerHTML = data[0].data.name;
    document.getElementById("home_user_profession").innerHTML =
      data[0].data.profession;
    document.getElementById("Home").style.backgroundImage =
      "url('" + data[0].data.background_image + "')";
    document
      .getElementById("resume_one")
      .setAttribute("href", data[0].data.cv_link);
    document
      .getElementById("resume_two")
      .setAttribute("href", data[0].data.cv_link);
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * Home Section Counter Data load
 */
$(window).on("load", function () {
  // Counter Animation
  $.fn.animateNumber = function (options) {
    var settings = $.extend(
      {
        number: 0,
        duration: 5000,
      },
      options
    );

    return this.each(function () {
      var element = $(this);
      $({ counter: 0 }).animate(
        { counter: settings.number },
        {
          duration: settings.duration,
          easing: "swing",
          step: function () {
            element.text(Math.ceil(this.counter));
          },
        }
      );
    });
  };

  // Load data from JSON file
  $.getJSON("data/home.json", function (data) {
    // Once data is loaded, set the targetNumber and start the animation
    var completedProject = data[0].data.complete_projects;
    var satisfiedUser = data[0].data.satisfied_customer;

    // Animate the number counter for completed projects
    $("#home_completed_project").animateNumber({
      number: completedProject,
      duration: 3000, // Animation duration in milliseconds
    });

    $("#home_satisfied_user").animateNumber({
      number: satisfiedUser,
      duration: 3000, // Animation duration in milliseconds
    });
  }).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
  });
});

/**
 * Service section data
 */
function service() {
  $.getJSON("data/home.json", function async(data) {
    document.getElementById("service_experience_year").innerHTML =
      data[1].service.year_of_experience;
    document
      .getElementById("service_vlt_counter_up")
      .setAttribute("data-ending-number", data[1].service.year_of_experience);
    document.getElementById("service_title").innerHTML =
      data[1].service.section_title;
    document.getElementById("service_title_color").innerHTML =
      data[1].service.section_title_spacial;

    for (let i = 0; i < data[1].service.service_item.length; i++) {
      $("#service_item").append(
        '<div class="col-md-6">\n' +
          "<!--Animated Block-->\n" +
          '<div class="vlt-animated-block" style="animation-delay:300ms; animation-duration:700ms;">\n' +
          "<!--Services-->\n" +
          '<div class="vlt-services">\n' +
          '<h5 class="vlt-services__title">\n' +
          data[1].service.service_item[i].name +
          "</h5>\n" +
          '<p class="vlt-services__text">\n' +
          data[1].service.service_item[i].service_description +
          "</p>\n" +
          "</div>\n" +
          "</div>\n" +
          '<div class="vlt-gap-40"></div>\n' +
          "</div>"
      );
    }
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * Education section data
 */
function education() {
  $.getJSON("data/home.json", function async(data) {
    for (let i = 0; i < data[2].education.length; i++) {
      $("#education_items").append(
        '<div class="resume-step">\n' +
          '<div class="resume-status">\n' +
          '<span class="resume-status-dot"></span>\n' +
          '<span class="resume-status-line"></span>\n' +
          "</div>\n" +
          '<div class="resume-text">\n' +
          '<p class="vlt-timeline-item__title">' +
          data[2].education[i].certification +
          "</p>\n" +
          '<span class="vlt-timeline-item__year">' +
          data[2].education[i].session +
          "</span>\n" +
          '<h5 class="vlt-timeline-item__text" style="font-weight: normal;color: #fff;">' +
          data[2].education[i].institute_name +
          "</h5>\n" +
          "</div>\n" +
          "</div>"
      );
    }
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * Professional Experience section data
 */

function professionalExperience() {
  $.getJSON("data/home.json", function async(data) {
    for (let i = 0; i < data[3].professional_experience.length; i++) {
      $("#professional_experience").append(
        '<div class="resume-step">\n' +
          '<div class="resume-status">\n' +
          '<span class="resume-status-dot"></span>\n' +
          '<span class="resume-status-line"></span>\n' +
          "</div>\n" +
          '<div class="resume-text">\n' +
          "<p>" +
          data[3].professional_experience[i].company_name +
          "</p>\n" +
          "<span>" +
          data[3].professional_experience[i].work_experience +
          "</span>\n" +
          "<h5>" +
          data[3].professional_experience[i].position +
          "</h5>\n" +
          "</div>\n" +
          "</div>"
      );
    }
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * Training Experience Data
 */
function trainingExperience() {
  $.getJSON("data/home.json", function async(data) {
    for (let i = 0; i < data[4].training_experience.length; i++) {
      $("#training_experience").append(
        '<div class="resume-step">\n' +
          ' <div class="resume-status">\n' +
          '   <span class="resume-status-dot"></span>\n' +
          '   <span class="resume-status-line"></span>\n' +
          " </div>\n" +
          ' <div class="resume-text">\n' +
          "   <p>" +
          data[4].training_experience[i].training_name +
          "</p>\n" +
          "   <span>" +
          data[4].training_experience[i].training_period +
          "</span>\n" +
          "   <h5>" +
          data[4].training_experience[i].training_institute +
          "</h5>\n" +
          " </div>\n" +
          "</div>"
      );
    }
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * About Me
 */
function aboutMe() {
  $.getJSON("data/home.json", function async(data) {
    document.getElementById("my_name").innerHTML = data[5].about_me.name;
    document.getElementById("about_me").innerHTML = data[5].about_me.my_self;
    document.getElementById("gender").innerHTML = data[5].about_me.gender;
    document.getElementById("mobile_number").innerHTML =
      data[5].about_me.mobile;
    document.getElementById("email").innerHTML = data[5].about_me.email;
    document.getElementById("address").innerHTML = data[5].about_me.address;
    document
      .getElementById("my_image")
      .setAttribute("data-src", data[5].about_me.image);
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * portfolio
 */
function portfolio() {
    $.getJSON("data/home.json", function async(data) {
        for (let i = 0; i < data[6].portfolio.portfolio_menu.length; i++) {
            $("#portfolio_menu").append(
                '<li class="control" data-filter="' +
                data[6].portfolio.portfolio_menu[i].data_filter +
                '">\n' +
                '<a href="#" class="mix_itup_menu" >' +
                data[6].portfolio.portfolio_menu[i].menu +
                "</a>\n" +
                "</li>\n" +
                "<li>/</li>"
            );
        }

        for (let i = 0; i < data[6].portfolio.portfolio_item.length; i++) {
            $("#portfolio_item").append(
                '<div class="portfolio_item col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mix ' +
                data[6].portfolio.portfolio_item[i].portfolio_type +
                '" data-ref="mixitup-target">\n' +
                '  <img class="images lazy" id="portfolio_image" src="assets/img/image-preloader.gif" data-src="' +
                data[6].portfolio.portfolio_item[i].portfolio_image +
                '" loading="lazy">\n' +
                '  <div class="stacks" style=""><div class="row position-relative m-0">' +
                loadStacks(data[6].portfolio.portfolio_item[i]) +
                "</div></div>\n" +
                '  <div class="portfolio_item_shadow">\n' +
                '        <a href="' +
                data[6].portfolio.portfolio_item[i].portfolio_link +
                '">\n' +
                "          <i class='bx bx-fullscreen icon'></i>\n" +
                "        </a>\n" +
                "  </div>\n" +
                "</div>"
            );
        }
        var mixer = mixitup("#portfolio_item");
        lazyLoadImages();
    }).fail(function () {
        console.log("Data Error");
    });
}



// Load stack item
function loadStacks(data) {
  var stacksHTML = "";
  for (let j = 0; j < data.stacks.length; j++) {
    stacksHTML += '<span class="stack_item">' + data.stacks[j].name + "</span>";
  }
  return stacksHTML;
}

/**
 * Testimonial
 */
function testimonial() {
  $.getJSON("data/home.json", function async(data) {
    for (let i = 0; i < data[7].testimonial.testimonial_item.length; i++) {
      $("#testimonial_item_append").append(
        "<!-- Start:Testimonial Item-->\n" +
          '<div class="vlt-testimonial-item" style="background: #0c5fc5 url(assets/img/root/cartographer.png) repeat;">\n' +
          '   <div class="vlt-testimonial-item__avatar">\n' +
          '       <img id="testimonial_image" src="' +
          data[7].testimonial.testimonial_item[i].image +
          '" alt="' +
          data[7].testimonial.testimonial_item[i].name +
          '">\n' +
          "   </div>\n" +
          '   <div class="vlt-testimonial-item__content">\n' +
          '       <p id="testimonial_content">' +
          data[7].testimonial.testimonial_item[i].content +
          "</p>\n" +
          '       <div class="vlt-testimonial-item__meta">\n' +
          '           <h6 id="testimonial_name">' +
          data[7].testimonial.testimonial_item[i].name +
          "</h6>\n" +
          '           <span id="testimonial_position">' +
          data[7].testimonial.testimonial_item[i].position +
          "</span>\n" +
          "       </div>\n" +
          "   </div>\n" +
          "</div>\n" +
          "<!-- End:Testimonial Item-->"
      );
    }

    var el = $(".vlt-testimonial-slider .swiper-container");
    el.each(function () {
      var $this = $(this);
      $this.find(".swiper-wrapper > *").wrap('<div class="swiper-slide">');
      new Swiper(this, {
        speed: 1000,
        spaceBetween: 30,
        grabCursor: true,
        effect: "coverflow",
        slidesPerView: 1,
        navigation: {
          nextEl: $(".vlt-testimonial-slider-controls .next"),
          prevEl: $(".vlt-testimonial-slider-controls .prev"),
        },
        pagination: {
          el: $(".vlt-testimonial-slider-controls .pagination"),
          clickable: false,
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return;
            '<span class="' +
              currentClass +
              '"></span>' +
              '<span class="sep">/</span>' +
              '<span class="' +
              totalClass +
              '"></span>';
          },
        },
      });
    });
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * Work With
 */
function workWith() {
  $.getJSON("data/home.json", function async(data) {
    for (let i = 0; i < data[7].testimonial.work_with.length; i++) {
      $("#work_with").append(
        "<div >\n" +
          "  <!--Animated Block-->\n" +
          '  <div class="vlt-animated-block" style="animation-delay:200ms; animation-duration:700ms;">\n' +
          "     <!--Partner Logo-->\n" +
          '     <div class="vlt-partner-logo" style="height:75px;">\n' +
          '         <img src="' +
          data[7].testimonial.work_with[i].image +
          '" alt="' +
          data[7].testimonial.work_with[i].name +
          '" style="height: auto;width: 100%;object-fit: cover;">\n' +
          "     </div>\n" +
          "  </div>\n" +
          '  <div class="vlt-gap-40--sm"></div>\n' +
          "</div>"
      );
    }
    // Work-with Slider
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * Contact Section
 */
function contactSection() {
  $.getJSON("data/home.json", function async(data) {
    document.getElementById("contact_email").innerHTML = data[8].contact.email;
    document
      .getElementById("contact_email")
      .setAttribute("href", "mailto:" + data[8].contact.email);

    document.getElementById("contact_number").innerHTML =
      data[8].contact.mobile_number;
    document
      .getElementById("contact_number")
      .setAttribute("href", "tel:" + data[8].contact.contact_number);

    document
      .getElementById("contact_location")
      .setAttribute("href", data[8].contact.location);
  }).fail(function () {
    console.log("Data Error");
  });
}

/**
 * social media
 */
function socialMedia() {
  $.getJSON("data/home.json", function async(data) {
    for (let i = 0; i < data[9].social_link.length; i++) {
      $(".vlt-fixed-socials").append(
        '<a href="' +
          data[9].social_link[i].link +
          '" target="_blank">\n' +
          '  <i class="' +
          data[9].social_link[i].icon +
          '"></i>\n' +
          "</a>"
      );
    }
  }).fail(function () {
    console.log("Data Error");
  });
}
