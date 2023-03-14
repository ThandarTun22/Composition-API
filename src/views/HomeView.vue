<template>
  <div class="home"> 
    <div v-if="error">
          {{error}}
    </div>
      <div v-if="posts.length>0">
        <PostsList :posts="posts"></PostsList>
      </div>
      <div v-else>
        <SpinnerLoad></SpinnerLoad>
      </div>
  </div>
</template>

<script>
import SpinnerLoad from '../components/SpinnerLoad'
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts'


export default {
  components: {
    SpinnerLoad, PostsList },
  setup(){
    let {posts, error, load} = getPosts()
    load();
    return {posts, error};
  }
}
</script>

<style>
    .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>>
