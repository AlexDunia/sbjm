<template>
    <div>
    {{ message }}
  </div>


    <div class="ftbg">

    <div class="ft">

        <div class="fti" id="sm">
            <p> Follow us on social media</p>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
        </div>

        <div class="fti">
        <p> Shop by categories </p>
        <a> <router-link to="/"> Tops </router-link> </a>
        <a> <router-link to="/"> Pants </router-link> </a>
        <a> <router-link to="/"> Skirt </router-link> </a>
        <a> <router-link to="/"> Gown </router-link> </a>
        <a> <router-link to="/"> Bubu </router-link> </a>
        <a> <router-link to="/"> Jumpsuit </router-link> </a>
        <a> <router-link to="/"> Swim Wear </router-link> </a>
        <a> <router-link to="/"> Swim Cover </router-link> </a>
        </div>

        <div class="fti">
        <p> More Info </p>
        <a> <router-link to="/"> About us </router-link> </a>
        <a> <router-link to="/"> Contact us </router-link> </a>
        <a> <router-link to="/"> Careers </router-link> </a>
        <a> <router-link to="/"> Delivery Policy </router-link> </a>
        <!-- <a> <router-link to="/"> Bubu </router-link> </a>
        <a> <router-link to="/"> Jumpsuit </router-link> </a>
        <a> <router-link to="/"> Swim Wear </router-link> </a>
        <a> <router-link to="/"> Swim Cover </router-link> </a> -->
        </div>

        <div class="fti">
        <p> Get in touch </p>
        <li> <i class="fa-solid fa-phone"> </i>  090117358571 </li>
        <li> <i class="fa-solid fa-envelope"> </i> info@stylbyjm.com.ng </li>
        </div>

    </div>

    </div>

    </template>

    <script>
    export default{
        props: {
  message: String
},
data(){
  return{
    msgsee:true,
    }
}
    }

    </script>

    <style>

    .ftbg{
        background: #81A695;
        color:white;
        padding-top:90px;
        padding-bottom:60px;
    }

    .ft{
        display:flex;
        justify-content:space-between;
        width:85%;
        margin:auto;
    }

    .fti li{
        text-decoration:none;
        list-style: none;
        display:block;
        font-size:13px;
        margin-bottom:20px;
    }

    .fti p{
        font-size:17px;
        font-weight:600;
        margin-bottom:30px;
    }

    .fti a{
        color:white;
        font-size:13px;
        margin-bottom:20px;
        text-decoration:none;
        display:block;
    }

    .fti a:hover{
        text-decoration:underline;
    }

    .fti{
        flex-basis:20%;
    }

    #sm i{
        font-size:20px;
        margin-right:20px;
    }

    @media (max-width: 1000px){

    .ft{
        display:block;
        width:75%;
        margin:auto;
    }

    .fti p{
        font-size:17px;
        font-weight:600;
        margin-bottom:20px;
    }

    .fti{
        margin-bottom:50px;
    }

    }

    </style>