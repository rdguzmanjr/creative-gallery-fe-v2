<script setup>
const props=defineProps({show:Boolean})
</script>
<template>
    <div id="htmlwrapperlayout" class="space-y-4 w-full h-full overflow-x-hidden bg-white">
        <div v-if="!show" id="t-header" class="bg-gray-200 h-12 flex flex-row items-center justify-between px-3">
            <div class="flex flex-row space-x-2 items-center">
                <div id="t-logo" class="bg-white size-6 rounded-2xl"></div>
                <div id="t-name" class="bg-white w-[100px] h-[10px]"></div>
            </div>
            <div id="t-burger" class="flex flex-col space-y-1">
                <div id="t-logo" class="bg-white w-[30px] h-[4px]"></div>
                <div id="t-logo" class="bg-white w-[30px] h-[4px]"></div>
                <div id="t-logo" class="bg-white w-[30px] h-[4px]"></div>
            </div>
        </div>
        <slot></slot>
        <div v-if="!show" id="sections" class="flex flex-col items-center space-y-5">
            <div class="flex flex-col space-y-2 w-full px-5">
                <div id="headline" class="bg-gray-200 h-[200px]"></div>
                <div id="headline-txt" class="bg-gray-200 h-[10px]"></div>
                <div id="headline-txt" class="bg-gray-200 h-[10px]"></div>
                <div id="headline-txt" class="bg-gray-200 h-[10px]"></div>
                <div id="headline-txt" class="bg-gray-200 w-4/6 h-[10px]"></div>
            </div>
            <div id="list-article" class="flex flex-col space-y-5 w-full">
                <div class="flex flex-row space-x-1 w-full px-5">
                    <div id="thumb1" class="bg-gray-200 w-4/6 h-[100px]"></div>
                    <div class="flex flex-col space-y-2 w-full px-5">
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 w-4/6 h-[8px]"></div>
                    </div>
                </div>
                <div class="flex flex-row space-x-1 w-full px-5">
                    <div id="thumb1" class="bg-gray-200 w-4/6 h-[100px]"></div>
                    <div class="flex flex-col space-y-2 w-full px-5">
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 w-4/6 h-[8px]"></div>
                    </div>
                </div>
                <div class="flex flex-row space-x-1 w-full px-5">
                    <div id="thumb1" class="bg-gray-200 w-4/6 h-[100px]"></div>
                    <div class="flex flex-col space-y-2 w-full px-5">
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 w-4/6 h-[8px]"></div>
                    </div>
                </div>
                <div class="flex flex-row space-x-1 w-full px-5">
                    <div id="thumb1" class="bg-gray-200 w-4/6 h-[100px]"></div>
                    <div class="flex flex-col space-y-2 w-full px-5">
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 h-[8px]"></div>
                        <div id="list" class="bg-gray-200 w-4/6 h-[8px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>