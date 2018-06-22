import Slider from "./modules/Slider";
import MobileMenu from "./modules/MobileMenu";
import Carousel from "./modules/Carousel";
import QuickView from "./modules/QuickView";
import Stickyfill from "stickyfilljs";

let mobileMenu = new MobileMenu();
let homePageSlider = new Slider(document.querySelector(".slider"));
let carousel = new Carousel();
//Sticky fill
var elements = document.querySelectorAll(".collection__navigation");
Stickyfill.add(elements);
//Quick view
let qv = new QuickView();
