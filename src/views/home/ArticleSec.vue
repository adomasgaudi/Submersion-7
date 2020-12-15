<template>
  <section id="artcsec">
    <div class="container">
      <!-- <div v-for="card in cards" :key="card.id">
        <h1>{{card.title}}</h1>
        <p>{{card.text}}</p>
      </div> -->
      <Video @openSignup="openSignup" @openLogin="openLogin" :cards="cards"/>
    </div>
  </section>
</template>

<script>
import Video from '../../components/articles/Video.vue'

export default {  
  props: ['cards'],
  components: {Video},
  setup(props){
    console.log('articleSec', props.cards)
  },
  methods:{
    openSignup(){this.$emit('openSignup')},
    openLogin(){this.$emit('openLogin')}
  }

}
</script>

<style lang="scss" scoped>

section{ background: rgb(221, 137, 137);}
.container{background: #eee;border-radius: 10px; padding: 2rem; text-align: left;}


</style>