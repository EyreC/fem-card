<template>
  <div class="mx-8 rounded-xl bg-desaturate-dark-blue pb-3 md:pb-0 flex flex-col md:flex-row-reverse md:max-h-96 md:max-w-4xl">
      <div class="bg-card-mobile pt-full bg-no-repeat img-bg-size mobile-img-height md:hidden">

      </div>
      <div class="bg-card-desktop rounded-r-xl pr-1/2 bg-cover hidden md:block">

      </div>
  
    <div class="md:mb-4">
      <div class="mx-7 mb-4 offset-margin md:mt-0">
      
              <h1 class="font-bold text-white text-xl mt-10">Get <span class="text-soft-violet">insights</span> that help your business grow.</h1>
              <p class="mt-2 text-gray-300">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
      </div>
      <div class="flex flex-col md:flex-row justify-around">
        <stat-shout v-for="(shout, idx) in statShouts"
                    :number="shout.number"
                    :text="shout.text"
                    />
      </div>
    </div>
  </div>
</template>

<script>
import StatShout from "@/components/StatShout.vue";
export default {
    components: {
        StatShout
    },
    data: function() {
        return {
            statShouts : [
                {number: "10k+", text: "COMPANIES"},
                {number: "314", text: "TEMPLATES"},
                {number: "12M+", text: "QUERIES"},
            ]
        }
    }
}
</script>

<style>
.mobile-img-height {
  height: 200px;
}
.offset-margin {
  margin-top: -30%;
}
.img-bg-size {
  background-size: 100%;
}
.img-filter{
  filter:contrast(200%) brightness(0.51);
}
</style>