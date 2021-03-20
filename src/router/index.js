import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/register', component: () => import('@/views/login/register'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  }
]

export const asyncRouterMap = [
  {path: '/register', component: () => import('@/views/login/register'), hidden: true},
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/loanApply',
    name: 'loanApplyms',
    meta: {title: '贷款申请列表', icon: 'product'},
    children: [
      {
        path: 'loanApply',
        name: 'loanApply',
        component: () => import('@/views/ums/loanApply/index'),
        meta: {title: '贷款申请列表', icon: 'store-list'}
      },
      {
        path: 'updateLoanApply',
        name: 'updateLoanApply',
        component: () => import('@/views/ums/loanApply/update'),
        meta: {title: '审核贷款申请'},
        hidden: true
      },
      {
        path: 'addLoanApply',
        name: 'addLoanApply',
        component: () => import('@/views/ums/loanApply/add'),
        meta: {title: '贷款申请'},
        hidden: true
      },{
        path: 'viewLoanApply',
        name: 'viewLoanApply',
        component: () => import('@/views/ums/loanApply/view'),
        meta: {title: '查看详情'},
        hidden: true
      },

    ]
  },

  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/contract',
    name: 'contractms',
    meta: {title: '贷款合同', icon: 'store'},
    children: [
      {
        path: 'contract',
        name: 'contract',
        component: () => import('@/views/ums/contract/index'),
        meta: {title: '合同列表', icon: 'store-list'}
      },
      {
        path: 'updateContract',
        name: 'updateContract',
        component: () => import('@/views/ums/contract/update'),
        meta: {title: '合同审批'},
        hidden: true
      }
    ]
  },
  // {
  //   path: '/ums',
  //   component: Layout,
  //   redirect: '/ums/repayApply',
  //   name: 'repayApply',
  //   meta: {title: '还款申请', icon: 'product'},
  //   children: [
  //     {
  //       path: 'repayApply',
  //       name: 'repayApply',
  //       component: () => import('@/views/ums/repayApply/index'),
  //       meta: {title: '还款申请列表', icon: 'product-list'}
  //     },
  //     {
  //       path: 'updateRepayApply',
  //       name: 'updateRepayApply',
  //       component: () => import('@/views/ums/repayApply/update'),
  //       meta: {title: '审核还款申请', icon: 'product-add'},
  //       hidden: true
  //     }
  //   ]
  // },
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/student',
    name: 'studentms',
    meta: {title: '学生信息', icon: 'store'},
    children: [
      {
        path: 'studentUpdate',
        name: 'studentUpdate',
        component: () => import('@/views/ums/student/update'),
        meta: {title: '修改学生信息'},
      },
      {
        path: 'student',
        name: 'student',
        component: () => import('@/views/ums/student/view'),
        meta: {title: '学生信息'},
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

