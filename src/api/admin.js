import request from '@/utils/request'

  //修改用户信息
  export function updateAdmin(id,data) {
    return request({
      url:'/adminInformation/' + id,
      method:'post',
      data:data
    })
  }

  //根据ID得到用户
  export function getAdmin(adminId) {
    return request({
      url:'/adminInformation/'+ adminId,
      method:'get',
    })
  }
