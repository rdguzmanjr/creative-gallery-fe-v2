<template>
    <div id="footer" class="bg-brandgray w-screen h-16 fixed bottom-0 border-t-[1px] border-white hidden md:block z-10">
        <div id="footer-container" class="flex flex-row justify-between items-center h-16 mx-20">
           
            <div id="back" class="text-white text-md space-x-4" @click="$router.go(-1)">
                <fa-icon :icon="['fas', 'chevron-left']" class="text-sm"/>
                <span class="cursor-pointer">Back</span>
            </div>
          
            <div id="title" class="text-white font-volkorn font-black text-4xl">Creative Ad Gallery</div><img class="w-28" src="../assets/images/logo.png">
        </div>
    </div>
</template>