 $(document).ready(function() {
    
            let currentSlide = 0;
            const slideCount = $('.slide').length;
            const slideWidth = $('.slide').width();
            let autoSlideInterval;

            function goToSlide(index) {
                $('.slider').css('transform', 'translateX(' + (-index * slideWidth) + 'px)');
                currentSlide = index;
            }

            function startAutoSlide() {
                autoSlideInterval = setInterval(function() {
                    let nextSlide = (currentSlide + 1) % slideCount;
                    goToSlide(nextSlide);
                }, 10000);
            }

            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }

            $('.next').click(function() {
                stopAutoSlide();
                goToSlide((currentSlide + 1) % slideCount);
                startAutoSlide();
            });

            $('.prev').click(function() {
                stopAutoSlide();
                goToSlide((currentSlide - 1 + slideCount) % slideCount);
                startAutoSlide();
            });

            startAutoSlide();

            $(window).resize(function() {
                goToSlide(currentSlide);
            });
        });