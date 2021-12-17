import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
interface interfaceRuleForm{
  [key:string]:any
}
interface interfaceFunc{
  loginSlidePuzzleVerification : (ruleForm: any , dialogVisible: any) => any
}
export const loginSlidePuzzleVerification = (ruleForm:interfaceRuleForm, dialogVisible:interfaceRuleForm ):interfaceRuleForm => {
  console.log(dialogVisible);
  console.log(ruleForm);
  
  
  const router = useRouter();
  const msg = ref("");
  const text = ref("向右滑动->");
  const imgs = ref([
    require("./../assets/img.jpg"),
    require("./../assets/img1.jpg"),
    require("./../assets/img2.jpg"),
    require("./../assets/img3.jpg"),
    require("./../assets/img4.jpg"),
    require("./../assets/img5.jpg"),
    require("./../assets/tp.jpg"),
  ]);
  interface instanceofSlidePuzzleVerification {
    reset: () => void;
  }
  const accuracy = ref(1); // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
  const slideblock = ref<instanceofSlidePuzzleVerification | null>(null);
  const onSuccess = (times: number) => {
    console.log("验证通过");
    dialogVisible.value = false;
    text.value = `login success, 耗时${(times / 1000).toFixed(1)}s`;
    const user = {
      username: ruleForm.username,
      password: ruleForm.pass,
    };
    sessionStorage.setItem("admin_user", JSON.stringify(user));
    router.replace("/");
  };
  const onFail = () => {
    console.log("验证不通过");
    text.value = "";
  };
  const onRefresh = () => {
    console.log("点击了刷新小图标");
    text.value = "";
  };
  const onFulfilled = () => {
    console.log("刷新成功啦！");
  };
  const onAgain = () => {
    console.log("检测到非人为操作的哦！");
    text.value = "try again";
    // 刷新
    handleClick();
  };
  const handleClick = () => {
    slideblock.value!.reset();
    text.value = "";
  };

  return {
    text,
    imgs,
    accuracy,
    slideblock,
    onSuccess,
    onFail,
    onRefresh,
    onFulfilled,
    onAgain,
    handleClick,
  };
};
