<template>
  <div class="my-3">
      <h1 class="font-lexend text-white text-xl font-extrabold">{{number}}</h1>
      <p class="font-lexend text-gray-300 text-sm">{{text}}</p>
  </div>
</template>

<script>
export default {
    name: "StatShout",
    props: {
        number: String,
        text: String
    }
}
</script>

<style>

</style>