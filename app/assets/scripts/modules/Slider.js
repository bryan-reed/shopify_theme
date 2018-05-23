import flexSlider from 'flexslider';
import $ from 'jquery';
class Slider {
    constructor(el) {
        $(el).flexslider({
            animation: "slide",
            controlNav: false,
            start: function() {
                window.dispatchEvent(new Event('resize')); //trigger resize when flexslider is loaded, fixes bug where part of second slide shows
            }
        });
    }
}
export default Slider;

