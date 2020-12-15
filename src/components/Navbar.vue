<template>
  <nav>
    <div class="navbar">
      <div class="row">
        <div class="col">
          <router-link :to="{ name: 'Home' }"> <span class="brand">Submersion </span> </router-link>
          <span class="material-icons">account_circle</span>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  nav{    background: #00c090;  border-bottom: 1px solid #404040   }

  nav {
    .navbar{ //.container
      padding: .2rem;
    }
    .router-link-active{text-decoration: none;}
    .brand{ font-size: 30px; line-height: 1; font-weight: bold; 
      &:hover{text-shadow:  0px 0px 18px  #bbf7e8; transition: .2s;}
    }
    
    .material-icons{ 
      border: 1px solid black; padding: .2rem; border-radius: 4px;
      background: #ccc;
      }
  }


</style>