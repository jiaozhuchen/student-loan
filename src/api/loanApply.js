import request from '@/utils/request'

//分页查询列表数据
//name	pageNum	 pageSize
export function getLoanApplyList(params) {
  return request({
    url: '/loanApplication/list',
    method: 'get',
    params: params
  })
}

//修改信息
export function updateLoanApply(id,data) {
  return request({
    url:'/loanApplication/'+id,
    method:'post',
    data:data
  })
}

//创建信息
export function createLoanApply(data) {
  return request({
    url:'/loanApplication/add',
    method:'post',
    data:data
  })
}
//根据ID获取详情
export function getLoanApply(id) {
  return request({
    url:'/loanApplication/'+id,
    method:'get',
  })
}

