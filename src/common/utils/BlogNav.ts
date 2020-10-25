import {PathModel} from "@/common/interface/datamodel";
import router from "@/router";
import {ref} from "vue";

export const BlogNav = ()=> {


  function clickRouter(path:string,name:string) {
    const temp:PathModel = {
      path:path,
      name:name
    }
    localStorage.setItem(name,path)
  }

  function close(name:string) {



    let flag = false
    for(let item in localStorage){
      if(item.indexOf('article')||
        item.indexOf('iss')||
        item.indexOf('dyna')||
        item.indexOf('message')||
        item.indexOf('log')||
        item.indexOf('file')
      ){
        console.log('sfsa')
        flag = true
      }
    }
    console.log(localStorage.getItem('sue-me'))
    if(localStorage.getItem('sue-me')==''&&!flag){
      console.log('fas')
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

