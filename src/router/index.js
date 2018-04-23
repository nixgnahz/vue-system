import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '../components/NotFound.vue'
import Header from '../components/Header.vue'
import Activity from '../components/Activity.vue'
import eChart from '../components/eChart.vue'
import Info from '../components/Info.vue'
import General from '../components/General.vue'
import Login from '../components/Login.vue'

import User from '../components/info/user/Index.vue'
import Goods from '../components/info/goods/Index.vue'

import Cartogram from '../components/eChart/cartogram/Index.vue'
import Histogram from '../components/eChart/Histogram.vue'
import Line from '../components/eChart/Line.vue'
import Pie from '../components/eChart/Pie.vue'
import Area from '../components/eChart/Area.vue'
import Radar from '../components/eChart/Radar.vue'

import Other from '../components/general/other/Index.vue'
import Staff from '../components/general/staff/Index.vue'

import Sponsor from '../components/activity/sponsor/Index.vue'
import Manage from '../components/activity/manage/Index.vue'

import All from '../components/activity/manage/All.vue'
import Detail from '../components/activity/manage/Detail.vue'

import Details from '../components/activity/manage/detail/Details.vue'
import Enroll from '../components/activity/manage/detail/Enroll.vue'
import Sign from '../components/activity/manage/detail/SignIn.vue'
import Static from '../components/activity/manage/detail/Static.vue'
import Evaluate from '../components/activity/manage/detail/Evaluate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'echart'
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login
      }
    },
    {
      path: '/echart',
      components: {
        default: eChart,
        header: Header
      },
      children: [
        {
          path: '/',
          redirect: 'histogram'
        },
        {
          path: 'cartogram',
          name: 'cartogram',
          component: Cartogram
        },
        {
          path: 'histogram',
          name: 'histogram',
          component: Histogram
        },
        {
          path: 'line',
          name: 'line',
          component: Line
        },
        {
          path: 'pie',
          name: 'pie',
          component: Pie
        },
        {
          path: 'area',
          name: 'area',
          component: Area
        },
        {
          path: 'radar',
          name: 'radar',
          component: Radar
        }
      ]
    },
    {
      path: '/activity',
      components: {
        default: Activity,
        header: Header
      },
      children: [
        {
          path: '/',
          redirect: 'sponsor/step1'
        },
        {
          path: 'sponsor/:step',
          name: 'sponsor',
          component: Sponsor
        },
        {
          path: 'manage',
          component: Manage,
          children: [
            {
              path: '/',
              name: 'all',
              component: All,
            },
            {
              path: 'detail',
              component: Detail,
              children: [
                {
                  path: '/',
                  redirect: 'details'
                },
                {
                  path: 'details',
                  name: 'details',
                  component: Details
                },
                {
                  path: 'enroll',
                  name: 'enroll',
                  component: Enroll
                },
                {
                  path: 'sign',
                  name: 'sign',
                  component: Sign
                },
                {
                  path: 'static',
                  name: 'static',
                  component: Static
                },
                {
                  path: 'evaluate',
                  name: 'evaluate',
                  component: Evaluate
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/info',
      components: {
        default: Info,
        header: Header
      },
      children: [
        {
          path: '/',
          redirect: 'user'
        },
        {
          path: 'user',
          name: 'user',
          component: User
        },
        {
          path: 'goods',
          name: 'goods',
          component: Goods
        }
      ]
    },
    {
      path: '/general',
      components: {
        default: General,
        header: Header
      },
      children: [
        {
          path: '/',
          redirect: 'other'
        },
        {
          path: 'other',
          name: 'other',
          component: Other
        },
        {
          path: 'staff',
          name: 'staff',
          component: Staff
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      components: {
        default: NotFound
      }
    }
  ],
  scrollBehavior (to, from) {
    return { x: 0, y: 0 }
  }
})
