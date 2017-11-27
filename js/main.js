// one page scroll

$(function() {
    
    const display = $('.maincontent');
    const sections = $('.section');

    let inScroll = false;

    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = mobileDetect.mobile();

    const switchMenuActiveClass = sectionEq => {
        $('.vertical-nav__item').eq(sectionEq).addClass('vertical-nav__item_active')
            .siblings().removeClass('vertical-nav__item_active');
    }

    const performTransition = sectionEq => {
        if (inScroll == true) return 
        inScroll = true

        const position = (sectionEq * -100) + '%';
    
        display.css({
            'transform' : `translate(0, ${position})`,
            '-webkit-transform' : `translate(0, ${position})`
        })

        sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');
        
        setTimeout(() => {
            inScroll = false;

        }, 1300);
        switchMenuActiveClass(sectionEq);
    }

    const difineSections = sections => {
        const activeSection = sections.filter('.active');
        return {
            activeSection: activeSection,
            nextSection: activeSection.next(),
            prevSection: activeSection.prev()
        }
    }

    const scrollToSection = direction => {
        const section = difineSections(sections)

        if (inScroll) return;

        if (direction === 'up' && section.nextSection.length) { // вниз
            performTransition(section.nextSection.index())
        }

        if (direction === 'down' && section.prevSection.length) { // вверх
            performTransition(section.prevSection.index())
        }
    }

    $('.wrapper').on({
        wheel: e => {
            const deltaY = e.originalEvent.deltaY;
            let direction = (deltaY > 0) 
            ? 'up' 
            : 'down'
        
            scrollToSection(direction);
        },
        touchmove: e => (e.preventDefault())
        });

    $(document).on('keydown', e => {
        const section = difineSections(sections);

        if (inScroll) return

        switch (e.keyCode) {
            case 40:
                if (!section.nextSection.length) return;
                performTransition(section.nextSection.index());
                break;

            case 38:
                if (!section.prevSection.length) return;
                performTransition(section.prevSection.index());
                break;
        }
    });

    if (isMobile) {
        $(window).swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            // console.log(direction);
            scrollToSection(direction);
            }
        })
        }
    

    $('[data-scroll-to]').on('click touchstart', e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const sectionIndex = parseInt($this.attr('data-scroll-to'));

        performTransition(sectionIndex);
    });
    
})
    


// Humbehreg menu

$(function() {
    let hamburgerMenu = document.getElementById('toggle')
    let overlay = document.getElementById('overlay')
    let hamburgerMenuOverlay = document.getElementById('toggle_back')
    
    
    hamburgerMenu.addEventListener('click', function() {
        overlay.classList.add('overlay_active')
    })
    
    hamburgerMenuOverlay.addEventListener('click', function() {
        overlay.classList.remove('overlay_active')
    })
})



//fancybox

$(function() {
    $("[data-fancybox]").fancybox({
		// Options will go here
	});

})


// Vertical acco

$(function() {
    $('.team__trigger').on('click', e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const container = $this.closest('.team__list');
        const item = $this.closest('.team__item');
        const items = $('.team__item', container);
        const content = item.find('.team__block-none');
        const otherContent = $('.team__block-none', container);
        // const block = item.find('.team__block');
        const block = $('.team__block', item);
        const reqHeight = block.outerHeight();


        // item.toggleClass('team__item_active');
        // content.slideToggle(1000);

        if (!item.hasClass('team__item_active')) {
            items.removeClass('team__item_active')
            item.addClass('team__item_active')
            
            otherContent.css({
                'height' : 0
            })

            content.css({
                'height' : reqHeight
            })

        } else {
            item.removeClass('team__item_active');
            content.css({
                'height' : 0
            }) 
        }

    })

})

// Horizontal acco

$(function() {
    $('.menu-accordion__img').on('click', e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const container = $this.closest('.menu-accordion__list');
        const item = $this.closest('.menu-accordion__item');
        const items = $('.menu-accordion__item', container);
        const content = item.find('.menu-accordion__content');
        const otherContent = $('.menu-accordion__content', container);
        const textBlock = item.find('.menu-accordion__text');

        let calculateWidth = () => {
            let windowWidth = $(window).width();
            let links = $('.menu-accordion__img');
            let linksWidth = links.width();
            let reqWidth = windowWidth - linksWidth * links.length;

            return reqWidth > 550 ? 550 : reqWidth;
        };

        let openWidth = calculateWidth();

        if (!item.hasClass('active')) {
            items.removeClass('active')
            item.addClass('active')


            // setTimeout(function(){
            //     textBlock.css({
            //         'opacity' : 0
            //     })
                
            // }, 700);
            // setTimeout(function(){
            //     otherContent.css({
            //     'width' : 0
            // })
            // }, 100)
            
            otherContent.css({
                'width' : 0
            })



            setTimeout(function(){
                textBlock.css({
                    'opacity' : 1
                })
                
            }, 700);



            // content.animate({
                
            //     'width' : openWidth
            // }, 500, function() {
            //     textBlock.css({
            //         'opacity' : 1
            //     });

            //     content.css({
            //         'width' : openWidth
            //     })
            // })



            content.css({
                'width' : openWidth
            })

            


            
        } else {

            textBlock.css({
                    'opacity' : 0
                })


            setTimeout(function(){
                content.css({
                'width' : 0
            })
            }, 700);


            item.removeClass('active');

            

            

            
            
        }

    })

})



