<template>
  <section>
    <div   ref="p" class="container">
      <div  class="row">

        <div class="col-sm-8">
          <div @click="openArtc" v-for="card in cards" :key="card.id" class="card-a">
            <img src="https://picsum.photos/70" alt="">
            <h3>{{card.title}}</h3>
            <p>{{card.body}}</p>
          </div>
         
          
        </div>

        <div  class="col-sm-4">
          <div class="asideLinks-a">
            <h3>{{title}}</h3>
            <ul>
              <li v-for="link in links" :key="link.id" >
                <a :href="link.url" target="_blank" >{{link.text}}</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>




<script>
import {ref} from 'vue'

export default {
  props: ['cards', 'links'],
  setup(props){
    // console.log('homemenu',props.cards)

    // const openArtc = () =>{

    // }
    // return {openArtc}







  },
  methods:{ 
    openArtc(){
      this.$emit('openArtc' )
    }
  }



}
</script>


<style lang="scss" scoped>

  .card-a, .asideLinks-a{ background: #ddd; margin-bottom: 1rem;
    padding: 1rem 1rem; border-radius: 10px;
    text-align: left; 
  }
  .card-a{

    &:hover{background: #bbb; transform: scale(1.005); transition: .5s;}
    cursor: pointer;
    h3{ font-size: 1em; font-weight:bold; text-transform: uppercase;}
    p{margin-bottom: 5px; line-height: 1.2;}
    img{ width: auto; border-radius: 5px; float: right;} 
  }
  

</style>