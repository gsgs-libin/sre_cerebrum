// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },
      // report_template
      {
        path: '/report_template',
        redirect: '/report_template/create',
        component: RouteView,
        meta: { title: '运营模板', icon: 'snippets' },
        children: [
          {
            path: '/report_template/create',
            name: 'create',
            component: () => import('@/views/report_template/create'),
            meta: { title: '创建模板', keepAlive: true }
          },
          {
            path: '/report_template/list',
            name: 'list',
            component: () => import('@/views/report_template/list'),
            meta: { title: '模板列表', keepAlive: true }
          },
          {
            path: '/report_template/var_register',
            name: 'var_register',
            component: () => import('@/views/report_template/var_register'),
            meta: { title: '变量注册', keepAlive: true }
          },
          {
            path: '/report_template/slot_register',
            name: 'slot_register',
            component: () => import('@/views/report_template/slot_register'),
            meta: { title: '插槽注册', keepAlive: true }
          },
          {
            path: '/report_template/edit',
            name: 'edit',
            hidden: true,
            component: () => import('@/views/report_template/edit'),
            meta: { title: '编辑模板', keepAlive: true }
          }
        ]
      },
      // authority_message
      {
        path: '/authority_message',
        redirect: '/authority_message/message_list',
        component: RouteView,
        meta: { title: '权威消息', icon: 'message' },
        children: [
          {
            path: '/authority_message/list',
            name: 'message_list',
            component: () => import('@/views/authority_message/message_list'),
            meta: { title: '消息列表', keepAlive: true }
          },
          {
            path: '/authority_message/notice_channel',
            name: 'notice_channel',
            component: () => import('@/views/authority_message/notice_channel'),
            meta: { title: '通知渠道', keepAlive: true }
          },
          {
            path: '/authority_message/edit',
            name: 'message_edit',
            hidden: true,
            component: () => import('@/views/authority_message/message_list/edit'),
            meta: { title: '编辑消息', keepAlive: true }
          }
        ]
      },
      // report
      {
        path: '/report',
        redirect: '/report/report_list',
        component: RouteView,
        meta: { title: '运营报告', icon: 'profile' },
        children: [
          {
            path: '/report/list',
            name: 'report_list',
            component: () => import('@/views/report/list'),
            meta: { title: '报告列表', keepAlive: true }
          },
          {
            path: '/report/slot',
            name: 'slot_list',
            component: () => import('@/views/report/slotlist'),
            meta: { title: '批注', keepAlive: true }
          },
          {
            path: '/authority_message/edit',
            name: 'report_edit',
            hidden: true,
            component: () => import('@/views/report/edit'),
            meta: { title: '编辑报告', keepAlive: true }
          }
        ]
      },
      // instant_chat
      {
        path: '/instant_chat',
        redirect: '/instant_chat/list',
        component: RouteView,
        meta: { title: '即时消息', icon: 'aliwangwang' },
        children: [
          {
            path: '/instant_chat/list',
            name: 'chat_message_list',
            component: () => import('@/views/instant_chat/chat_message'),
            meta: { title: '对话列表', keepAlive: true }
          },
          {
            path: '/instant_chat/chat_room',
            name: 'chat_message_room_detail',
            hidden: true,
            component: () => import('@/views/instant_chat/chat_room'),
            meta: { title: '对话房间', keepAlive: true }
          }
        ]
      }
    ]
  },
  {
    path: '/preivew',
    name: 'report_preview',
    component: () => import('@/views/report/preview')
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/archive/exception/404')
  }
]
