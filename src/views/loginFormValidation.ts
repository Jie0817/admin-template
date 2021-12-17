import { reactive, ref,  } from "vue";
import { ElForm } from "element-plus";
interface interfaceObj{
  [key:string] : any
}
interface returnObj{
  refRuleForm:any;
  ruleForm:any;
  rules:any;
  submitForm:any;
  resetForm:any
}
export const loginFormValidation = (dialogVisible:interfaceObj):returnObj => {
  const refRuleForm = ref<InstanceType<typeof ElForm>>();

  const ruleForm = reactive({
    pass: "",
    username: "",
    code : ''
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
    callback();
  };
  const rules = reactive({
    pass: [{ validator: validatePass, trigger: "blur" }],
    username: [{ validator: validatePass2, trigger: "blur" }],
    code: [{ validator: validateCode, trigger: "blur" }],
  });
  const submitForm = (dialogVisible:interfaceObj): void => {
    refRuleForm.value?.validate((valid: boolean | undefined): boolean => {
      if (valid) {
        dialogVisible.value = true
        return true;
      }
      return false;
    });
  };
  const resetForm = (): void => {
    refRuleForm.value?.resetFields();
  };
  return {
    refRuleForm,
    ruleForm,
    rules,
    submitForm,
    resetForm
  };
};

// const validatePass = (
//   rule: string,
//   value: string,
//   callback: Function
// ): void => {
//   if (value === "") {
//     callback(new Error("密码不能为空！"));
//     return;
//   }
//   if (value !== "123456") {
//     callback(new Error("密码错误！"));
//     return;
//   }
//   callback();
// };
// const validatePass2 = (
//   rule: string,
//   value: string,
//   callback: Function
// ): void => {
//   if (value === "") {
//     callback(new Error("用户名不能为空！"));
//     return;
//   }
//   if (value !== "admin") {
//     callback(new Error("用户名错误！"));
//     return;
//   }
//   callback();
// };
// const validateCode = (
//   rule: string,
//   value: string,
//   callback: Function
// ): void => {
//   if (value === "") {
//     callback(new Error("验证码不能为空！"));
//     return;
//   }
//   callback();
// };

// const refRuleForm = ref<InstanceType<typeof ElForm>>()

// export default {
//   refRuleForm,

//   ruleForm : reactive({
//     pass: "",
//     username: "",
//     code : ''
//   }),
//   rules : reactive({
//     pass: [{ validator: validatePass, trigger: "blur" }],
//     username: [{ validator: validatePass2, trigger: "blur" }],
//     code: [{ validator: validateCode, trigger: "blur" }],
//   }),
//   submitForm : (dialogVisible:interfaceObj): void => {
//     refRuleForm.value?.validate((valid: boolean | undefined): boolean => {
//       if (valid) {
//         dialogVisible.value = true
//         return true;
//       }
//       return false;
//     });
//   },
//   resetForm : (): void => {
//     refRuleForm.value?.resetFields();
//   }
// };