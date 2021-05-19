<template>
  <v-form
    ref="form"
    lazy-validation
    class="mt-4"
  >
    <v-text-field
      :counter="10"
      :rules="firstNameRules"
      label="نام"
      v-model="firstName"
      required
    ></v-text-field>

    <v-text-field
      :counter="10"
      :rules="lastNameRules"
      label="نام خانوادگی"
      v-model="lastName"
      required
    ></v-text-field>

    <v-text-field
      :counter="10"
      :rules="nationalCodeRules"
      label="کد ملی"
      v-model="nationalCode"
      class="mb-4"
      required
    >
    </v-text-field>

    <v-btn
      color="success"
      @click="signUp"
    >
      عضویت
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="clearData"
    >
      پاک کردن فرم
    </v-btn>
    <v-btn
      class="float-left"
      outlined
      color="indigo"
      to="/"
    > 
      ورود
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    name: "Register",

    data: () => ({
      firstName: "",
      lastName: "",
      nationalCode: "",
      firstNameRules: [
        v => !!v || "وارد نمودن نام الزامی می باشد",
        v => !!v && v.length > 2 && v.length <= 10 || "نام می بایست بیشتر از ۲ کاراکتر و کمتر از ۱۰ کاراکتر باشد",
        v => !!v && /[a-z]{1,10}/.test(v) || "نام می بایست با کاراکتر شروع گردد",
      ],
      lastNameRules: [
        v => !!v || "وارد نمودن نام الزامی می باشد",
        v => !!v && v.length > 2 && v.length <= 10 || "نام خانوادگی می بایست بیشتر از ۲ کاراکتر و کمتر از ۱۰ کاراکتر باشد",
        v => !!v && /[a-z]{1,10}/.test(v) || "نام خانوادگی می بایست با کاراکتر شروع گردد",
      ],
      nationalCodeRules: [
        v => !!v || "وارد نمودن کد ملی الزامی می باشد",
        v => !!v && /^\d+$/.test(v) || 'کادر مربوطه می بایست تنها اعداد را در بر گیرد',
        v => !!v && /^\d{10}$/.test(v) || "کد ملی می بایست دقیقا ۱۰ رقم باشد",
      ]
    }),
    methods: {
      clearData() {
        this.$refs.form.reset()
      },
      signUp() {
        if (this.$refs.form.validate()) {
          alert("ثبت نام با موفقیت انجام شد");
          return true;
        }
      },
    },
  }
</script>