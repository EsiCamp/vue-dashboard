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
        item-text="name"
        persistent-hint
      >
      </v-select>

      <v-btn
        color="success"
        @click="submit"
        to="/dashboard"
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
    <Dashboard>
      <v-card v-if="role!==''"
        class="mx-auto member-cnt mt-4"
        max-width="344"
      >
        <v-card-text>
          <div>
            صفحه
            {{ role }}
          </div>
          <p>
            {{ role }}
            محترم خوش آمدید
          </p>
        </v-card-text>
      </v-card> 
    </Dashboard>
  </div>
</template>

<script>
  import Dashboard from "./Dashboard"

  export default {
    name: "Login",

    data: () => ({
      activedItem: "",
      role: "",
      states: [
        {
          name: "ادمین",
          value: "admin"
        },
        {
          name: "کاربر",
          value: "member"
        }
      ]
    }),
    components: {
      Dashboard
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