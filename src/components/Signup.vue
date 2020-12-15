<template>
  <div @click="closeSignup" class="blackboard">
    <div class="container">
      <form action="">
        <label for="email"></label>
        <input type="email" >
        <label for="password"></label>
        <input type="password" >
        <button>Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    closeSignup(){this.$emit('closeSignup')}
  }
}
</script>

<style lang="scss">
  .blackboard{ position:fixed; display: flex; top:0;  width: 100vw; height: 100vh; background: rgba(0,0,0,0.5);}
  form{background: white; padding: 2rem;}
</style>