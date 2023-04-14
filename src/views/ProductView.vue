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



      <div className="productflex">

      <div className="productfleximg">
        <img :src="image" alt="Image">
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
       <h3 className="nop"> {{ title }} </h3>
           <h4 className="chose"> {{ price }} </h4>
           <!-- <img src="{{ image }}"/> -->

      </div>

          <!-- When working with an array, you could either use an index and place it in as a parameter like we are used to
          or we do it the new way of picking that one directly -->

          <button v-for="(button, index) in buttons" :key="button.label"  @click="handleClick(button.label)"
          :style="{ borderColor: currentBorderColor === index ? '#26A76B' : 'transparent' }"
          className="btnsize">
          {{ button.label }}
          </button>


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

        <button class="wlbtnn" type="submit" @click="addtocart">  Add to Cart</button>

      </div>


      </div>
    </template>
    <script>
      import {vue} from 'vue';
      import Try from '@/components/cp.vue';
export default {
  components: {
    Try
  },
data(){
    return{

      cart: [],
      product: {},
      localStorageArray: [],
      title: localStorage.getItem('title'),
      price: localStorage.getItem('price'),
      image: localStorage.getItem('image'),

      mounted() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.cart = cart;

      axios.get('http://localhost/gpd.php?id=' + this.$route.params.id)
      .then(response => {
       // this.product = this.selected,
       this.product = response.data
    // localStorage.getItem('id', productId);
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

        increaseAmount: 1,
        selectedItems: [],

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

  addtocart() {
  const newItem = { sizes: { ...this.sizes } };
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(newItem);

  localStorage.setItem('cart', JSON.stringify(cart));

  this.cart = cart;

  console.log(this.cart);
},

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

//         increaseValue() {
//   const quantity = ++document.getElementById('vi').value;
//   localStorage.setItem('quantity', this.sizes['quantity']);
//   console.log(quantity);
// },


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
    }
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

    .btnsize{
        margin-right:15px;
        font-size:13px;
        padding:5px 10px 5px 10px;
        border:2px solid transparent;
        margin-top:5px;
    }

    .nop{
        color:#434343;
        font-weight: 500;
    }

    .chose{
        color: #81A695;
        font-weight: 800;
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


}

    </style>