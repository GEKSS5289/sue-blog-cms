import {ref,toRefs} from "vue";
import router from "@/router";

export const BlogInit = () => {

  window.scrollTo(0,0);
  const status = ref(true)

  setTimeout(() => {
    status.value = !status.value
  }, 200)




  return{
    status,
  }

}



