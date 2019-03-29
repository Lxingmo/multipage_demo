// 默认图片地址
if( process.env.NODE_ENV === 'production' ){
    // axios.defaults.baseURL = "http://"+location.host+"/"
    ;
}else{
    axios.defaults.baseURL = "/apis"
}
