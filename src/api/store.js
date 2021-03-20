import request from '@/utils/request'

//分页查询门店列表数据
//name	pageNum	 pageSize
export function getStoreList(params) {
  return request({
    url: '/loanApplication/list',
    method: 'get',
    params: params
  })
}

//添加门店信息
export function addStore(data) {
  return request({
    url:'/loanApplication/add',
    method:'post',
    data:data
  })
}
//修改门店信息
export function updateStore(id,data) {
  return request({
    url:'/loanApplication/update/'+id,
    method:'post',
    data:data
  })
}

//删除门店
export function deleteStore(id) {
  return request({
    url:'/loanApplication/delete/'+id,
    method:'get',
  })
}
//得到门店根据ID
export function getStore(id) {
  return request({
    url:'/loanApplication/'+id,
    method:'get',
  })
}

//得到地址List
export function getMapList(params) {
  return request({
    url: '/map/result',
    method: 'get',
    params: params
  })
}

