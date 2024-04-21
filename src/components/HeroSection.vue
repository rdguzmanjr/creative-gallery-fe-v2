<template>
    <div id="hero" class="bg-brandgray w-5/5 z-20 min-h-dvh sticky bg-no-repeat bg-[url('../assets/images/hero.jpg')] bg-[52%_0%] bg-[length:auto_120%] 
        md:bg-[length:auto_100%] md:bg-[50%_120%]
        lg:bg-[length:auto_150%] lg:bg-[50%_0%]
        2xl:bg-[length:auto_140%] 2xl:bg-[50%_50%]
        ">
       
        <div id="wrapper" class="absolute bottom-0 flex flex-col justify-end items-center min-h-screen space-y-10 py-3
        md:py-10 md:space-y-20
        lg:py-5 lg:space-y-16 
        2xl:py-8 2xl:space-y-20
        ">
            <div id="title" class="flex flex-col items-center justify-end font-cooper text-[3.5rem] -space-y-[0.5rem] 
             md:text-[5rem] md:space-y-[0.5rem]
             2xl:text-[6rem]
            ">
                    <div class="text-brandgreen leading-[3.5rem] text-center">Media Audience</div>
                    <div class="text-white">Experts</div>
            </div> 

            <div id="desc" class="text-center text-white text-[1.1rem] w-11/12 leading-6
            md:text-[1.6rem]
            lg:text-[1.3rem] lg:leading-7
            ">
                <div>Helping brands achieve impactful ad performance</div>
                <div>by creating custom, high-quality audiences at scale.</div>
            </div>

            <div id="scrolldown" class="flex flex-col items-center text-white text-sm space-y-0 
            md:text-lg md-space-y-5
            lg:text-md
            ">
                <img src="../assets/images/scroll.png" alt="" class="w-1/6 md:w-2/6 lg:w-3/12 animate-updown" >
                <div>Scroll Down</div>
            </div>

            <div id="desc" class="flex flex-col items-center text-white text-sm space-y-3 md:text-xl lg:text-[1.1rem]">
                <div class="">Brands we've worked with</div>
                <hr class="w-10/12 lg:w-11/12 2xl:w-5/12"/>
                <img class="w-10/12 lg:w-5/12"  src="../assets/images/brand-logos.png" alt="">
            </div>

        </div>
    
    </div>
</template>
