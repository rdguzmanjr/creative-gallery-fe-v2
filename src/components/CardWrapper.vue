<template>
   
          <div id="card-wrapper" class="absolute w-screen pb-20 flex flex-col items-center gap-y-16
          md:grid md:grid-cols-[repeat(2,minmax(320px,450px))] md:justify-items-center
          lg:right-0 lg:w-4/5
          xl:grid-cols-[repeat(3,minmax(320px,430px))] 
          2xl:justify-items-end">
               <slot></slot>
          </div>
 
</template>
