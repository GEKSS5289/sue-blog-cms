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

export interface ArticeDescModel {
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


export interface Category{
  id:number
  categoryName:string
  categoryImg:string;
}

export interface CategoryModel{
 categoryName:string;
 categoryImg:string;
}


export interface Message{
  id:number;
  content:string;
  createdTime:Date;
}



export interface FileModel{
  id:number,
  fileName:string,
  fileSize:number,
  createdTime: Date
}
