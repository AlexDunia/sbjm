<template>
  <!-- <div v-for="item in cartItems" :key="item.id">
        <h2>{{ item.name }}</h2>
        <p>Price: {{ item.price }}</p>
        <p>Quantity: {{ item.quantity }}</p>
      </div> -->

      <!-- <ul>
        <li v-for="(item, index) in localStorageArray" :key="index">
          {{ item.nop }}
        </li>
        </ul> -->

        <div class="popupwrapperwithdraw" v-if="sizeguide">

        <div class="popupwithdraw" id="popupwhitewithdraw">

          <div class="xmark" @click="hidesizeguide">
            <i class="fa-solid fa-xmark"></i>
          </div>

          <div class="sizeflex">

          <div class="sizes">
            <h4> SIZES </h4>
            <h4> BUST </h4>
            <h4> HIP </h4>
            <h4> WAIST </h4>
            <h4> THIGH </h4>
            <h4> BACK </h4>
          </div>

          <div class="sizes">
            <h4> S(8) </h4>
          </div>

          <div class="sizes">
            <h4> M(10) </h4>
            <h4> 36 </h4>
            <h4> 42 </h4>
            <h4> 30 </h4>
            <h4> 28 </h4>
            <h4> 16 </h4>
          </div>

          <div class="sizes">
            <h4> L(12) </h4>
            <h4> 39 </h4>
            <h4> 44 </h4>
            <h4> 32 </h4>
            <h4> 30 </h4>
            <h4> 16 </h4>
          </div>

          <div class="sizes">
            <h4> L(14) </h4>
            <h4> 41 </h4>
            <h4> 47 </h4>
            <h4> 34 </h4>
            <h4> 32 </h4>
            <h4> 17 </h4>
          </div>

          <div class="sizes">
            <h4> XL(16) </h4>
            <h4> 44 </h4>
            <h4> 50 </h4>
            <h4> 37 </h4>
            <h4> 35 </h4>
            <h4> 18 </h4>
          </div>

          <div class="sizes">
            <h4> XL(18) </h4>
            <h4> 46 </h4>
            <h4> 52 </h4>
            <h4> 38 </h4>
            <h4> 36 </h4>
            <h4> 20 </h4>
          </div>

          <div class="sizes">
            <h4> XXL(12) </h4>
            <h4> 48 </h4>
            <h4> 55 </h4>
            <h4> 39 </h4>
            <h4> 37 </h4>
            <h4> 20 </h4>
          </div>

          </div>
        <!-- <div class="mainpopnavigationwithdraw">
          <div class="arrowback">
            <i class="fa-solid fa-arrow-left"></i></div>
            <div class="mainpopuptextwithdraw"
            ><h2> How much do you want to withdraw? </h2>
          </div></div><div class="priceandcurrency">
            <div class="inputflex">
              <div class="withdrawfigure">
                <input type="number" placeholder="0">
              </div><div class="withdrawfigureusd">
                <h4> USD </h4></div></div>

                  <div><button class="withdrawbtn"> Select Bank and Account </button>
                  </div>
        </div> -->
      </div>
    </div>
    <!-- We can use an if statement. Vif. then we make it a default of false.  -->

        <div v-if="cartNotificationVisible" class="cartnotification-wrapper">
        <div class="cartnotification">
     <p> <i class="fa-regular fa-circle-check"></i> Your product has been added to cart </p>
    </div>
    </div>

    <div className="productflex">

      <div class="smallimg">
        <div class="productflexc" v-for="(image, index) in images" :key="index" @click="selectImage(index)">
      <img :src="image" alt="Image">
    </div>

      <!-- <div className="productflexc">
        <img :src="image" alt="Image">
    </div>

    <div className="productflexc">
        <img :src="imagetwo" alt="Image">
    </div>

    <div className="productflexc">
        <img :src="imagethree" alt="Image">
    </div> -->

  </div>

    <!-- <div className="productfleximg">
      <img :src="image" alt="Image">
    </div> -->

    <div class="productfleximg">
      <img :src="selectedImage" alt="Image">
    </div>

    <div className="productflexinfo">
        <br/>
        <br/>
        <br/>
        <!-- <div  v-for="(info, index) in sizes" :key="index" @click="logItem(info)">
         <h3 className="nop"> {{ info.nop }} </h3>
         <h4 className="chose"> {{ info.price }} </h4>
        </div> -->
    <div>

      <div class="pinfosizeflex">

     <div>
     <h3 className="nop"> {{ title }} </h3>
     </div>

     <div class="schart" @click="showsizeguide">
        <button> <i class="fa-solid fa-chart-simple"></i> Size Chart </button>
      </div>

      </div>

     <div>
        <p class="pricetag"> Price: </p>
         <h4 className="chose"> {{ price }} </h4>
         <!-- <img src="{{ image }}"/> -->
    </div>



    </div>

        <!-- When working with an array, you could either use an index and place it in as a parameter like we are used to
        or we do it the new way of picking that one directly -->
        <p class="pricetag"> Sizes: </p>
        <button v-for="(button, index) in buttons" :key="button.label"  @click="handleClick(button.label)"
        :style="{ borderColor: currentBorderColor === index ? '#26A76B' : 'transparent' }"
        className="btnsize">
        {{ button.label }}
        </button>

        <br/>
        <br/>

        <p class="pricetag"> Quantity: </p>
     <div class="ProductForm__QuantitySelector">

        <div class="QuantitySelector QuantitySelector--large"><span class="QuantitySelector__Button Link Link--secondary" data-action="decrease-quantity">
            <svg class="Icon Icon--minus" role="presentation" viewBox="0 0 16 2" @click="decreasevalue">
      <path d="M1,1 L15,1" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square"></path>

    </svg>
  </span>
          <input type="number" class="QuantitySelector__CurrentQuantity" pattern="[0-9]*" name="quantity"  placeholder="0"  id="vi">

          <span class="QuantitySelector__Button Link Link--secondary" data-action="increase-quantity">
            <svg class="Icon Icon--plus" role="presentation" viewBox="0 0 16 16" @click="increasevalue">
      <g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <path d="M8,1 L8,15"></path>
        <path d="M1,8 L15,8"></path>
      </g>
    </svg>
  </span>

        </div>
      </div>
      <!-- {{ cart.length }} -->
      <button class="wlbtnn" type="submit" @click="addtocart"> Add to Cart</button>
      <!-- <Try /> -->
    </div>


    </div>

    <!-- <Try :cartitems="cart" /> -->

    <!-- <Cpage/> -->

    <div>
      <p> {{ info }} </p>
    </div>
  </template>
  <script>
  // import Cpage from ' ./CartView.vue'
    import {vue} from 'vue';
    import Try from './CartView.vue';
    import pone from '../assets/images/pinkimg1.jpg'
    export default {
// props: ['addtocart', 'buttons'],
  components: {
  Try
},


data(){
  return{
    sizeguide: false,
    images: [
        localStorage.getItem('image'),
        localStorage.getItem('imagetwo'),
        localStorage.getItem('imagethree'),
      ],
      selectedImage: localStorage.getItem('image'),
    cartLength: 0, // Add this property
    cart: [],
    myItems: [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
        { name: 'Item 3', price: 30 },
      ],
    product: {},
    localStorageArray: [],
    title: localStorage.getItem('title'),
    price: localStorage.getItem('price'),
    image: localStorage.getItem('image'),
    imagetwo: localStorage.getItem('imagetwo'),
    imagethree: localStorage.getItem('imagethree'),
    description: localStorage.getItem('description'),
    info: localStorage.getItem('info'),
    cartNotificationVisible: false,

    mounted() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cart = cart;

    axios.get('http://localhost/gpd.php?id=' + this.$route.params.id)
    .then(response => {
     // this.product = this.selected,
     this.product = response.data
  // localStorage.getItem('id', productId);

//   const cart = JSON.parse(localStorage.getItem('cart')) || [];
// this.cart = cart;

// this.cartLength = localStorage.getItem('cartLength') || 0;
});

// const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     this.cart = cart;

},

      buttons: [
      { id: 1, label: "S" },
      { id: 2, label: "Medium" },
      { id: 3, label: "Large" },
      { id: 3, label: "XL" },
      { id: 3, label: "XXL" },
      { id: 3, label: "X" },
    ],

    // s: "Small",
    // m: "Medium",
    // l: "Large",
    // e: "Extra Large",
    // xxl: "XXL",
    // x: "X",

      sizes:[
        {
          nop: localStorage.getItem('title'),
        },
        {
          price: localStorage.getItem('price'),
        },
        {
          clsize:""
        },
        {
          quantity: 0,
        },
        {
          img: localStorage.getItem('image'),
        },
      ],

          //   {
          //     nop: "LINEAR GREEN PLEATED PANTS",
          // },
          // {
          //    price: "30,000",
          // },
          // {
          //    clsize: "",
          // },
          // {
          //    quantity: 1,
          // },

      // increaseAmount: 1,
      // selectedItems: [],


  };
},

