import request from '@/utils/request'

//分页查询门店列表数据
//name	pageNum	 pageSize
export function getContractList(params) {
  return request({
    url: '/contract/list',
    method: 'get',
    params: params
  })
}

//修改门店信息
export function updateContract(id,data) {
  return request({
    url:'/contract/'+id,
    method:'post',
    data:data
  })
}
//得到门店根据ID
export function getContract(id) {
  return request({
    url:'/contract/'+id,
    method:'get',
  })
}

