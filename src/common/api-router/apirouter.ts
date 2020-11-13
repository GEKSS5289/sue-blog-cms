const baseUrl = 'http://192.168.2.207:5288/';

const blogIndexApi = {
  dynamicApi: baseUrl + "blog/dynamic",
  readmeApi: baseUrl+"blog/readme"
};

const blogAdminApi = {
  articleApi:baseUrl+"admin/article",
  dynamicApi:baseUrl+"admin/dynamic",
  categoryApi:baseUrl+"admin/category",
  messageApi:baseUrl+"admin/message",
  messagePassApi:baseUrl+"admin/message/pass",
  messageFailApi:baseUrl+"admin/message/fail"
}


export {blogIndexApi,blogAdminApi}
