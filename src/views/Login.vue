<template>
  <div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
      <h2 class="text-center">Log in</h2>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          required="required"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          required="required"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Log in</button>
      </div>
      <div class="clearfix">
        <label class="float-left form-check-label"
          ><input type="checkbox" /> Remember me</label
        >
        <a href="#" class="float-right">Forgot Password?</a>
      </div>
    </form>
    <p class="text-center"><a href="#">Create an Account</a></p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      ime: "",
      mail: "",
      lozinka: "",
      user: null,
    };
  },
  methods: {
    prijavi_korisnika() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.mail, this.lozinka)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("PRIJAVIO SI SE");
          this.$router.replace({ name: "Home" });
          // ...
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
