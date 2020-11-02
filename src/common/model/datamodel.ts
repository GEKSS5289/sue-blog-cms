export interface PathModel {
  path:string
  name:string
}

export interface ArticleModel {
  title:String,
  content:String,
  categoryId:number,
  authorId:number
}

export interface  ArticeDescModel {
  id:number,
  title:string,
  createdTime:Date
}

export interface DynamicModel{

  content:string
  dyImg?:string
  dyVideo?:string
  uid:number
  mood:string
}

export interface Dynamic {
  id:number
  content: string,
  createdTime: Date,
  mood: string
}

export interface UpdateDynamic {

  content: string,
  mood: string
}


