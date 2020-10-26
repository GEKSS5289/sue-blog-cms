import {PathModel} from "@/common/interface/datamodel";
import router from "@/router";
import {ref} from "vue";

export const BlogNav = ()=> {


  function clickRouter(path:string,name:string) {
    localStorage.setItem(name,path)
  }

  function close(name:string) {

    let flag = false
    for(let item in localStorage){
      if(item.indexOf('sue')&&!item.indexOf('sue-me')){
        console.log('sfsa')
        flag = true
      }
    }


    if(localStorage.getItem('sue-me')==''&&!flag){
      localStorage.setItem('sue-me','/admin/sue')
    }else{
      localStorage.removeItem(name)
    }

  }

  return{
    clickRouter,
    close
  }
}

export function routerNav() {
  const status = ref(false)
  for(let item in localStorage){
    if(item.indexOf('sue')!== -1){
      status.value = true
    }
  }
  if(!status.value){
    router.push('/admin/sue')
    localStorage.setItem('sue-me','/admin/sue')
  }
  return status
}

