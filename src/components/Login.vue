<template>
  <div @click="closeLogin" class="blackboard">
    <div class="container">
      <form action="">
        <label for="email"></label>
        <input type="email" >
        <label for="password"></label>
        <input type="password" >
        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    closeLogin(){this.$emit('closeLogin')}
  }
}
</script>

<style lang="scss" scoped>
  .blackboard{ position:fixed; display: flex; top:0;  width: 100vw; height: 100vh; background: rgba(0,0,0,0.5);}
  form{background: crimson; padding: 2rem;}
</style>