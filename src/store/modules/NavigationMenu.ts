// 对象类型
interface MyObject {
  [key: string]: any;
}
const state = {
  collapse: false,
  menuList: [],
	breadcrumbList : []
};

const mutations = {
  setCollapse: (state: MyObject, value: boolean): void => {
    console.log(value);

    state.collapse = value;
  },
  setMenuList: (state: MyObject, value: MyObject): void => {
		console.log(value);
		
    state.menuList = value;
  },
	setBreadcrumbList: (state: MyObject, value: MyObject): void => {
		console.log(value);
		
    state.breadcrumbList = value;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
