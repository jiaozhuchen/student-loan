import request from '@/utils/request'

//分页查询列表数据
//name	pageNum	 pageSize
export function getRepayApplyList(params) {
  return request({
    url: '/repayApplication/list',
    method: 'get',
    params: params
  })
}

//修改信息
export function updateRepayApply(id,data) {
  return request({
    url:'/repayApplication/'+id,
    method:'post',
    data:data
  })
}
//根据ID获取详情
export function getRepayApply(id) {
  return request({
    url:'/repayApplication/'+id,
    method:'get',
  })
}

