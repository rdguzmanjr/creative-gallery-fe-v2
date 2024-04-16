<template>
   
          <div id="card-wrapper" class="absolute w-screen pb-20 flex flex-col items-center gap-y-16
          md:grid md:grid-cols-[repeat(2,minmax(320px,450px))] md:justify-items-center
          lg:right-0 lg:w-4/5 lg:justify-center
          xl:grid-cols-[repeat(3,minmax(300px,340px))] 
          2xl:grid-cols-[repeat(3,minmax(300px,390px))] ">
               <slot></slot>
          </div>
 
</template>
