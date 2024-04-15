<script setup>
    import QRCode from 'qrcode'
    import {ref,onMounted} from 'vue'

    const img=ref(null);

    onMounted(()=>{
        QRCode.toDataURL("https://gallery.nativetouch.com/creative/" + props.creativeId)
    
        .then(url => {
            img.value=url;
        })
        .catch(err => {
            console.error(err)
        })
    })
    
    const props=defineProps({creativeId:Number})

</script>


<template>
    <div class="flex justify-center">
        <img :src="img"/>
    </div>
</template>