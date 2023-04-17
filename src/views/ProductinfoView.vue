<template>

    <div className="productflex">

    <div className="productfleximg">
    <img src="../assets/images/aritop.jpg">
    </div>

    <div className="productflexinfo">
        <br/>
        <br/>
        <br/>
        <div  v-for="(info, index) in sizes" :key="index" @click="logItem(info)">
         <h3 className="nop">{{ info.nop }} </h3>
         <h4 className="chose"> {{ info.price }} </h4>

         <!-- <button v-for="(button, index) in buttons" :key="index"  @click="handleClick(index)"
        :style="{ borderColor: currentBorderColor === index ? '#26A76B' : 'transparent' }"
        className="btnsize">
      {{ button.label }}
    </button> -->
    <!-- <br/>
    <button @click="changeColor" :style="styleObject"> {{ info.s }} </button>

    <h4 className="chose"> {{ info.s }} </h4>
    <h4 className="chose"> {{ info.m }}</h4>
    <h4 className="chose"> {{ info.l }}</h4> -->

     </div>


        <!-- <button @click="changeColor"  :style="{ borderColor: currentBorderColor }" className="btnsize"> {{s}} </button>
        <button @click="changeColor"  :style="{ borderColor: currentBorderColor }" className="btnsize"> {{m}} </button>
        <button @click="changeColor"  :style="{ borderColor: currentBorderColor }" className="btnsize"> {{l}} </button>
        <button @click="changeColor"  :style="{ borderColor: currentBorderColor }" className="btnsize"> {{e}} </button>
        <button @click="changeColor"  :style="{ borderColor: currentBorderColor }" className="btnsize"> {{xxl}} </button>
        <button @click="changeColor"  :style="{ borderColor: currentBorderColor }" className="btnsize"> {{x}} </button> -->

        <!-- <button @click="changeColor" :style="styleObject"> Medium </button> -->


        <!-- When working with an array, you could either use an index and place it in as a parameter like we are used to
        or we do it the new way of picking that one directly -->


        <button v-for="(button, index) in buttons" :key="button.label"
            @click="handleClick(button, index)"
            :style="{ borderColor: currentBorderColor === index ? '#26A76B' : 'transparent' }"
            class="btnsize">
      {{ button.label }}
    </button>

    <!-- <input type="number" value="0"/> -->

    <div class="ProductForm__QuantitySelector">

        <div class="QuantitySelector QuantitySelector--large"><span class="QuantitySelector__Button Link Link--secondary" data-action="decrease-quantity">
            <svg class="Icon Icon--minus" role="presentation" viewBox="0 0 16 2" @click="decreasevalue">
      <path d="M1,1 L15,1" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square"></path>

    </svg>
</span>
          <input type="number" class="QuantitySelector__CurrentQuantity" pattern="[0-9]*" name="quantity"  placeholder="0" v-model="this.sizes['quantity']" id="vi">

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

      <!-- <button class="wlbtnn" type="submit" >  Add to Cart</button> -->

    </div>


    </div>
</template>

<script>
  import {vue} from 'vue';
