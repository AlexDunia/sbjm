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

        <!-- <div  v-for="(info, index) in sizes" :key="index" @click="logItem(info)">
         <h3 className="nop"> {{ info.nop }} </h3>
         <h4 className="chose"> {{ info.price }} </h4>
        </div> -->
        <!-- showsizeguide(){
  this.sizeguide = true
},

showadinfoguide(){
  this.adinfo = true
},

hidesizeguide(){
  this.sizeguide = false
}, -->

        <div class="popupwrapperwithdraw" v-if="adinfo">
          <div class="popupwithdraw" id="popupwhitewithdraw">

<div class="xmark">
  <i class="fa-solid fa-xmark"></i>
</div>

<div>
  <h1> Helloy</h1>
</div>

     <ul>
      <li v-for="sentence in formattedAd" :key="sentence">{{ sentence }}</li>
    </ul>




<!-- <div>
  <div v-for="(productz, i) in productlist" :key="i">
    <ul>
      <li v-for="onepoint in productz.additionalinfo.split('.')" :key="onepoint">
        {{ onepoint }}
      </li>
    </ul>
  </div>
</div> -->

</div>

 </div>

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
     <p className="nom"> {{ meaning }} </p>
     </div>

     <div class="schart" @click="showsizeguide">
        <button> <i class="fa-solid fa-chart-simple"></i> Size Chart </button>
      </div>

      </div>

      <div class="pinfosizeflex">

     <div>
        <p class="pricetag"> Price: </p>
         <h4 className="chose"> {{ price }} </h4>
         <!-- <img src="{{ image }}"/> -->
    </div>

    <div class="schart" @click="showadinfoguide">
        <button> <i class="fa-solid fa-book"></i> Note </button>
      </div>

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
    <div class="info">
      <p> {{ info }} </p>
    </div>


    <div class="minfoflex">

    <div class="minfo">

      <h2> More information </h2>

      <ul>
      <li v-for="desclist in formatteddesc" :key="desclist">{{ desclist }}</li>
    </ul>
    </div>

    <div class="ctable">

    <table class="custom-table">

  <tr>
  <th> Shipping and Delivery </th>
  <th> Within Lagos (Working days) </th>
  <th> Outside Lagos (Working days) </th>
  <th> Outside Nigeria (Working days) </th>
  </tr>

  <tr>
  <td> Days </td>
  <td> 1-2 </td>
  <td> 3-4 </td>
  <td> 5-7</td>
  </tr>

</table>

</div>

</div>

    <!-- <div>
  <div v-for="(productz, i) in productlist" :key="i">
    <ul>
      <li>
        {{ productz.additionalinfo }}
      </li>
      <li v-for="onepoint in productz.additionalinfo.split('.')" :key="onepoint">
        {{ onepoint }}
      </li>
    </ul>
  </div>
</div> -->

<!-- <div v-for="result in productlist" :key="result.id">
  <ul>
    <li v-for="line in result.description.split('.')" :key="line">{{ line.trim() }}</li>
  </ul>
</div> -->

<!-- <h1> {{ ad }} </h1> -->

  </template>
  <script>
  // import Cpage from ' ./CartView.vue'
    import {vue} from 'vue';
    import Try from './CartView.vue';
    import pone from '../assets/images/pinkimg1.jpg'
    export default {

    props: ['productlist'],

  components: {
  Try
},


data(){
  return{
    sizeguide: false,
    adinfo: false,
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
    meaning: localStorage.getItem('meaning'),
    info: localStorage.getItem('info'),
    ad: localStorage.getItem('ad'),
    cartNotificationVisible: false,

    mounted() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cart = cart;

    axios.get('gpd.php?id=' + this.$route.params.id)
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
      { id: 1, label: "8" },
      { id: 2, label: "10" },
      { id: 4, label: "12" },
      { id: 5, label: "14" },
      { id: 6, label: "16" },
      { id: 7, label: "18" },
      { id: 8, label: "20" },
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

computed: {
    formattedAd() {
      const ad = localStorage.getItem('ad');
      if (ad) {
        return ad.split('. ');
      } else {
        return [];
      }
    },
    formatteddesc() {
      const desc = localStorage.getItem('description');
      if (desc) {
        return desc.split('. ');
      } else {
        return [];
      }
    }
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

  showsizeguide(){
  this.sizeguide = true
},

showadinfoguide(){
  this.adinfo = true
},

hidesizeguide(){
  this.sizeguide = false
},

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

.minfoflex{
  display:flex;
  justify-content:space-between;
  width:95%;
  margin:auto;
  margin-top:60px;
  margin-bottom:70px;
}

.minfo h2{
  margin-left:40px;
  font-size:18px;
  margin-bottom:20px;
}

.custom-table {
  border-collapse: collapse;
  width: 80%;
  margin:auto;
  margin-top:20px;
}

.custom-table th,
.custom-table td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}

.custom-table th{
  background: #f3f2f2;
  font-size:13px;
}

.custom-table td{
 font-size:13px;
}

ul {
  list-style-type: none;
}

ul li{
  padding-bottom:18px;
}

ul li:before {
  content: "-";
  margin-right: 20px;
}

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
        cursor:pointer;
    }

    .nop{
        color:#81A695;
        font-weight: 800;
    }

    .nom{
        color:rgb(19, 18, 18);
        font-weight: 350;
        font-size:13px;
        margin-bottom:25px;
        margin-top: -15px;
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
    cursor:pointer;
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
        cursor:pointer;
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

.info {
  width:85%;
  margin:auto;
  margin-top:50px;
}

/* .info h4{
  color:#81A695;
} */

.info p{
  line-height:1.5rem;
  font-size:16px;
}

    @media (max-width: 1000px){

  .minfoflex{
  display:block;
  width:95%;
  margin:auto;
  margin-top:60px;
}

.custom-table {
  border-collapse: collapse;
  width: 95%;
  margin:auto;
  margin-top:20px;
  margin-bottom:60px;
}

.custom-table th{
  background: #f3f2f2;
  font-size:11px;
}

.custom-table td{
 font-size:11px;
}


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
  justify-content:space-around;
}

/* more */

.xmark{
     text-align:right;
     margin-right:20px;
     padding-top:30px;
    }

    .popupwithdraw {
    background: white;
    border-radius: 8px;
    /* flex-basis: 29%; */
    width: 85%;
    /* left: 350px; */
    /* top: 100px; */
    /* padding-bottom: 5px; */
    padding-left: 10px;
    padding-right: 10px;
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

/* You should probably use this styling for the background of serach results. */

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
  font-size:6px;
  padding-bottom:10px;
  /* padding-left:20px; */
}

}

@media (max-width: 700px){

.popupwithdraw {
  background: white;
  border-radius: 8px;
  /* flex-basis: 29%; */
  width: 75%;
  /* left: 350px; */
  /* top: 100px; */
  /* padding-bottom: 5px; */
  padding-left: 5px;
  padding-right: 5px;
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

.btnsize {
  margin-right: 9px;
  margin-top: 9px;
  font-size: 10px;
  /* line-height:5em; */
  color:black;
  padding: 5px 10px 5px 10px;
  border: 2px solid transparent;
  margin-top: -10px;
}


}


    </style>