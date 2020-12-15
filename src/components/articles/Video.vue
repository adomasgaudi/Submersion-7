<template>
  <h1>{{cards[0].title}}</h1>
  <p>{{cards[0].body}}</p>
  <iframe  src="https://www.youtube.com/embed/sgjPByUamFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>




<script>
export default {
props:['cards'],
setup(props){
  console.log('video here', props.cards)
}


}
</script>




<style lang="scss" scoped>

  // .container{widt}
  iframe{ width: 100%; height: 300px;}

</style>