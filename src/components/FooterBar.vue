<template>
    <div id="footer" class="bg-brandgray w-screen h-16 fixed bottom-0 border-t-[2px] border-[#00d592] hidden md:block z-10">
        <div id="footer-container" class="flex flex-row justify-between items-center h-16 mx-20">
           
            <div id="back" class="text-[#f5ffde] text-md space-x-4" @click="$router.go(-1)">
                <fa-icon :icon="['fas', 'chevron-left']" class="text-sm"/>
                <span class="cursor-pointer">Back</span>
            </div>
          
            <div id="title" class="text-[#f5ffde] font-nave font-black text-[2.6rem]">Creative Studio</div><img class="w-[4.5rem]" src="../assets/images/logo.png">
        </div>
    </div>
</template>