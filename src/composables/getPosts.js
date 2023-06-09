import { ref } from 'vue'
import {db} from "../firebase/config"

let getPosts = ()=>{
    let posts = ref([]);
    let error = ref("");
    let load = async()=>{
      try{
        let res=await db.collection("posts").orderBy("created_at","desc").get()
        // console.log(res.docs)
        posts.value = res.docs.map((doc)=>{
            // console.log(doc.data())
            console.log(doc.id)
            return{id:doc.id,...doc.data()}
        })
      }catch(err){
          // console.log(error.message)
          error.value = err.message
      }     
    }
    return {posts, error, load};
}
export default getPosts;