<template>
  <div class="mx-8 rounded-xl bg-desaturate-dark-blue pb-3 md:pb-0 flex flex-initial flex-col md:flex-row-reverse md:max-h-96 md:max-w-4xl">
    <!-- <div class="img-test absolute insert-0 w-full  bg-cover bg-center rounded-xl"> --->
    <div class="bg-soft-violet img-filter w-full rounded-t-xl">
        <img class="opacity-30 md:hidden" src="@/assets/image-header-mobile.jpg"/>
        <img class="opacity-30 hidden md:block min-h-full" src="@/assets/image-header-desktop.jpg"/>
    </div>
    <div>
      <div class="mx-7 mb-4">
      
              <h1 class="font-bold text-white text-xl mt-10">Get <span class="text-soft-violet">insights</span> that <br> help your business <br> grow.</h1>
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
.img-filter{
  /* min-width: 100%; */
  /* height: 0; */
    /* padding-top: 66.64%; (img-height / img-width * container-width) */
                /* (853 / 1280 * 100) */
  

  /* background-image: url(@/assets/image-header-mobile.jpg);
  background-color: #aa5cdb;
  background-blend-mode: overlay; */
  filter:contrast(200%) brightness(0.51);
  
  
}
</style>