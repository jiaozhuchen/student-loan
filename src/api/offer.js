import request from '@/utils/request'

//addOffer, getOffer, updateOffer

//添加商品报价
export function addOffer(data) {
    return request({
      url:'/supplier/product/add',
      method:'post',
      data: data
    })
}


//批量添加商品报价
export function addOfferList(data) {
    return request({
      url:'/supplier/product/add/list',
      method:'post',
      data: data
    })
}


//查询单个供应商的所有商品最新报价
export function getSupplierOfferList(params) {
    return request({
      url:'/supplier/product/list',
      method:'get',
      params: params
    })
}
//修改商品报价
export function updateOffer(data) {
    return request({
      url:'/supplier/product/modify',
      method:'post',
      data: data
    })
}


//查询单个商品的历史报价
export function getOffer(id,params) {
    return request({
      url:'/supplier/product/'+ id,
      method:'get',
      params: params
    })
}


//删除商品报价
export function deleteOffer(id) {
    return request({
      url:'/supplier/product/'+ id,
      method:'delete'
    })
}

