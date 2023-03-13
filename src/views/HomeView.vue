<template>
  <div class="home">
    <div v-if="showPosts">
      <PostsList :posts="posts"></PostsList>
    </div>
    <button @click="showPosts=!showPosts">Toggle post lists</button>
    <button @click="posts.pop()">Delete</button>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from 'vue'


export default {
  components: { PostsList },
  setup(){
    let showPosts = ref(true);
    let posts = ref([
      {title : "post title 1", 
       body : "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Harum ad earum libero veniam itaque, tenetur dolorum dolores, non nostrum inventore quod quae error at ipsam omnis illum velit alias consequuntur." , 
       id:1},
      {title : "post title 2", body : "lorem ipsum", id:2}
    ])
    return {posts, showPosts};
  }
}
</script>
