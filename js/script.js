var myApp = {
  data() {
    return {
      products: products,
      IsCart: false,
      cart: [],
      width: "width:75%",
      displayed: false,
      totalPrice: 0,
      id: null,
      // showSlider:true,
    };
  },
  methods: {
    // showSliderAfterDelay(){
    //   setTimeout(()=>{
    //     this.showSlider=true;
    //   },5000);
    // },
    addToCard(product) {
      // summation of price to all products
      this.totalPrice += product.price;
      // check if product in cart or not
      var checkCart = this.cart.some(function (item) {
        return item.product.id == product.id;
      });
      //  if false it will add in cart
      if (!checkCart) {
        var item = this.cart.push({
          product: product,
          quantity: 1,
        });
      }
      //   if found in cart it will increment his quantity one
      else {
        var newPro = this.cart.find(function (item) {
          return item.product.id == product.id;
        });
        newPro.quantity++;
      }
      // when item added to cart the main product should decrement by one
      product.stock--;
    },
    deleteItem(item) {
      var searchedItem = this.cart.findIndex(function (searchedItem) {
        return searchedItem.product.id == item.product.id;
      });
      this.cart.splice(searchedItem, 1);
      // we should return item that we deleted to products again so
      this.products.find(function (pro) {
        return pro.id === item.product.id;
      }).stock += item.quantity;
      this.totalPrice -= item.product.price * item.quantity;
    },
    option(id) {
      if (this.id == id ) {
        this.id = null 
      }else {
        this.id = id ;
      } 
    },
  },
};

Vue.createApp(myApp).mount("#app");