// computed: {
//   cartItems() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     return cart.map(item => ({
//       // id: item.id,
//       name: item.title,
//       price: item.price,
//       quantity: item.quantity || 1
//     }));
//   }
// },

methods: {

//  addtocart() {
//     const newItem = {
//       quantity: this.sizes.quantity,
//     };
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(newItem);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     this.cart = cart;
//     console.log(this.cart);
//   },
showsizeguide(){
  this.sizeguide = true
},

hidesizeguide(){
  this.sizeguide = false
},
selectImage(index) {
      this.selectedImage = this.images[index];
    },
// main oh guy
  addtocart() {
  const newItem = { sizes: { ...this.sizes } };
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(newItem);

  localStorage.setItem('cart', JSON.stringify(cart));

  this.cart = cart;
  this.cartLength = cart.length; // Update cartLength with the new length

  console.log(this.cart);

  this.cartNotificationVisible = true;
      setTimeout(() => {
        this.cartNotificationVisible = false;
      }, 2300); // Hide notification after 3 seconds
},
// end of main

// addtocart() {
//     const newItem = { ...this.sizes };
//     if (!this.cart[this.title]) {
//       this.cart[this.title] = [];
//     }
//     this.cart[this.title].push(newItem);
//     console.log(this.cart);
//   },


//     addtocart() {
//   const newItem = {
//     size: this.sizes.nop,
//     color: this.sizes.price,
//     quantity: this.sizes.quantity
//   };
//   this.cart.push(newItem);
//   console.log(this.cart);
// },

// addtocart() {
//     const existingItem = this.sizes.find(item => item.title === this.title)
//     if (existingItem) {
//       existingItem.quantity++
//     } else {
//       this.cartItems.push({
//         id: this.product.id,
//         name: this.product.name,
//         price: this.product.price,
//         quantity: 1
//       })
//     };
//   },

  // addtocart() {
  //   let item = this.cart.find((i) => i.nop === this.sizes.nop);
  //   if (item) {
  //     item.quantity++;
  //   } else {
  //     this.cart.push(this.sizes);
  //     console.log(this.cart)
  //   }
  // },

// i want to click on add to cart and store all my items in an array, I think i will be using push here.

// increaseValue() {
//     this.sizes['quantity'] += this.increaseAmount;
//     console.log(this.sizes['quantity']);
//   },

      increasevalue(){
        this.sizes[3].quantity = ++document.getElementById('vi').value;
        console.log(this.sizes)
    },

// //         increaseValue() {
// //   const quantity = ++document.getElementById('vi').value;
// //   localStorage.setItem('quantity', this.sizes['quantity']);
// //   console.log(quantity);
// // },


    decreasevalue(){
        this.sizes['quantity'] = document.getElementById('vi').value --;
        if(document.getElementById('vi').value <= 1 ){
            document.getElementById('vi').value  = 1
        }
        console.log(this.sizes)
    },

    handleClick(btnn) {
      this.sizes[2].clsize = btnn
        // console.log(this.sizes)
    },

  },

  changeColor() {
      this.currentBorderColor= this.currentBorderColor === "transparent" ? '#26A76B' : "transparent";
      if (this.selectedItems.length === 0 ) {
      // Add item
      this.selectedItems.push(this.s)
    }else
    {
      this.selectedItems.splice(this.s)
    }
    console.log(this.selectedItems)
  },

