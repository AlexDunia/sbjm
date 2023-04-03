<template>
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

    </div>
</template>

<script>

</script>

<style>

.cflex{
    display:flex;
    justify-content: space-between;
    width:75%;
    margin:auto;
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


</style>