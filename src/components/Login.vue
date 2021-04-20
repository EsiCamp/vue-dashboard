<template>
  <div>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-select
        v-model="activedItem"
        :items="states"
        label="انتخاب"
        chips
        hint="گزینه خود را انتخاب نمایید"
        class="mb-4"
        persistent-hint
      ></v-select>

      <v-btn
        color="success"
        @click="submit"
      >
        ورود
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="clearData"
      >
        پاک کردن
      </v-btn>
      <v-btn
        class="float-left"
        outlined
        color="indigo"
        to="/register"
      > 
        ثبت نام
      </v-btn>
    </v-form>
    <div v-if="role==='ادمین'">
      <Admin></Admin>
    </div>
    <div v-if="role==='کاربر'">
      <Member></Member>
    </div>
  </div>
</template>

<script>
  import Admin from "./Admin";
  import Member from "./Member";

  export default {
    name: "Login",

    data: () => ({
      activedItem: "",
      role: "",
      states: [
        "ادمین",
        "کاربر"
      ]
    }),
    components :{
      Admin,
      Member
    },
    methods: {
      clearData() {
        this.$refs.form.reset();
        localStorage.removeItem('auth');
      },
      submit() {
        localStorage.setItem("auth" ,this.activedItem);
        this.role = localStorage.getItem("auth");
      }
    },
    
  }
</script>