import { defineStore } from 'pinia'
import {ref,computed} from 'vue'
import axios from 'axios';

// will fill creative cards
export const useCreativeStore = defineStore('creative', () => {

  const creatives = ref([])

  let http_string = "";

  let numpage=1;
  
  let maxpage=1;

  //https://creative.nativetouch.io/api/creatives/
  async function getCreativeList() {
    try {
      numpage=1; //reset page number
      http_string="https://creative.nativetouch.io/api/creatives";
      const response = await axios.get(http_string);
      creatives.value=response.data.data;
      maxpage = response.data.meta.last_page;
      console.log('getting creative...'+maxpage);
    } catch (error) {
      console.error(error);
    }
  }

  async function getFilteredCreative(str) {
    try {
      numpage=1; //reset page number
      creatives.value=[]; //reset creatives number just to show animation
      http_string="https://creative.nativetouch.io/api/creatives/filter/"+str;
      const response = await axios.get(http_string);
      creatives.value=response.data.data;
      maxpage =response.data.meta.last_page;
      console.log('getting filtered creatives... '+maxpage);
    } catch (error) {
      console.error(error);
    }
  }

  async function getSearchedCreative(str) {
    try {
      numpage=1; //reset page number
      creatives.value=[]; //reset creatives number just to show animation
      http_string="https://creative.nativetouch.io/api/creatives/search/"+str;
      const response = await axios.get(http_string);
      creatives.value=response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  //https://creative.nativetouch.io/api/creatives/search/gsm
  async function loadMoreCreative(){
     try {
      if(maxpage>numpage){
          numpage++;
          const response = await axios.get(http_string+'?page='+numpage);
          console.log('getting more creatives... page:'+numpage);
          creatives.value.push(...response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { creatives,numpage, getCreativeList, getFilteredCreative , loadMoreCreative,getSearchedCreative }
 
})


// for the creative preview page
export const useSingleCreativeStore= defineStore('singlecreative', () => {

  const name = ref(null)
  const ids = ref(null)
  const format = ref(null)
  const category = ref(null)
  const kpi = ref(null)
  const spec = ref(null)
  const srctype = ref(null)
  const srcurl = ref(null)

  async function getCreativeById(id) {
    try {
      const response = await axios.get("https://creative.nativetouch.io/api/creatives/"+id);
      name.value=response.data.name;
      ids.value=response.data.id;
      format.value=response.data.format.name;
      category.value=response.data.categories[0].name;
      kpi.value=response.data.format.benchmarks.map(item=>item.name).join(',');
      spec.value=response.data.specs.path;
      srctype.value=response.data.typeObj.type;
      srcurl.value=response.data.typeObj.path;
      console.log('getting singe creative... '+id);
    } catch (error) {
      console.error(error);
    }
  }

  return { name,srctype,srcurl,ids ,format, category,kpi,spec,getCreativeById}
});


// will fill filters
export const useFilterStore= defineStore('filter', () => {
  const categories = ref([])
  const advertisers = ref([])
  const products = ref([])
  const kpis = ref([])

  async function getFilterList() {
    try {
      console.log('getting filters...');

      const response = await axios.get('https://creative.nativetouch.io/api/get_attr');
      categories.value=response.data.categories;
      advertisers.value=response.data.advertisers;
      products.value=response.data.formats;
      kpis.value=response.data.benchmark;
      
    } catch (error) {
      console.error(error);
    }
  }


  return { categories, advertisers ,products, kpis ,getFilterList}
});





