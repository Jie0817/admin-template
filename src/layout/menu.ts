interface obj {
  [key:string] : any
}
const menus:obj[] = [
  {
    title : 'element-plus',
    path : '/element/index',
    icon : 'Eleme'
  },
  {
    title : 'Excel表格',
    path : '/exportExcel/index',
    icon : 'Edit',
    children : [
      {
        title : '导入',
        path : '/exportExcel/enter',
        icon : 'Download'
      },
      {
        title : '导出',
        path : '/exportExcel/Out',
        icon : 'Upload'
      }
    ]
  },
  {
    title : 'swiper轮播',
    path : '/swiper/index',
    icon : 'Edit',
    children : [
      {
        title : '轮播_cards',
        path : '/swiper/cards',
        icon : 'IceDrink'
      },
      {
        title : '轮播_centeredSlides',
        path : '/swiper/centeredSlides',
        icon : 'IceDrink'
      },
      {
        title : '轮播_蚂蚁财富旋转进入',
        path : '/swiper/mayi',
        icon : 'IceDrink'
      },
      {
        title : '轮播_淘宝全球购',
        path : '/swiper/taobaoworld',
        icon : 'IceDrink'
      }
    ]
  },
  {
    title : '错误页',
    path : '/404',
    icon : 'Warning',
    children : [
      {
        title : '404',
        path : '/404',
        icon : 'Failed'
      },
      {
        title : '无权限',
        path : '/noPermission',
        icon : 'Failed'
      }
    ]
  }
]
export default menus