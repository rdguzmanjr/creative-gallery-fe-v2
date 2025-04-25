<template>
    <div
      id="hero"
      class="bg-brandgray min-h-dvh sticky w-full z-20 bg-no-repeat 
             bg-[position:center_10vh] bg-[url('../assets/images/center-img.png')] 
             bg-[length:180%_auto]
             md:bg-[length:130%_auto] md:bg-[position:center_5vh]
             lg:bg-[length:80%_auto] lg:bg-[position:center_-10vh]
             xl:bg-[length:65%_auto]  xl:bg-[position:center_-7vh]
             2xl:bg-[length:60%_auto] 2xl:bg-[position:center_-5vh]
             "
         >
          
         <div id="wrapper" class="absolute w-dvw bottom-0 flex flex-col justify-end items-center min-h-screen space-y-10 py-0
        md:py-10 md:space-y-20
        lg:py-0  lg:space-y-5
        xl:py-3  xl:space-y-20
        2xl:py-8 2xl:space-y-20
        ">
            <div id="scrolldown" class="flex flex-col items-center text-white text-sm space-y-0 
            md:text-lg md-space-y-5
            lg:text-md
            ">
                <img src="../assets/images/scroll.png" alt="" 
                class="w-1/6 
                md:w-2/6 
                lg:w-2/12 
                xl:w-3/12 
                animate-updown" 
                >
                <div class="text-sm">Scroll Down</div>
            </div>

            <div id="desc" class="w-dvw flex flex-col items-center text-white text-sm space-y-3 
            md:text-xl 
            lg:text-[0.9rem]
            xl:text-[1rem]
            ">
                <div>Brands we've worked with</div>
                <hr class="w-10/12 
                           lg:w-10/12 
                           2xl:w-5/12"/>
                <div 
                class="w-11/12  bg-no-repeat 
                        h-16 bg-[length:420%_auto] bg-[position:left_0vh] bg-[url('../assets/images/brand-logos2.png')]
                        md:h-20 md:bg-[length:176%_auto] md:bg-[position:left_1vh]
                        lg:h-12 lg:bg-[length:100%_auto] lg:bg-[position:left_0vh]
                         xl:h-16 xl:bg-[length:100%_auto] xl:bg-[position:left_-1vh]"
                ></div>
            </div>

        </div>
    </div>                       
  </template>
