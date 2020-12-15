<template>
  <div>
    <Jumbo/>
    <HomeMenu @openArtc="changeArtcState" :cards="cardsjson" :links="linksjson"/>
    <ArticleSec :cards="cardsjson" v-if="artcState"/>
    <Coming/>
  </div>


</template>

<script>
import Jumbo from './home/Jumbo.vue'
import HomeMenu from './home/HomeMenu'
import ArticleSec from './home/ArticleSec'
import Coming from './home/Coming'

import { ref } from 'vue'
import getCards from '../composables/getCards'


export default {
  components: { Jumbo, HomeMenu, ArticleSec, Coming },
  setup(){

    
    const {load, cardsjson, linksjson, error} = getCards();
    load("mainCards", cardsjson)
    load("asideLinks", linksjson);
    

    const artcState = ref(false)
    const changeArtcState = () =>{
      artcState.value = !artcState.value
    }



    return{cardsjson, linksjson, artcState, changeArtcState}
  }


}
</script>

<style lang="scss" scoped>
 

</style>