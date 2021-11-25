<template>
  <div class="about">
    <h1>This is an sign up page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputUsername1">Username</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputUsername1"
                placeholder="Enter username"
                v-model="ime"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="mail"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="lozinka"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Password"
                v-model="lozinka2"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="registriraj_korisnika"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
    <div class="alert alert-danger mt-3 w-25 mx-auto" role="alert" v-if="eror">
      {{ eror }}
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@/firebase";
export default {
  name: "signup",
  data() {
    return {
      ime: "",
      mail: "",
      lozinka: "",
      lozinka2: "",
      user: null,
      eror: "",
    };
  },
  methods: {
    registriraj_korisnika() {
      if (this.lozinka !== this.lozinka2)
        return (this.eror = "Lozinke se ne podudaraju");

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.mail, this.lozinka)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: this.ime,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          this.$router.push({ name: "Home" });
          // ...
        })
        .catch((error) => {
          this.eror = error.message;
          // ..
        });
    },
  },
};
</script>
