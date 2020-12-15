<template>
  <div>

    <h1>{{cards[0].title}}</h1>
    <p>{{cards[0].body}}</p>
    <iframe  src="https://www.youtube.com/embed/sgjPByUamFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div>
    <form >
      <label for=""></label>
      <input type="text">
      <button type="submit">submit</button>
      <p class="acc"><span @click="openSignup" >signup</span> <span @click="openLogin">login</span> </p>
    </form>
  </div>

</template>




<script>
import Coments from '../Coments.vue'
export default {
props:['cards'],
components:{Coments},
setup(props){

  // const openSignup = () =>{

  // }

  // return{openSignup}
  
},
methods: {
  openSignup(){this.$emit('openSignup')},
  openLogin(){ this.$emit('openLogin')}
}


}
</script>




<style lang="scss" scoped>

  // .container{widt}
  form .acc span{text-decoration: underline; cursor: pointer; }
  iframe{ width: 100%; height: 300px;}

</style>