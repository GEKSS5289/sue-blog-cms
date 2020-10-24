import {ref} from "vue";

export const BlogInit = () => {

  window.scrollTo(0,0);
  const status = ref(true)
  setTimeout(() => {
    status.value = !status.value
  }, 300)
  return{
    status
  }

}



