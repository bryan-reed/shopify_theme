import flexSlider from 'flexslider';
import $ from 'jquery';
class Slider {
    constructor(el) {
        $(el).flexslider({
            animation: "slide",
            controlNav: false
        });
    }
}
export default Slider;

