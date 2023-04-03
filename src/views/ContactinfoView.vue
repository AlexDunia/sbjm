<template>

    <div class="maincartflex">

        <div class="mycoform" >
            <h3 > Reach out to us </h3>
            <p > Your opinion is of high value to us, be it criticism, recommendations, or
                compliments, do well to reach out.
            </p>

            <form id="myForm" class="add-form">

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
                                <input class="formname" name="message" type="text" >
                                </div><div class="contactus">
                                    <button type="submit"> Send Message </button>
                                    </div>
                                    </form>
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
    <p> N30,000 </p>
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
    </script>

    <style>

    .mycoform{
        flex-basis: 30%;
        color: #727171;
    }

    .mycoform form label {
        font-family: poppins;
        font-size: 17px;
        font-weight: 450;
        line-height: 4rem;
    }

    .mycoform form input{
        border: 0.8px solid #504d4d;
        opacity: .2;
    }

    .formname{
        padding: 15px;
        width: 100%;
        margin-bottom: 35px;
    }

    </style>