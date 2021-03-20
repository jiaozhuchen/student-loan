import request from '@/utils/request'


//修改门店信息
export function updateStudentInformation(id,data) {
  return request({
    url:'/stuInformation/'+id,
    method:'post',
    data:data
  })
}

//得到门店根据ID
export function getStudentInformation(id) {
  return request({
    url:'/stuInformation/'+id,
    method:'get',
  })
}

