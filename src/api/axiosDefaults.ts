import axios from "axios";

axios.defaults.baseURL = 'https://bitwise-code-blog.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;