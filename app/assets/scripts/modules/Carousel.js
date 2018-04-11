import slick from 'slick-carousel';
import $ from 'jquery';
class Carousel {
    constructor() {
        $(".slicker").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    }
}
export default Carousel;