<script setup>
import {ref,computed,watch} from 'vue'
import { useCreativeStore } from '@/stores/creative'

const search = defineModel('search');
const category_search = defineModel('category_search');
const advertiser_search = defineModel('advertiser_search');
const product_search = defineModel('product_search');
const kpi_search = defineModel('kpi_search');

category_search.value=""; 
advertiser_search.value="";
product_search.value="";
kpi_search.value="";

const creativeStore= useCreativeStore();

const category_open=ref(false);
const selected_categories = ref([])

const advertiser_open=ref(false);
const selected_advertisers = ref([])


const product_open=ref(false);
const selected_products= ref([])


const kpi_open=ref(false);
const selected_kpis = ref([])

const generated_params=computed(()=>{
     let a = !selected_categories.value.length?'0':selected_categories.value.toString()
     let b = !selected_advertisers.value.length?'0':selected_advertisers.value.toString()
     let c = !selected_products.value.length?'0':selected_products.value.toString()
     let d = !selected_kpis.value.length?'0':selected_kpis.value.toString()
     return a+'/'+b+'/'+c+'/'+d;
})
const noneselected=computed(()=>{
     let a = !selected_categories.value.length;
     let b = !selected_advertisers.value.length;
     let c = !selected_products.value.length;
     let d = !selected_kpis.value.length;
     return (a&&b&&c&&d);
})


watch(generated_params, (newValue, oldValue) => {
   
    creativeStore.getFilteredCreative(newValue);

})

const categories=computed(()=>{
    const str=category_search.value.toLowerCase();
    return props.categories.filter((obj)=>{
         return  obj.name.toLowerCase().includes(str) && (obj.name.toLowerCase()!=='bls')
    });

})


const advertisers=computed(()=>{
    const str=advertiser_search.value.toLowerCase();
    return props.advertisers.filter((obj)=>obj.name.toLowerCase().includes(str));

})

const products=computed(()=>{
   const str=product_search.value.toLowerCase();
   return props.products.filter((obj)=>{

    return obj.name.toLowerCase().includes(str)&&(obj.name.toLowerCase()!=='big box')
    
    });
})

const kpis=computed(()=>{
    const str=kpi_search.value.toLowerCase();
    return props.kpis.filter((obj)=>obj.name.toLowerCase().includes(str));

})


const handlekeypress=(e)=>{
    if(e.key=="Enter")
    creativeStore.getSearchedCreative(search.value);
}
const clearFilter=()=>{
    selected_categories.value=[];
    selected_advertisers.value=[];
    selected_products.value=[];
    selected_kpis.value=[];
    category_open.value=false;
    advertiser_open.value=false;
    product_open.value=false;
    kpi_open.value=false;
}
const props=defineProps({categories:Array,advertisers:Array,products:Array,kpis:Array})
</script>

