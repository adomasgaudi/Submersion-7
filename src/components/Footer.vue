<template>

  <footer>
    <div class="navbar" :class="{ center: (!linkoff) }">
      <div v-if="!linkoff" class="spLin">
        <div class="linkBoxa">
          <a href="" >Buy me a frappe </a>
          <span class="material-icons">free_breakfast</span>
          
        </div>
        <div class="linkBoxa">
          <a href="" >Pay for my wifi </a>
          <span class="material-icons">account_balance</span>
        </div>
      </div>
      <div v-if="linkoff" >
        <a @click="linkoff = false" :to="{ name: 'Home' }"> <span class="brand">Give me your money </span> </a>
      </div>


    </div>
  </footer>
</template>




<script>
import {ref} from 'vue'

export default {
  setup(){

    const linkoff = ref(true)
    return {linkoff}
  }

}
</script>




<style lang="scss" scoped>

  footer{    background: #222;  border-bottom: 1px solid #404040  ;
    padding-top: 4rem; padding-bottom: 6rem;  margin-top: 200px}

  footer {
    .navbar{ //.container
      padding: .2rem;
    }
  
    .router-link-active {   text-decoration: none; }
    .brand{ 
      font-size: 30px; line-height: 1; font-weight: bold; 
      &:hover{ text-decoration: none;
      text-shadow:  0px 0px 8px #00c090; transition: 2s;
      }
    }

    .material-icons{ 
      border: 1px solid black; padding: .2rem; border-radius: 4px;
      background: #ccc; color: white;
      }




  }
  .center{ justify-content: center;}
  .linkBoxa{display: flex; flex-flow: column;
   &:hover{ transform: rotate3d(1, 0, 0, 30deg); transition: 2s;}}
  .spLin{ 
    display: flex; width: 100%; justify-content: space-around; align-items: center;
    
  a{color: red; text-transform: uppercase; font-size: .8em; font-weight: bold; text-decoration: none; margin: 10px; display: inline-block} 
   }

</style>