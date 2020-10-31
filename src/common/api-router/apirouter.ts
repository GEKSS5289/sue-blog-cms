const baseUrl = 'http://192.168.2.207:5288/';

const blogIndexApi = {
  dynamicApi: baseUrl + "blog/dynamic",
  readmeApi: baseUrl+"blog/readme"
};

const blogAdminApi = {
  articleApi:baseUrl+"admin/article"

}


export {blogIndexApi,blogAdminApi}
