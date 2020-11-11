import {ref} from "vue";
import router from "@/router";

export const BlogInit = () => {

  // window.scrollTo(0,0);
  const status = ref(true)
  const scaleStatus = ref(true)
  setTimeout(() => {
    status.value = !status.value
  }, 200)


  setTimeout(() => {
    scaleStatus.value = !scaleStatus.value
  }, 500)


  return{
    status,
    scaleStatus
  }

}



