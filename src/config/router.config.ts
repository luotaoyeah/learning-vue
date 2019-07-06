import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from "../layouts";
import { bxAnaalyse } from "../core/icons";

export const asyncRouterMap = [
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    meta: { title: "首页" },
    redirect: "/dashboard/workplace",
    children: [
      {
        path: "/01",
        name: "01",
        redirect: "/01/01",
        component: RouteView,
        meta: { title: "GUIDE", keepAlive: true, icon: bxAnaalyse, permission: ["dashboard"] },
        children: [
          {
            path: "/01/01",
            name: "01-01",
            redirect: "/01/01/01",
            component: RouteView,
            meta: { title: "Essentials", keepAlive: true, permission: ["dashboard"] },
            children: [
              {
                path: "/01/01/01",
                name: "Introduction",
                component: () => import("@/views/doc/guide/01-introduction/declarative-rendering.vue"),
                meta: { title: "Introduction", keepAlive: false, permission: ["dashboard"] }
              }
            ]
          }
        ]
      },
      // dashboard
      {
        path: "/dashboard",
        name: "dashboard",
        redirect: "/dashboard/workplace",
        component: RouteView,
        meta: { title: "仪表盘", keepAlive: true, icon: bxAnaalyse, permission: ["dashboard"] },
        children: [
          {
            path: "/dashboard/analysis",
            name: "Analysis",
            component: () => import("@/views/dashboard/Analysis.vue"),
            meta: { title: "分析页", keepAlive: false, permission: ["dashboard"] }
          },
          // 外部链接
          {
            path: "https://www.baidu.com/",
            name: "Monitor",
            meta: { title: "监控页（外部）", target: "_blank" }
          },
          {
            path: "/dashboard/workplace",
            name: "Workplace",
            component: () => import("@/views/dashboard/Workplace.vue"),
            meta: { title: "工作台", keepAlive: true, permission: ["dashboard"] }
          }
        ]
      },

      // forms
      {
        path: "/form",
        redirect: "/form/base-form",
        component: PageView,
        meta: { title: "表单页", icon: "form", permission: ["form"] },
        children: [
          {
            path: "/form/base-form",
            name: "BaseForm",
            component: () => import("@/views/form/BasicForm.vue"),
            meta: { title: "基础表单", keepAlive: true, permission: ["form"] }
          },
          {
            path: "/form/step-form",
            name: "StepForm",
            component: () => import("@/views/form/stepForm/StepForm.vue"),
            meta: { title: "分步表单", keepAlive: true, permission: ["form"] }
          },
          {
            path: "/form/advanced-form",
            name: "AdvanceForm",
            component: () => import("@/views/form/advancedForm/AdvancedForm.vue"),
            meta: { title: "高级表单", keepAlive: true, permission: ["form"] }
          }
        ]
      },

      // list
      {
        path: "/list",
        name: "list",
        component: PageView,
        redirect: "/list/table-list",
        meta: { title: "列表页", icon: "table", permission: ["table"] },
        children: [
          {
            path: "/list/table-list/:pageNo([1-9]\\d*)?",
            name: "TableListWrapper",
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import("@/views/list/TableList.vue"),
            meta: { title: "查询表格", keepAlive: true, permission: ["table"] }
          },
          {
            path: "/list/basic-list",
            name: "BasicList",
            component: () => import("@/views/list/StandardList.vue"),
            meta: { title: "标准列表", keepAlive: true, permission: ["table"] }
          },
          {
            path: "/list/card",
            name: "CardList",
            component: () => import("@/views/list/CardList.vue"),
            meta: { title: "卡片列表", keepAlive: true, permission: ["table"] }
          },
          {
            path: "/list/search",
            name: "SearchList",
            component: () => import("@/views/list/search/SearchLayout.vue"),
            redirect: "/list/search/article",
            meta: { title: "搜索列表", keepAlive: true, permission: ["table"] },
            children: [
              {
                path: "/list/search/article",
                name: "SearchArticles",
                component: () => import("../views/list/search/Article.vue"),
                meta: { title: "搜索列表（文章）", permission: ["table"] }
              },
              {
                path: "/list/search/project",
                name: "SearchProjects",
                component: () => import("../views/list/search/Projects.vue"),
                meta: { title: "搜索列表（项目）", permission: ["table"] }
              },
              {
                path: "/list/search/application",
                name: "SearchApplications",
                component: () => import("../views/list/search/Applications.vue"),
                meta: { title: "搜索列表（应用）", permission: ["table"] }
              }
            ]
          }
        ]
      },

      // profile
      {
        path: "/profile",
        name: "profile",
        component: RouteView,
        redirect: "/profile/basic",
        meta: { title: "详情页", icon: "profile", permission: ["profile"] },
        children: [
          {
            path: "/profile/basic",
            name: "ProfileBasic",
            component: () => import("@/views/profile/basic/Index.vue"),
            meta: { title: "基础详情页", permission: ["profile"] }
          },
          {
            path: "/profile/advanced",
            name: "ProfileAdvanced",
            component: () => import("@/views/profile/advanced/Advanced.vue"),
            meta: { title: "高级详情页", permission: ["profile"] }
          }
        ]
      },

      // result
      {
        path: "/result",
        name: "result",
        component: PageView,
        redirect: "/result/success",
        meta: { title: "结果页", icon: "check-circle-o", permission: ["result"] },
        children: [
          {
            path: "/result/success",
            name: "ResultSuccess",
            component: () => import(/* webpackChunkName: "result" */ "@/views/result/Success.vue"),
            meta: { title: "成功", keepAlive: false, hiddenHeaderContent: true, permission: ["result"] }
          },
          {
            path: "/result/fail",
            name: "ResultFail",
            component: () => import(/* webpackChunkName: "result" */ "@/views/result/Error.vue"),
            meta: { title: "失败", keepAlive: false, hiddenHeaderContent: true, permission: ["result"] }
          }
        ]
      },

      // Exception
      {
        path: "/exception",
        name: "exception",
        component: RouteView,
        redirect: "/exception/403",
        meta: { title: "异常页", icon: "warning", permission: ["exception"] },
        children: [
          {
            path: "/exception/403",
            name: "Exception403",
            component: () => import(/* webpackChunkName: "fail" */ "@/views/exception/403.vue"),
            meta: { title: "403", permission: ["exception"] }
          },
          {
            path: "/exception/404",
            name: "Exception404",
            component: () => import(/* webpackChunkName: "fail" */ "@/views/exception/404.vue"),
            meta: { title: "404", permission: ["exception"] }
          },
          {
            path: "/exception/500",
            name: "Exception500",
            component: () => import(/* webpackChunkName: "fail" */ "@/views/exception/500.vue"),
            meta: { title: "500", permission: ["exception"] }
          }
        ]
      },

      // account
      {
        path: "/account",
        component: RouteView,
        redirect: "/account/center",
        name: "account",
        meta: { title: "个人页", icon: "user", keepAlive: true, permission: ["user"] },
        children: [
          {
            path: "/account/center",
            name: "center",
            component: () => import("@/views/account/center/Index.vue"),
            meta: { title: "个人中心", keepAlive: true, permission: ["user"] }
          },
          {
            path: "/account/settings",
            name: "settings",
            component: () => import("@/views/account/settings/Index.vue"),
            meta: { title: "个人设置", hideHeader: true, permission: ["user"] },
            redirect: "/account/settings/base",
            hideChildrenInMenu: true,
            children: [
              {
                path: "/account/settings/base",
                name: "BaseSettings",
                component: () => import("@/views/account/settings/BaseSetting.vue"),
                meta: { title: "基本设置", hidden: true, permission: ["user"] }
              },
              {
                path: "/account/settings/security",
                name: "SecuritySettings",
                component: () => import("@/views/account/settings/Security.vue"),
                meta: { title: "安全设置", hidden: true, keepAlive: true, permission: ["user"] }
              },
              {
                path: "/account/settings/custom",
                name: "CustomSettings",
                component: () => import("@/views/account/settings/Custom.vue"),
                meta: { title: "个性化设置", hidden: true, keepAlive: true, permission: ["user"] }
              },
              {
                path: "/account/settings/binding",
                name: "BindingSettings",
                component: () => import("@/views/account/settings/Binding.vue"),
                meta: { title: "账户绑定", hidden: true, keepAlive: true, permission: ["user"] }
              },
              {
                path: "/account/settings/notification",
                name: "NotificationSettings",
                component: () => import("@/views/account/settings/Notification.vue"),
                meta: { title: "新消息通知", hidden: true, keepAlive: true, permission: ["user"] }
              }
            ]
          }
        ]
      },

      // other
      {
        path: "/other",
        name: "otherPage",
        component: PageView,
        meta: { title: "其他组件", icon: "slack", permission: ["dashboard"] },
        redirect: "/other/icon-selector",
        children: [
          {
            path: "/other/icon-selector",
            name: "TestIconSelect",
            component: () => import("@/views/other/IconSelectorView.vue"),
            meta: { title: "IconSelector", icon: "tool", keepAlive: true, permission: ["dashboard"] }
          },
          {
            path: "/other/list",
            component: RouteView,
            meta: { title: "业务布局", icon: "layout", permission: ["support"] },
            redirect: "/other/list/tree-list",
            children: [
              {
                path: "/other/list/tree-list",
                name: "TreeList",
                component: () => import("@/views/other/TreeList.vue"),
                meta: { title: "树目录表格", keepAlive: true }
              },
              {
                path: "/other/list/edit-table",
                name: "EditList",
                component: () => import("@/views/other/TableInnerEditList.vue"),
                meta: { title: "内联编辑表格", keepAlive: true }
              },
              {
                path: "/other/list/user-list",
                name: "UserList",
                component: () => import("@/views/other/UserList.vue"),
                meta: { title: "用户列表", keepAlive: true }
              },
              {
                path: "/other/list/role-list",
                name: "RoleList",
                component: () => import("@/views/other/RoleList.vue"),
                meta: { title: "角色列表", keepAlive: true }
              },
              {
                path: "/other/list/system-role",
                name: "SystemRole",
                component: () => import("@/views/role/RoleList.vue"),
                meta: { title: "角色列表2", keepAlive: true }
              },
              {
                path: "/other/list/permission-list",
                name: "PermissionList",
                component: () => import("@/views/other/PermissionList.vue"),
                meta: { title: "权限列表", keepAlive: true }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: "/user",
    component: UserLayout,
    redirect: "/user/login",
    hidden: true,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/Login.vue")
      },
      {
        path: "register",
        name: "register",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/Register.vue")
      },
      {
        path: "register-result",
        name: "registerResult",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/RegisterResult.vue")
      }
    ]
  },

  {
    path: "/test",
    component: BlankLayout,
    redirect: "/test/home",
    children: [
      {
        path: "home",
        name: "TestHome",
        component: () => import("@/views/Home.vue")
      }
    ]
  },

  {
    path: "/404",
    component: () => import(/* webpackChunkName: "fail" */ "@/views/exception/404.vue")
  }
];
