import request from '@/utils/request'

//分页查询供应商列表数据
//name	pageNum	 pageSize
export function getSupplierList(params) {
    return request({
      url: '/supplier/list',
      method: 'get',
      params: params
    })
  }
  
  //添加门店信息
  export function addSupplier(data) {
    return request({
      url:'/supplier/add',
      method:'post',
      data:data
    })
  }
  //修改门店信息
  export function updateSupplier(data) {
    return request({
      url:'/supplier/update',
      method:'post',
      data:data
    })
  }
  
  //得到门店根据ID
  export function getSupplier(id) {
    return request({
      url:'/supplier/'+id,
      method:'get',
    })
  }
  