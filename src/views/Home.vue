<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-7">
      <instagram-card
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
    </div>
    <div class="col-4" v-if="store.currentUser">Bok {{ username }}</div>
  </div>
</template>
<script>
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store";
let cards = [];

cards = [
  {
    author: "mujo",
    title: "jedan",
    time: "an hour ago",
    url: "https://picsum.photos/id/1/400/400",
  },
  {
    author: "krešo",
    title: "dva",
    time: "2 days ago",
    url: "https://picsum.photos/id/7/400/400",
  },
  {
    author: "goran",
    title: "tri",
    time: "4 days ago",
    url: "https://picsum.photos/id/15/400/400",
  },
];

export default {
  name: "Home",
  data: function () {
    return {
      cards,
      store,
      username: store.currentUser.displayName,
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter(
        (card) =>
          card.title.includes(store.searchTerm) ||
          card.author.includes(store.searchTerm)
      );
    },
  },
  components: {
    InstagramCard,
  },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}
</style>
