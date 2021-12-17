<template>
  <div class="login">
    <div class="container">
      <div class="container-left">
        <p class="container-left-title">后台管理模板</p>
      </div>
      <div class="container-form">
        <h5>登 录</h5>
        <el-form
          ref="refRuleForm"
          :model="ruleForm"
          :rules="rules"
          label-position="top"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="ruleForm.username"
              type="text"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <el-input
                :input-style="{ width: '230px' }"
                v-model="ruleForm.code"
                type="text"
              ></el-input>
              <character-verification
                ref="CharacterVerificationDocm"
              ></character-verification>
            </div>
          </el-form-item>
          <el-form-item style="text-align: left">
            <el-button type="primary" @click="submitForm">登录</el-button>
            <el-button @click="resetForm">清空</el-button>
          </el-form-item>
        </el-form>
        <el-dialog
          width="350px"
          v-model="dialogVisible"
          :show-close="false"
          :close-on-click-modal="false"
        >
          <slide-puzzle-verification
            ref="slideblock"
            @success="onSuccess"
            @again="onAgain"
            @fulfilled="onFulfilled"
            @fail="onFail"
            @refresh="onRefresh"
            :slider-text="text"
            :imgs="imgs"
            :accuracy="accuracy"
          />
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import SlidePuzzleVerification from "@/components/verification/SlidePuzzleVerification.vue";
import CharacterVerification from "@/components/verification/CharacterVerification.vue";
import { ElForm } from "element-plus";
export default defineComponent({
  components: {
    SlidePuzzleVerification,
    CharacterVerification,
  },
  setup() {
    const CharacterVerificationDocm = ref()

    // 表单验证
    const refRuleForm = ref<InstanceType<typeof ElForm>>();

    const ruleForm = reactive({
      pass: "",
      username: "",
      code: "",
    });

    const validatePass = (
      rule: string,
      value: string,
      callback: Function
    ): void => {
      if (value === "") {
        callback(new Error("密码不能为空！"));
        return;
      }
      if (value !== "123456") {
        callback(new Error("密码错误！"));
        return;
      }
      callback();
    };
    const validatePass2 = (
      rule: string,
      value: string,
      callback: Function
    ): void => {
      if (value === "") {
        callback(new Error("用户名不能为空！"));
        return;
      }
      if (value !== "admin") {
        callback(new Error("用户名错误！"));
        return;
      }
      callback();
    };
    const validateCode = (
      rule: string,
      value: string,
      callback: Function
    ): void => {
      if (value === "") {
        callback(new Error("验证码不能为空！"));
        return;
      }
      console.log(CharacterVerificationDocm.value.validate(ruleForm.code));
      
      if (!CharacterVerificationDocm.value.validate(ruleForm.code)) {
        callback(new Error("验证码错误！"));
        return;
      }
      callback();
    };
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: "blur" }],
      username: [{ validator: validatePass2, trigger: "blur" }],
      code: [{ validator: validateCode, trigger: "blur" }],
    });
    const submitForm = (): void => {
      console.log('submitForm');
      console.log(refRuleForm.value);
      
      refRuleForm.value?.validate((valid: boolean | undefined): boolean => {
        console.log(valid);
        
        if (valid) {
          dialogVisible.value = true;
          return true;
        }
        return false;
      });
    };
    const resetForm = (): void => {
      refRuleForm.value?.resetFields();
    };

    // 滑块拼图验证

    const dialogVisible = ref(false);
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
      text.value = `登录成功, 耗时${(times / 1000).toFixed(1)}s`;
      // console.log();
      setTimeout(() => {
        dialogVisible.value = false;
        const user = {
          username: ruleForm.username,
          password: ruleForm.pass,
        };
        sessionStorage.setItem("admin_user", JSON.stringify(user));
        router.replace("/");
      }, 1000);
      
    };
    const onFail = () => {
      console.log("验证不通过");
      text.value = "";
    };
    const onRefresh = () => {
      console.log("点击了刷新小图标");
      text.value = "向右滑动->";
    };
    const onFulfilled = () => {
      console.log("刷新成功啦！");
    };
    const onAgain = () => {
      console.log("检测到非人为操作的哦！");
      text.value = "检测到非人为操作的哦！";
      // 刷新
      handleClick();
    };
    const handleClick = () => {
      slideblock.value!.reset();
      text.value = "";
    };




    return {
      dialogVisible,
      ruleForm,
      rules,
      resetForm,
      refRuleForm,
      onSuccess,
      submitForm,
      onAgain,
      onFulfilled,
      onFail,
      onRefresh,
      text,
      imgs,
      accuracy,
      slideblock,
      CharacterVerificationDocm
    };
  },
});
</script>

<style lang="scss" scoped>
/deep/.el-dialog__header{
  display: none;
}
.login {
  width: 100vw;
  height: 100vh;
  background: #545c64;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 1000px;
  height: 600px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 0px 40px rgba($color: #aaaaaa, $alpha: 0.4);
  padding-right: 48px;
}

.container-left {
  width: 250px;
  height: 640px;
  background: #333333;
  transform: translateY(-20px);
  box-shadow: 10px 0px 40px rgba($color: #aaaaaa, $alpha: 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-left-title {
  color: #fff;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.container-left-title::after {
  content: "";
  width: 60px;
  height: 2px;
  background: #fff;
  position: absolute;
  bottom: -20px;
  left: 6px;
}
.container-left::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 200px;
  top: 0px;
  z-index: -1;
  border-radius: 0 60% 60% 0;
  background: #333333;
  box-shadow: 30px 0px 40px rgba($color: #333333, $alpha: 0.1);
}

.container-form {
  padding-top: 72px;
  width: 400px;
  height: 100%;
}
.container-form > h5 {
  font-size: 32px;
  margin-bottom: 24px;
  text-align: left;
}
.el-form-item {
  //   margin-bottom: 48px;
}
</style>
