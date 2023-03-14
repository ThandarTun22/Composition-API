<template>
  <h1>Detail {{id}}</h1>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
  <div v-else>
    <SpinnerLoad></SpinnerLoad>
  </div>
</template>

<script>
import SpinnerLoad from '../components/SpinnerLoad'
import getPost from "../composables/getPost"
export default {
  components: { SpinnerLoad },
    props : ["id"],
    setup(props){
        let {post, error, load} = getPost(props.id);  //{post, error, load}
        load();
        return {post, error}
    }
}
</script>

<style>

</style>