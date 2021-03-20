import request from '@/utils/request'
//维修相关接口

//添加品牌
export function addBrand(data) {
    return request({
        url:'/coBrand/add',
        method:'post',
        data:data
    })
}
//获取所有维修品牌列表
export function getBrandAll() {
    return request({
      url:'/coBrand/all',
      method:'get'
    })
}
//分页获取维修品牌列表
export function getBrandList(params) {
    return request({
      url:'/coBrand/list',
      method:'get',
      params:params
    })
}
//获取维修品牌
export function getBrand(id) {
    return request({
      url:'/coBrand/' + id,
      method:'get'
    })
}
//修改品牌
export function updateBrand(id,data) {
    return request({
        url:'/coBrand/' + id,
        method:'post',
        data:data
    })
}


//添加品牌系列
export function addSeries(data) {
    return request({
        url:'/coSeries/add',
        method:'post',
        data:data
    })
}
//分页获取维修品牌系列列表
export function getSeriesList(params) {
    return request({
      url:'/coSeries/list',
      method:'get',
      params:params
    })
}

//获取品牌下的系列编号
export function getBrandSeriesList(id) {
    return request({
      url:'/coSeries/list/'+id,
      method:'get'
    })
}

//获取维修品牌系列
export function getSeries(id) {
    return request({
      url:'/coSeries/' + id,
      method:'get'
    })
}
//修改品牌系列
export function updateSeries(id,data) {
    return request({
        url:'/coSeries/' + id,
        method:'post',
        data:data
    })
}


