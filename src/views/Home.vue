<template>
  <div>
    <Jumbo/>
    <HomeMenu @openArtc="changeArtcState" :cards="cardsjson" :links="linksjson"/>
    <ArticleSec  @openSignup="changeSignupState" @openLogin="changeLoginState" :cards="cardsjson" v-if="artcState"/>
    <Coming/>
    <Signup @closeSignup="changeSignupState" v-if="signupState" />
    <Login @closeLogin="changeLoginState" v-if="loginState" />
  </div>


</template>

<script>
import Jumbo from './home/Jumbo.vue'
import HomeMenu from './home/HomeMenu.vue'
import ArticleSec from './home/ArticleSec.vue'
import Coming from './home/Coming.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'

import { ref } from 'vue'
import getCards from '../composables/getCards'


export default {
  components: { Jumbo, HomeMenu, ArticleSec, Coming, Signup, Login },
  setup(){

    
    const {load, cardsjson, linksjson, error} = getCards();
    load("mainCards", cardsjson)
    load("asideLinks", linksjson);
    

    const artcState = ref(false)
    const changeArtcState = () =>{
      artcState.value = !artcState.value
    }

    const signupState = ref(false)
    const changeSignupState = () =>{
      signupState.value = !signupState.value
    }
    const loginState = ref(false)
    const changeLoginState = () =>{
      loginState.value = !loginState.value
    }


    return{
      cardsjson, linksjson, artcState, changeArtcState, 
      signupState, changeSignupState,
      loginState, changeLoginState
    }

  }


}
</script>

<style lang="scss" scoped>
 

</style>