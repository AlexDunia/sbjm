<template>
    <!-- <i class="fa-solid fa-xmark fa-2x" ></i>
        <div v-for="(mycart, index) in myc" :key="index">
    <div v-for="(vc, key) in mycart" :key="key">
         <p> {{ vc.nop }} </p>
         <p> {{ vc.quantity }} </p>
        </div>

    </div>

    {{ myc.length }} -->


    <!-- {{ myc }} -->

        <div class="maincartflex">
            <div>
        <div class="cartflex">

            <div class="cartimg">
                <img src="../assets/images/flady.jpg">
            </div>

            <div class="carttext">
                <h3> Linear Green Plated pants </h3>
                <p class="carttextp"> Quantity: <span class="qp"> 2 </span> </p>
                <p class="carttexts"> Size: <span class="qp"> XXL </span> </p>
                <h4> Remove from cart </h4>
            </div>

        </div>

        <div class="cartflex">

<div class="cartimg">
    <img src="../assets/images/flady.jpg">
</div>

<div class="carttext">
    <h3> Linear Green Plated pants </h3>
    <p class="carttextp"> Quantity: <span class="qp"> 2 </span> </p>
    <p class="carttexts"> Size: <span class="qp"> XXL </span> </p>
    <h4> Remove from cart </h4>
</div>

</div>

</div>


        <div>

        <div v-for="(item, index) in myc" :key="index">
      <div class="cartflex">
        <div class="cartimg">
          <img :src="item.sizes['4'].img">
        </div>
        <div class="carttext">
          <h3>{{ item.sizes['0'].nop }}</h3>
          <p class="carttextp">Quantity: <span class="qp">{{ item.sizes['3'].quantity }}</span></p>
          <p class="carttexts">Size: <span class="qp">{{ item.sizes['2'].clsize }}</span></p>
          <p class="carttexts">Price: <span class="qp">{{ item.sizes['1'].price * item.sizes['3'].quantity }}</span></p>
          <h4 @click="removeFromCart(index)">Remove from cart</h4>
        </div>
      </div>
       </div>

       </div>

        <div class="osdiv">

            <div>
                <h4> Order Summary </h4>
            </div>

            <hr/>

            <div class="osflex">

            <div>
            <p> Subtotal </p>
            </div>

            <div>
            <p>  {{ totalPrice }} </p>
            </div>

            </div>

            <br/>
            <!-- Delivery fee -->

            <div class="osflex">

    <div>
    <p> Delivery Fee </p>
    </div>

    <div>
    <p> N30,000 </p>
    </div>

    </div>

    <br/>
    <!-- Grand total -->

    <div class="osflex">

    <div>
    <p> Grand total </p>
    </div>

    <div>
    <p> N30,000 </p>
    </div>

    </div>

    <br/>
    <hr/>

    <div class="osflex">

    <div class="total">
    <p> Total </p>
    </div>

    <div class="total">
    <p> N30,000 </p>
    </div>

    </div>

    <button class="wlbtnn" type="submit">  Proceed to checkout </button>

        </div>

    </div>

      </template>

    <script>
     import Try from '@/components/cp.vue';
    export default {
      components: {
        Try
      },
      data(){
        return{
            myc: {},
        }
      },
      mounted() {
        // Get cart data from localStorage
        const mycc = localStorage.getItem('cart');
        // Parse cart data as JSON
        this.myc = JSON.parse(mycc);
        console.log(this.myc)
      },
      computed: {
        totalPrice() {
        let sum = 0;
        for (let i = 0; i < this.myc.length; i++) {
          const item = this.myc[i];
          sum += item.sizes['1'].price * item.sizes['3'].quantity;
        }
        localStorage.setItem('totalPrice', sum);
        return sum;
      }
      },
      methods: {
        removeFromCart(index) {
          // Remove the selected item from the cart array
          this.myc.splice(index, 1);
          // Remove the selected item from the local storage
          const cartItems = JSON.parse(localStorage.getItem('cart'));
          cartItems.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cartItems));
        }
      }
    }
    </script>

    <style>

    body{
      margin:0;
      padding:0;
      font-family:inter;
    }

    .maincartflex{
        display:flex;
        justify-content:space-between;
        width:85%;
        align-items: flex-start;
        margin:auto;
        padding-top: 220px;
    }

    .cartflex{
        display:flex;
        flex-basis:40%;
        margin-bottom:30px;
    }

    .cartimg img{
        width:150px;
    }

    .carttext{
      margin-left: 160px;
        /* margin-top:5px; */
    }

    .carttext h3{
        font-weight: 600;
    font-size: 15px;
    /* line-height: 0%; */
    color: rgba(0, 0, 0, 0.6);
    }

    .carttext p{
        font-size:13px;
        color: rgba(0, 0, 0, 0.8);
    }

    .carttextp .qp{
        font-size:13px;
        color: rgba(0, 0, 0, 0.8);
        font-weight:600;
    }

    .carttexts .qp{
        font-size:13px;
        color: rgba(0, 0, 0, 0.8);
        font-weight:700;
    }

    /* .carttextp{
        padding-top:10px;
    } */

    .carttext h4{
        color: #81A695;
        font-size:15px;
    }

    .osdiv{
        border:1px solid black;
        padding: 10px 30px 30px 30px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        flex-basis:40%;
    }

    .osdiv hr {
      border: none; /* removes the default border */
      height: 0.1px; /* sets the height of the HR element */
      background: rgba(0, 0, 0, 0.3);
      transform: matrix(1, 0, 0, -1, 0, 0);
      margin: 20px 0; /* adds margin to the top and bottom of the HR element */
    }

    .osflex{
        display:flex;
        justify-content: space-between;
    }

    .osdiv h4{
        font-size:15px;
        margin-bottom:10px;
        font-weight:600;
        color:#757373;
    }

    .osdiv p{
        font-size:14px;
        font-weight: 400;
        line-height: 0%;
        color: rgba(0, 0, 0, 0.6);
    }

    .total p{
        color: rgba(0, 0, 0, 0.6);
        font-weight:800;
    }

    .wlbtnn {
        margin-top:20px;
        background: #81A695;
        padding: 10px 10px;
        width:100%;
        font-Weight: 700;
        font-size: 15px;
        color: white;
        border: none;
    }


    @media (max-width: 1000px){

        .maincartflex{
        display:block;
        padding-bottom: 120px;
    }

    .osdiv{
        margin-top:100px;
    }

    .cartimg {
        margin-left:0px;
    }

    .cartflex{
        display:flex;
        flex-basis:40%;
        margin-bottom:50px;
    }

    .carttext {
        margin-left: 160px;
    }

    }

    </style>