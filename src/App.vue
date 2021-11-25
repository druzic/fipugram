<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">
        <img
          src="@/assets/fipu_logo.png"
          height="40"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/signup" class="nav-link">Sign up</router-link>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <router-link to="/dashboard" class="nav-link"
              >Dashboard</router-link
            >
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <a href="#" @click.prevent="odjavi_korisnika()" class="nav-link"
              >Logout</a
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="store.searchTerm"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "@/firebase";
import store from "@/store";
import router from "@/router";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  const currentRoute = router.currentRoute;

  if (user) {
    // User is signed in.
    console.log("*** User", user);
    store.currentUser = user;
  } else {
    // User is not signed in.
    console.log("*** No user");
    store.currentUser = null;
    if (currentRoute !== "Login") {
      router.push({ name: "Login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    odjavi_korisnika() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
