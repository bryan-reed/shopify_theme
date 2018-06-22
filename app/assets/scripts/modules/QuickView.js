class QuickView {
  constructor() {
    //Set selector
    this.quickViewBtn = $(".quick_view_link");
    this.quickViewModal = $(".collection__quickview");
    this.closeBtn = ".close";
    this.images = ".alt_images img";
    this.mainImage = ".main_image img";
    this.events();
    // console.log("Start new quickview");
  }
  events() {
    this.quickViewBtn.click(this.launchQuickView.bind(this));
    this.quickViewModal.on("click", this.closeBtn, this.closeModal.bind(this));
    $(".mobile_nav").click(function() {
      $(".full_nav").toggleClass("open");
    });
    this.quickViewModal.on(
      "mouseover",
      this.images,
      this.changeMainImage.bind(this)
    );
    // this.quickViewModal.delegate(
    //   this.clostBtn,
    //   "click",
    //   this.closeModal.bind(this)
    // );
  }
  changeMainImage(e) {
    // console.log(e.target.src);
    this.quickViewModal.find(this.mainImage).attr("src", e.target.src);
  }
  launchQuickView(e) {
    //Get image from backend
    this.loadProduct(e.target.id);
    this.quickViewModal.toggleClass("open");
  }
  closeModal() {
    this.quickViewModal.removeClass("open");
  }
  loadProduct(id) {
    //Simulate ajax call
    var product2 =
      '{"id":627621036066,"title":"b-2-14","handle":"b-2-14","published_at":"2018-06-05T15:08:00-07:00","created_at":"2018-06-05T15:08:33-07:00","vendor":"crankbros","type":"","tags":["b-series","tools"],"price":2799,"price_min":2799,"price_max":2799,"available":true,"price_varies":false,"compare_at_price":null,"compare_at_price_min":0,"compare_at_price_max":0,"compare_at_price_varies":false,"variants":[{"id":7418351714338,"title":"black / Set","option1":"black","option2":"Set","option3":null,"sku":"b-2-14 black Set","requires_shipping":true,"taxable":true,"featured_image":{"id":2305602027554,"product_id":627621036066,"position":1,"created_at":"2018-06-05T15:11:23-07:00","updated_at":"2018-06-05T15:11:23-07:00","alt":null,"width":650,"height":650,"src":"https://cdn.shopify.com/s/files/1/2246/1789/products/2978920596_b_14.jpg?v=1528236683","variant_ids":[7418351714338]},"available":true,"name":"b-2-14 - black / Set","public_title":"black / Set","options":["black","Set"],"price":2799,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":null},{"id":7418351747106,"title":"red / Set","option1":"red","option2":"Set","option3":null,"sku":"b-2-14 red Set","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"b-2-14 - red / Set","public_title":"red / Set","options":["red","Set"],"price":2799,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":null},{"id":7418351779874,"title":"yellow / Set","option1":"yellow","option2":"Set","option3":null,"sku":"b-2-14 yellow Set","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"b-2-14 - yellow / Set","public_title":"yellow / Set","options":["yellow","Set"],"price":2799,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":null}],"images":["//cdn.shopify.com/s/files/1/2246/1789/products/2978920596_b_14.jpg?v=1528236683"],"featured_image":"//cdn.shopify.com/s/files/1/2246/1789/products/2978920596_b_14.jpg?v=1528236683","options":[{"name":"Color","position":1,"values":["black","red","yellow"]},{"name":"Size","position":2,"values":["Set"]}],"url":"/products/b-2-14"}';
    var newProduct2 = JSON.parse(product2);
    setTimeout(() => {
      let template = `
      <span class="close">&times;</span>
      <div class="main_image">
        <img src="https://picsum.photos/200/300" />
      </div>
      <div class="alt_images">
        <img src="https://picsum.photos/200/300" />
        <img src="https://picsum.photos/200/300?2" />
        <img src="https://picsum.photos/200/300?3" />
        <img src="https://picsum.photos/200/300?4" />
      </div>
      <div class="main_content">
      <h4>${newProduct2.vendor}</h4>
      <h2>${newProduct2.title}</h2>
      <small>${newProduct2.price}</small>
      <div class="variant_option_1 clearfix">
        <p>Select ${newProduct2.options[0].name}</p>
        ${variantOptionsSwatch(
          newProduct2.options[0].values,
          newProduct2.options[0].name
        )}
      </div>
      <div class="variant_option_2 clearfix">
        <p>Select ${newProduct2.options[1].name}</p>
        ${variantOptionsSwatch(
          newProduct2.options[1].values,
          newProduct2.options[1].name
        )}
      </div>
      <div class="btn_container">
      <button class="add">Add to Bag</button>
      </div>
      </div>
     `;
      this.quickViewModal.html(template);
    }, 500);
  }
}
function variantOptionsSwatch(opts, variant) {
  if (variant.toLowerCase() === "color") {
    var optsSelector = opts
      .map(
        opt =>
          `<label><input type="radio" value="${opt}" name="${variant}" /> <span class="swatch color circle" style="background-color:${opt};"></label>`
      )
      .join("");
  } else {
    var optsSelector = opts
      .map(
        opt =>
          `<label><input type="radio" value="${opt}" name="${variant}" /> <span class="circle swatch">${opt}</span></label>`
      )
      .join("");
  }

  return optsSelector;
}
function variantOptionsDD(opts, variant) {
  var optsSelector = opts
    .map(opt => `<option value="${opt}"> ${opt}</option>`)
    .join("");
  let html = `<select name="${variant}"><option>Select a ${variant}</option>${optsSelector}</select>`;
  return html;
}

export default QuickView;