//   watch: {
// cart: {
//   handler() {
//     this.cartLength = this.cart.length;
//     localStorage.setItem('cartLength', this.cartLength);
//   },
//   deep: true
// }

// }
}
  </script>

      <!-- <script>
      import axios from 'axios'


        export default {
          props: ['selected'],
      name: 'product',

      data() {
        return {
          product: {},
          title: localStorage.getItem('title'),
          price: localStorage.getItem('price')
        };
      },
      mounted() {

        axios.get('http://localhost/gpd.php?id=' + this.$route.params.id)
          .then(response => {
            // this.product = this.selected,
            this.product = response.data
            // localStorage.getItem('id', productId);
          });

      },

    };

    </script> -->

    <style>

    /* .productflex{
        display:flex;
        justify-content:space-between;
        width:85%;
    }

    .productfleximg img{
        width:600px;
    } */

    /* .productflexinfo h3{
        color: #81A695;
        font-weight: 500;
    } */

    .xmark{
     text-align:right;
     padding-top:30px;
    }

    .popupwithdraw {
    background: white;
    border-radius: 8px;
    /* flex-basis: 29%; */
    width: 40%;
    /* left: 350px; */
    /* top: 100px; */
    /* padding-bottom: 5px; */
    padding-left: 50px;
    padding-right: 50px;
    position: absolute;
    /* height: 200%; */
    margin-bottom: 50px;
    padding-bottom: 30px;
    margin: auto;
    left: 0;
    right: 0;
    top: 160px;
    z-index:200;
}