$(function() {
    
    let burgersHover = document.querySelector('.burgers__main-foto-top')
    let dropdowm = document.querySelector('.burgers-ingredients-dropdown')
    
    // let crossBtn = document.querySelector('.close-ingrediets')
    
   

    burgersHover.addEventListener('mouseover', e => {
    // var
        // $this = $(this),
        // container = $this.closest('.burgers-wrapper'),
        // items = container.find('.burgers__item'),
        // activeItem = items.filter('.active'),
        // dropdowm = activeItem.find('.burgers-ingredients-dropdown');
 

        dropdowm.classList.add('burgers-ingredients-dropdown_active')
        burgersHover.style.backgroundColor = "#e35028"
    });
    
    // crossBtn.addEventListener('click', e => {
    //     dropdowm.classList.remove('burgers-ingredients-dropdown_active')
    // })
    
    burgersHover.addEventListener('mouseout', e => {
        dropdowm.classList.remove('burgers-ingredients-dropdown_active')
        burgersHover.style.backgroundColor = "#f08c33"
    });  
      

})



// Slider

$(function() {

    var moveSlide = function (container, slideNum) {
        var 
            // $this = $(this),
            // container = $this.closest('.burgers-wrapper'),
            items = container.find('.burgers__item'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.burgers__list'),
            duration = 500;

        if (reqItem.length) {
            list.animate({
               'left' : -reqIndex * 100 + '%'
            }, duration, function () {
                activeSlide.removeClass('active');
                reqItem.addClass('active');
            });

        }
    }


    $('.burgers-arrow-link').on('click', function(e){
        e.preventDefault();

        var 
            $this = $(this),
            container = $this.closest('.burgers-wrapper'),
            items = container.find('.burgers__item'),
            activeItem = items.filter('.active'),
            existedItem, edgeItem, reqItem;

        if ($this.hasClass('burgers-arrow-link_right')) {
            existedItem = activeItem.next();
            edgeItem = items.first();

        }
        
        if ($this.hasClass('burgers-arrow-link_left')) {
            existedItem = activeItem.prev();
            edgeItem = items.last();
            
        }

        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSlide(container, reqItem);
        

    });

});





// map

$(function() {
  
    ymaps.ready(init); //ждем загрузки api и DOM после чего запускаем функцию init
    
    var placemarks = [ // Массив объектов который мы перебираем методом forEach
      {
        latitude: 59.89644416,
        longitude: 30.42408670,
        hintContent: '<div class="map__hint">Бабушкина ул. д. 12/1</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="/img/content/map/burger.png" alt="Бургер"/>',
          "Самые вкусные бургеры, заходите в гости",
          "</div>"
        ]
      },
      {
        latitude: 59.87531606,
        longitude: 30.30421700,
        hintContent: '<div class="map__hint">Благодатная ул. д. 19</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="/img/content/map/burger.png" alt="Бургер"/>',
          "Самые вкусные бургеры, заходите в гости",
          "</div>"
        ]
      },
      {
        latitude: 59.95717856,
        longitude: 30.35253750,
        hintContent: '<div class="map__hint">Академика Лебедева ул. д. 17</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="/img/content/map/burger.png" alt="Бургер"/>',
          "Самые вкусные бургеры, заходите в гости",
          "</div>"
        ]
      }
    ];
    
    /*Инициализация функции создания карты и добавление на карту placemark*/
    function init() {
      var map = new ymaps.Map("map", {
        center: [59.92368716, 30.34128357],
        zoom: 11,
        // controls: ["zoomControl"], // Выводим только кнопки зума
        behaviors: ["drag"]
      });
      placemarks.forEach(function(item){
        var placemark = new ymaps.Placemark(
            [item.latitude, item.longitude],
            {
              hintContent: item.hintContent,
              balloonContent: item.balloonContent.join("")
            },
            {
              iconLayout: "default#image",
              iconImageHref: "/img/content/map/map-marker.png",
              iconImageSize: [46, 57],
              iconImageOffset: [-23, -57]
              // iconImageHref: "img/sprite.png",
              // iconImageSize: [46, 57],
              // iconImageOffset: [-23, -57],
              // iconImageClipRect: [[415, 0], [461, 57]]
            });
            map.geoObjects.add(placemark);
      })
    }


})

