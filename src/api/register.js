import request from '@/utils/request'

  //修改用户信息
  export function register(data) {
    return request({
      url:'/student/register',
      method:'post',
      data:data
    })
  }