export default {



data(){
    return{
      currentBorderColor: index,

        buttons: [
        { id: 1, label: "Small" },
        { id: 2, label: "Medium" },
        { id: 3, label: "Large" },
        { id: 3, label: "XL" },
        { id: 3, label: "XXL" },
        { id: 3, label: "X" },
      ],

    //     styleObject: {
    //     backgroundColor: "transparent"

    //   },
    // currentBorderColor: 1,
    // currentBorderColor: 'transparent',
      s: "Small",
      m: "Medium",
      l: "Large",
      e: "Extra Large",
      xxl: "XXL",
      x: "X",

        sizes:[
              {
                nop: "LINEAR GREEN PLEATED PANTS",
            },
            {
               price: "30,000",
            },
            // {
            //    clsize: "",
            // },
            // {
            //    quantity: 1,
            // },


            // {
            //     s: "S",
            // },
            // {
            //     m: "M",
            // },
            // {
            //     l: "L",
            // },
            // {
            //     xl: "XL",
            // },
            // {
            //     xxl: "XXL",
            // },
            // {
            //     x: "X",
            // }
        ],
        selectedItems: [],
    };
  },
  methods: {
    // logItem(item) {
    //   this.selectedItems.push(item);
    //   console.log(this.selectedItems)
    // },
    // addtocart() {
    //   const newItem = {
    //     quantity: this.sizes.quantity,
    //   };
    //   let cart = JSON.parse(localStorage.getItem('cart')) || [];
    //   cart.push(newItem);
    //   localStorage.setItem('cart', JSON.stringify(cart));
    //   this.cart = cart;
    //   console.log(this.cart);
    // },

//     addtocart() {
//   const newItem = { ...this.sizes };
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   cart.push(newItem);

//   localStorage.setItem('cart', JSON.stringify(cart));

//   this.cart = cart

//   console.log(this.cart);
// },

    increasevalue(){
        this.sizes['quantity'] = ++document.getElementById('vi').value;
        console.log(this.sizes)
    },

    decreasevalue(){
        this.sizes['quantity'] = document.getElementById('vi').value --;
        if(document.getElementById('vi').value <= 1 ){
            document.getElementById('vi').value  = 1
        }
        console.log(this.sizes)
    },

    handleClick(btnn, index) {
      this.sizes['clsize'] = btnn;
      this.currentBorderColor = index;
      console.log(this.sizes);
    },
        // this.currentBorderColor[btnn]= index
        // this.currentBorderColor= this.currentBorderColor[btnn] === "transparent" ? '#26A76B' : "transparent";

    //     if (this.sizes.includes(btnn)) {
    //     // Replace current selection with clicked item
    //     this.sizes[2] = btnn;
    //   } else {
    //     // Add clicked item to selected items array
    //     // this.selectedItems.push(btnn);
    //     this.sizes.push(btnn)
    //     // this.selectedItem = btnn;
    //   }

    //   console.log(this.sizes)

    //     if (this.selectedItems.length === 0 ) {
    //     // Add item
    //     this.selectedItems.push(btnn);
    //     // this.sizes.push(this.selectedItems)
    //   }else
    //   {
    //     this.selectedItems.splice(0)
    //   }
    //   console.log(this.selectedItems)



        // this.sizes.splice(btnn)

    //     if (this.sizes.includes(btnn)) {
    //     // Replace current selection with clicked item
    //     // Vue.set(this.sizes, btn, this.sizes.push(btnn));
    //     this.sizes.splice(this.sizes, btnn, this.sizes.push(btnn));
    //   }


    //     if (this.selectedItems === btnn) {
    //     // Add item
    //     this.sizes.push(btnn)
    //   }else
    //   {
    //     this.sizes.splice(btnn)
    //   }

        // this.sizes[clothsize] = i
        // how on earth did we select the name again?
        // console.log(this.selectedItems)
        // console.log(this.sizes)

    //     this.currentBorderColor= index
    //   console.log(`Button ${index} clicked`);

    //   this.currentBorderColor= this.currentBorderColor[id] === "transparent" ? '#26A76B' : "transparent";
    },

    // changeColor() {
    //     this.currentBorderColor= this.currentBorderColor === "transparent" ? '#26A76B' : "transparent";
    //     if (this.selectedItems.length === 0 ) {
    //     // Add item
    //     this.selectedItems.push(this.s)
    //   }else
    //   {
    //     this.selectedItems.splice(this.s)
    //   }
    //   console.log(this.selectedItems)
    // }

  }

</script>

<style>

.ProductForm__QuantitySelector{
  margin-top:15px;
}

/* .productflex{
    display:flex;
    justify-content:space-between;
    width:85%;
    padding-top:215px;
    margin:auto;
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
}

}

</style>
