const baseUrl = 'http://localhost:5288/admin';



const blogAdminApi = {
  articleApi:baseUrl+"/article",
  dynamicApi:baseUrl+"/dynamic",
  categoryApi:baseUrl+"/category",
  messageApi:baseUrl+"/message",
  messagePassApi:baseUrl+"/message/pass",
  messageFailApi:baseUrl+"/message/fail",
  fileApi:baseUrl+"/file"
}


export {blogAdminApi}
