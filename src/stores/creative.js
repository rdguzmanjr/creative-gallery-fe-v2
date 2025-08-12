import { defineStore } from 'pinia'
import {ref,computed} from 'vue'
import axios from 'axios';

// will fill creative cards
export const useCreativeStore = defineStore('creative', () => {

  const creatives = ref([])

  let http_string = "";

  let numpage=1;
  
  let maxpage=1;
  let view = "cardview"

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

  async function getSearchedWhatsNew() {
    try {
      numpage=1; //reset page number
      creatives.value=[]; //reset creatives number just to show animation
      http_string="https://creative.nativetouch.io/api/creatives/search/whatsnew";
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

  return { creatives,numpage, view, getCreativeList, getFilteredCreative , loadMoreCreative,getSearchedCreative, getSearchedWhatsNew }
 
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
  const isint = ref(null)
  const width = ref(null)
  const height = ref(null)
  const whatsnew = ref(null)
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
      isint.value=response.data.format.size.banner.responsive;
      width.value=response.data.format.size.banner.width;
      height.value=response.data.format.size.banner.height;
      whatsnew.value = response.data.tags;
      
      console.log('getting single creative... '+id);
    } catch (error) {
      console.error(error);
    }
  }
  function reset(){
      name.value=null;
      ids.value=null;
      format.value=null;
      category.value=null;
      kpi.value=null;
      spec.value=null;
      srctype.value=null;
      srcurl.value=null;
      isint.value=null;
      width.value=null;
      height.value=null;
      whatsnew.value=null;
  }
  return { whatsnew,name,srctype,srcurl,ids ,format, category,kpi,spec,isint,width,height,getCreativeById,reset}
});


// will fill filters
export const useFilterStore= defineStore('filter', () => {
  const categories = ref([])
  const advertisers = ref([])
  const products = ref([])
  const kpis = ref([])
  const whatsnews = ref([])

  async function getFilterList() {
    try {
      console.log('getting filters...');

      const response = await axios.get('https://creative.nativetouch.io/api/get_attr');
      categories.value=response.data.categories;
      advertisers.value=response.data.advertisers;
      products.value=response.data.formats;
      kpis.value=response.data.benchmark;
      // whatsnews.value=response.data.tags[1];
    } catch (error) {
      console.error(error);
    }
  }


  return { whatsnews, categories, advertisers ,products, kpis, getFilterList}
});