.popupwrapperwithdraw {
    width: 100%;
    height: 100vh;
    background: rgba(14, 12, 12, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index:100;
    justify-content: center;
    align-items: center;
    z-index: 10px;
}


.sizeflex{
  display:flex;
  justify-content:space-around;
  padding-top:5px;
}

.sizeflex h4{
  font-weight:400;
  font-size:14px;
  padding-bottom:10px;
  padding-left:20px;
}

.smallimg{
  flex-basis:10%;
}

.productfleximg{
  flex-basis:50%;
}

.productflexinfo {
    flex-basis: 45%;
    margin-top: -30px;
}
    .btnsize{
        margin-right:15px;
        font-size:13px;
        padding:5px 10px 5px 10px;
        border:2px solid transparent;
        margin-top: -10px;
    }

    .nop{
        color:#434343;
        font-weight: 500;
    }

    .chose {
    color: #81A695;
    font-weight: 800;
    margin-top: -10px;
}

.pricetag{
  margin-top: 0px;
  font-size:13px;
}

.ProductForm__QuantitySelector{
  margin-top:-8px;
}

    .cartnotification{
  top:110px;
  /* bottom:0px; */
  color:white;
  z-index:200;
  background: #81A695;
  right:0;
  position:fixed;
  opacity: 1;
  padding:0 20px 0 20px;
  }

  .pinfosizeflex{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

   .cartnotification p{
   font-size:14px;
   }

   .schart button{
    background:#f0f0f0;
    border: rgb(66, 66, 66, 0.3) 0.4px solid;
    padding:7px 10px 7px 10px;
   }

   .productflex{
    display:flex;
    justify-content:space-between;
    width:85%;
    padding-top:215px;
    margin:auto;
}

.productfleximg img{
    width:370px;
}

.productflexc img{
    width:70px;
}


    /* .chose{
        width: 100px;
        height: 100px;
        border: 1px solid black;
        box-sizing: border-box;
    } */
    /*
    additional square borders
    .chose {
      content: "";
      display: block;
      border: 1px solid black;
      height: calc(100% + 2px);
      position: absolute;
    }

    .chose:before {
      top: -1px;
      left: -1px;
    }

    .chose:after {
      bottom: -1px;
      right: -1px;
    } */

    .QuantitySelector {
        display: inline-flex;
        align-items: center;
        border: 1px solid #dbdada;
        white-space: nowrap;
    }

    .QuantitySelector--large .QuantitySelector__Button {
        padding: 5px 20px;
    }

    .QuantitySelector--large svg {
        width: 11px;
        height: 11px;
    }

    .QuantitySelector--large .QuantitySelector__CurrentQuantity {
        width: 35px;
        font-size: 11px;
        border:none;
        margin:auto;
        text-align:center
    }

    .QuantitySelector--large .QuantitySelector__Button {
        padding: 10px 20px;
    }

    /* .wlbtnn {
        background: #B8D3FF;
        border-radius: 8px;
        align-items: center;
        padding: 15px 40px;
        margin-left: 20px;
        gap: 10px;
        font-Weight: 700;
        font-size: 17px;
        Line-height: 32px;
        Align-items: Center;
        color: #0647B1;
        border: none;
    } */

    /* .cartnotification-wrapper {
  animation: slide-in 0.5s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
} */

.cartnotification-wrapper {
  animation: bounce-in 0.5s ease-out;
}

@keyframes bounce-in {
  0% {
    transform: translateX(100%) translateY(0%) scale(0.5);
  }
  60% {
    transform: translateX(-20%) translateY(0%) scale(1.1);
  }
  80% {
    transform: translateX(10%) translateY(0%) scale(0.9);
  }
  100% {
    transform: translateX(0%) translateY(0%) scale(1);
  }
}

    @media (max-width: 1000px){

    .productflex {
    display: block;
    margin: auto;
    padding-bottom:30px;
    margin-bottom:50px;
}

.ProductForm__QuantitySelector{
    margin-top:25px;
}

.productfleximg {
    text-align: center;
}

.productfleximg img {
    width:300px;
    text-align: center;
}

.productflexinfo {
    flex-basis: 45%;
    margin-top: 0px;
}

.smallimg{
  display:flex;
  justify-content:space-between;
}

}

    </style>