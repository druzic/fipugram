<template>
  <div class="card text-center w-50 mx-auto">
    <div class="card-header">{{ info.title }}</div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.url" />
    </div>
    <div class="card-footer text-muted">{{ info.time }}</div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "InstagramCard",
};
</script>
