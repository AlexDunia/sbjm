<template>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


<!-- <div>
    <h1>Items in category: {{ category }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div> -->

  <h1> Hello </h1>


    <div class="cflex">

        <div class="ci">

        <h1> Contact Information</h1>
        <p> Address: Lagos, Nigeria </p>
        <p> Email Address: Support@stylebyjm.com.ng </p>

        <div class="fti" id="sm">
        <p> Follow us on social media</p>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
        </div>

        </div>




 <div class="mycoformm" >
        <h3 > Fill up the form if you have any questions. </h3>
        <!-- <p > Your opinion is of high value to us, be it criticism, recommendations, or
            compliments, do well to reach out.
        </p> -->

        <!-- <form id="myForm" class="add-form"> -->
          <form id="myForm" class="add-form" ref="form" @submit.prevent="sendEmail">

    <!-- <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send"> -->

                <div>

                    <label for="street address" > Full Name </label>
                    <br >
                    <input class="formname" name="user_name" type="text" >
                    </div>
                    <div>
                    <label for="street address"> Email </label>
                     <br >
                     <input class="formname" name="user_email" type="email" >
                     </div><div >
                        <label for="phone" > Phone </label>
                        <br >
                        <input class="formname" name="user_phone" type="phone" >
                        </div><div >
                            <label for="subject" > Subject </label>
                            <br >
                            <textarea class="formname" name="message" type="text"></textarea>
                            <!-- <input class="formname" name="message" type="text" > -->
                            </div><div class="contactus">
                                <button type="submit"> Send Message </button>
                                </div>
                                </form>
                                </div>

    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.$refs.form, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
,
  mounted() {
    fetch('http://localhost/tops.php')
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
        console.log(this.items)
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  },
};
</script>





<style>

.cflex{
    display:flex;
    justify-content: space-between;
    width:75%;
    margin:auto;
    padding-top:200px;
}

.ci{
    flex-basis:40%;
    margin-top:100px;
    color: #727171;
}

.ci h1{
    font-size:30px;
    font-weight:600;
    line-height:2.7rem;
}

.ci p{
    font-size:14px;
    margin-top:25px;
}

.mycoformm{
    flex-basis:50%;
}

.mycoformm{
    /* flex-basis: 30%; */
    color: #727171;
}

.mycoformm h3{
    font-size:30px;
    font-weight:300;
    line-height:2.7rem;
    color: #727171;
    padding-bottom:15px;
}

.mycoformm form label {
    font-size: 14px;
    font-weight: 300;
    line-height: 1rem;
}

.mycoformm form input{
    /* border: 0.8px solid #504d4d; */
    border-bottom: 0.8px solid #504d4d;
    opacity: .5;
}

.formname{
    padding: 15px;
    /* width: 100%; */
    margin-bottom: 20px;
}

@media (max-width: 1000px){

.cflex {
    display: block;
    padding-top:140px;
}

.mycoformm h3 {
    font-size: 20px;
    font-weight: 300;
    line-height: 2.7rem;
    color: #727171;
    margin-top:60px;
    padding-bottom: 15px;
}

}

</style>