<template>
    <div id="side-filter" class="absolute text-white bg-brandgray ml-0 p-6 w-1/5 rounded-md hidden lg:block select-none">
        <div class="relative">
            <fa-icon :icon="['fas', 'magnifying-glass']" class="text-brandgreen text-xl absolute top-2 left-3" />
            <input v-model="search" type="search" id="default-search" class="block w-full p-1 ps-10 text-lg text-white bg-black border focus:border-brandgreen focus:ring-brandgreen rounded-md outline-none"  placeholder="Search" required @keypress="handlekeypress" />
        </div>
        <div class="mt-5 mb-2 relative">
            <fa-icon :icon="['fas', 'filter']" class="text-brandgreen text-xl absolute top-1 left-3"/>
            <p class="text-gray-300 text-lg ps-10">Filters</p>
            <p v-if="!noneselected" class="absolute right-0 top-0 px-2 rounded border border-brandgreen text-white hover:text-black hover:bg-brandgreenlight active:bg-brandgreendark cursor-pointer text-lg" @click="clearFilter">Clear All</p>
        </div>
        <hr class="border-gray-300 mb-3">
       
       <!-- category -->
        <div class="p-2 bg-gray-800 mb-3 relative" @click.prevent="category_open=!category_open">
            <p class="ps-9">Categories</p>
            <fa-icon :icon="['fas', 'list']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 left-3"/>
            <fa-icon :icon="['fas', 'chevron-down']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 right-3" 
            :class="category_open?'-rotate-180':'rotate-0'"/>
       </div>
       <div class="space-y-3 mb-3" :class="category_open?'block':'hidden'">
            <input v-model="category_search" type="search" id="default-search" class="block w-full p-1 ps-5 text-md text-white bg-black border focus:border-brandgreen focus:ring-brandgreen rounded-md outline-none"  
            placeholder="Search Categories" required />
            <p class="text-white text-md" v-if="categories.length==0">No categories to show</p>
            <div class="flex items-center" v-for="category in categories" :key="category">
                <input :id="`category-link-${category.name}`" v-model="selected_categories" type="checkbox" :value="`${category.id}`" class="w-4 h-4 text-brandgreen bg-gray-100 border-gray-300 rounded-lg focus:ring-brandgreen focus:ring-2 accent-brandgreen outline-none">
                <label :for="`category-link-${category.name}`" class="ms-2 text-md">{{category.name}}</label>
            </div>
        </div>


        <!-- advertiser -->
        <div class="p-2 bg-gray-800 mb-3 relative" @click.prevent="advertiser_open=!advertiser_open">
            <p class="ps-9">Advertisers</p>
            <fa-icon :icon="['fas', 'list']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 left-3"/>
            <fa-icon :icon="['fas', 'chevron-down']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 right-3" 
            :class="advertiser_open?'-rotate-180':'rotate-0'"/>
       </div>
       <div class="space-y-3 mb-3" :class="advertiser_open?'block':'hidden'">
            <input v-model="advertiser_search" type="search" id="default-search" class="block w-full p-1 ps-5 text-md text-white bg-black border focus:border-brandgreen focus:ring-brandgreen rounded-md outline-none"  
            placeholder="Search Advertisers" required />
            <p class="text-white text-md" v-if="advertisers.length==0">No advertisers to show</p>
            <div class="flex items-center" v-for="advertiser in advertisers" :key="advertiser">
                <input :id="`advertiser-link-${advertiser.name}`" v-model="selected_advertisers" type="checkbox" :value="`${advertiser.id}`" class="w-4 h-4 text-brandgreen bg-gray-100 border-gray-300 rounded-lg focus:ring-brandgreen focus:ring-2 accent-brandgreen outline-none">
                <label :for="`advertiser-link-${advertiser.name}`" class="ms-2 text-md">{{advertiser.name}}</label>
            </div>
        </div>

        <!-- products -->
        <div class="p-2 bg-gray-800 mb-3 relative" @click.prevent="product_open=!product_open">
            <p class="ps-9">Products</p>
            <fa-icon :icon="['fas', 'list']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 left-3"/>
            <fa-icon :icon="['fas', 'chevron-down']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 right-3" 
            :class="product_open?'-rotate-180':'rotate-0'"/>
       </div>
       <div class="space-y-3 mb-3" :class="product_open?'block':'hidden'">
            <input v-model="product_search" type="search" id="default-search" class="block w-full p-1 ps-5 text-md text-white bg-black border focus:border-brandgreen focus:ring-brandgreen rounded-md outline-none"  
            placeholder="Search Products" required />
            <p class="text-white text-md" v-if="products.length==0">No products to show</p>
            <div class="flex items-center" v-for="product in products" :key="product">
                <input :id="`product-link-${product.name}`" v-model="selected_products" type="checkbox" :value="`${product.id}`" class="w-4 h-4 text-brandgreen bg-gray-100 border-gray-300 rounded-lg focus:ring-brandgreen focus:ring-2 accent-brandgreen outline-none">
                <label :for="`product-link-${product.name}`" class="ms-2 text-md">{{product.name}}</label>
            </div>
        </div>

        <!-- kpis -->
        <div class="p-2 bg-gray-800 mb-3 relative" @click.prevent="kpi_open=!kpi_open">
            <p class="ps-9">KPIs</p>
            <fa-icon :icon="['fas', 'list']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 left-3"/>
            <fa-icon :icon="['fas', 'chevron-down']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 right-3" 
            :class="kpi_open?'-rotate-180':'rotate-0'"/>
       </div>
       <div class="space-y-3 mb-3" :class="kpi_open?'block':'hidden'">
            <input v-model="kpi_search" type="search" id="default-search" class="block w-full p-1 ps-5 text-md text-white bg-black border focus:border-brandgreen focus:ring-brandgreen rounded-md outline-none"  
            placeholder="Search KPIs" required />
            <p class="text-white text-md" v-if="kpis.length==0">No kpis to show</p>
            <div class="flex items-center" v-for="kpi in kpis" :key="kpi">
                <input :id="`kpi-link-${kpi.name}`" v-model="selected_kpis" type="checkbox" :value="`${kpi.id}`" class="w-4 h-4 text-brandgreen bg-gray-100 border-gray-300 rounded-lg focus:ring-brandgreen focus:ring-2 accent-brandgreen outline-none">
                <label :for="`kpi-link-${kpi.name}`" class="ms-2 text-md">{{kpi.name}}</label>
            </div>
        </div>
    </div>
</template>