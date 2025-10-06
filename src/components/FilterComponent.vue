<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCreativeStore } from '@/stores/creative'

const router = useRouter()
const route = useRoute()
const creativeStore = useCreativeStore()

// define models
const search = defineModel('search')
const category_search = defineModel('category_search')
const advertiser_search = defineModel('advertiser_search')
const product_search = defineModel('product_search')
const kpi_search = defineModel('kpi_search')
const whatsnew_search = defineModel('whatsnew_search')

// filters
const category_open = ref(false)
const selected_categories = ref([])

const advertiser_open = ref(false)
const selected_advertisers = ref([])

const product_open = ref(false)
const selected_products = ref([])

const kpi_open = ref(false)
const selected_kpis = ref([])

const whatsnew_open = ref(false)

// PROPS
const props = defineProps({
  categories: { type: Array, default: () => [] },
  advertisers: { type: Array, default: () => [] },
  products: { type: Array, default: () => [] },
  kpis: { type: Array, default: () => [] },
});

// --- COMPUTED PARAM STRING ---
const generated_params = computed(() => {
  const a = !selected_categories.value.length ? '0' : selected_categories.value.toString()
  const b = !selected_advertisers.value.length ? '0' : selected_advertisers.value.toString()
  const c = !selected_products.value.length ? '0' : selected_products.value.toString()
  const d = !selected_kpis.value.length ? '0' : selected_kpis.value.toString()
  return `${a}/${b}/${c}/${d}`
})

const noneselected = computed(() => {
  const a = !selected_categories.value.length
  const b = !selected_advertisers.value.length
  const c = !selected_products.value.length
  const d = !selected_kpis.value.length
  return a && b && c && d
})

// --- WATCH PARAMS: FETCH + UPDATE URL ---
watch(
  [selected_categories, selected_advertisers, selected_products, selected_kpis],
  ([cats, ads, prods, kpis]) => {
    const query = {}

    if (cats.length) query.categories = cats.join(',')
    if (ads.length) query.advertisers = ads.join(',')
    if (prods.length) query.products = prods.join(',')
    if (kpis.length) query.kpis = kpis.join(',')

    // sync URL (replace = no history spam)
    router.replace({ query })

    // trigger your creative filtering
    creativeStore.getFilteredCreative(generated_params.value)
  },
  { deep: true }
)

// --- RESTORE FILTERS FROM URL ---
onMounted(() => {
  const { categories, advertisers, products, kpis } = route.query

  if (categories) selected_categories.value = categories.split(',')
  if (advertisers) selected_advertisers.value = advertisers.split(',')
  if (products) selected_products.value = products.split(',')
  if (kpis) selected_kpis.value = kpis.split(',')

  creativeStore.getFilteredCreative(generated_params.value)
})

// --- HANDLERS ---
function handler() {
  creativeStore.getSearchedWhatsNew()
}

const handlekeypress = (e) => {
  if (e.key === 'Enter') creativeStore.getSearchedCreative(search.value)
}

const clearFilter = () => {
  selected_categories.value = []
  selected_advertisers.value = []
  selected_products.value = []
  selected_kpis.value = []

  category_open.value = false
  advertiser_open.value = false
  product_open.value = false
  kpi_open.value = false
  whatsnew_open.value = false

  // clear the URL
  router.replace({ query: {} })
}

// --- FILTER SEARCHING ---
const categories = computed(() => {
  const str = (category_search.value || '').toLowerCase();
  return (props.categories || [])
    .filter(obj => obj && obj.name && typeof obj.name === 'string')
    .filter(obj =>
      obj.name.toLowerCase().includes(str) &&
      obj.name.toLowerCase() !== 'bls' &&
      obj.name.toLowerCase() !== 'new'
    );
});

const advertisers = computed(() => {
  const str = (advertiser_search.value || '').toLowerCase();
  return (props.advertisers || [])
    .filter(obj => obj && obj.name && typeof obj.name === 'string')
    .filter(obj => obj.name.toLowerCase().includes(str));
});

const products = computed(() => {
  const str = (product_search.value || '').toLowerCase();
  return (props.products || [])
    .filter(obj => obj && obj.name && typeof obj.name === 'string')
    .filter(obj =>
      obj.name.toLowerCase().includes(str) &&
      obj.name.toLowerCase() !== 'big box' &&
      obj.name.toLowerCase() !== 'vertical video' &&
      obj.name.toLowerCase() !== 'interscroller'
    );
});

const kpis = computed(() => {
  const str = (kpi_search.value || '').toLowerCase();
  return (props.kpis || [])
    .filter(obj => obj && obj.name && typeof obj.name === 'string')
    .filter(obj => obj.name.toLowerCase().includes(str));
});
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
       
        <!-- whatsnew -->
        <div class="p-2 bg-brandorange mb-3 relative rounded-full flex items-center justify-center" @click="handler">
            <p class= " text-white font-bold">What's new?</p>
            <!-- <fa-icon :icon="['fas', 'list']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 left-3"/>
            <fa-icon :icon="['fas', 'chevron-down']" class="transition-transform ease-out duration-[500ms] backdrop:relative text-brandgreen text-xl absolute top-2 right-3" 
            :class="whatsnew_open?'-rotate-180':'rotate-0'"/> -->
       </div>
       <!-- <div class="space-y-3 mb-3" :class="whatsnew_open?'block':'hidden'">
            <input v-model="whatsnew_search" type="search" id="default-search" class="block w-full p-1 ps-5 text-md text-white bg-black border focus:border-brandgreen focus:ring-brandgreen rounded-md outline-none"  
            placeholder="Search New Products" required />
            <p class="text-white text-md" v-if="whatsnews.length==0">No new products to show</p>
            <div class="flex items-center" v-for="whatsnew in whatsnews" :key="whatsnew">
                <input :id="`whatsnew-link-${whatsnew.name}`" v-model="selected_products" type="checkbox" :value="`${whatsnew.id}`" class="w-4 h-4 text-brandgreen bg-gray-100 border-gray-300 rounded-lg focus:ring-brandgreen focus:ring-2 accent-brandgreen outline-none">
                <label :for="`whatsnew-link-${whatsnew.name}`" class="ms-2 text-md">{{whatsnew.name}}</label>
            </div>
        </div> -->

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