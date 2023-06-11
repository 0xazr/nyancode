<template>
  <!-- <img class="absolute w-full h-fit -z-10" src="../assets/bg-new.png" alt="background" /> -->
  <div
    class="h-full"
    style="background-image: url(http://localhost:8081/src/assets/bg-new.png)"
  >
    <headers />
    <div class="flex flex-col flex-wrap mx-10 my-10 space-y-24 bg-container">
      <div class="flex flex-row flex-wrap items-center justify-center">
        <div
          class="flex flex-col flex-wrap items-center justify-center w-2/5 space-y-8"
        >
          <h1 class="text-5xl font-semibold text-white">MULTIPLE DECODER</h1>
          <p class="text-2xl font-normal text-center text-gray-300">
            Open Source Tools That Will Generate Encoder Or Decoder With Various
            Advanced Options
          </p>
          <p class="text-2xl font-semibold text-white underline">
            LET'S GET STARTED!
          </p>
          <div class="flex flex-row flex-wrap justify-center space-x-10">
            <button
              class="flex flex-col items-center justify-center w-32 h-32 my-4 text-xl font-semibold text-white bg-gray-400 rounded-lg hover:bg-gray-500"
            >
              <img class="w-20" src="../assets/encode.png" alt="encode" />
              Encode
            </button>
            <button
              class="flex flex-col items-center justify-center w-32 h-32 my-4 text-xl font-semibold text-white bg-gray-400 rounded-lg hover:bg-gray-500"
            >
              <img class="w-20" src="../assets/decode.png" alt="decode" />
              Decode
            </button>
          </div>
        </div>
        <img class="h-auto" src="/src/assets/computer.png" alt="computer" />
      </div>
      <div class="text-5xl italic font-medium text-center text-white underline">
        MEET OUR TEAMS
      </div>
      <div
        class="flex flex-row flex-wrap items-center justify-center space-x-6"
      >
        <TeamCard
          name="Midyanisa Yuniar"
          nrp="5027211025"
          src="/src/assets/yuni.png"
        />
        <TeamCard
          name="M. Azril Fathoni"
          nrp="5027211002"
          src="/src/assets/azril.png"
        />
        <TeamCard
          name="Tarisha Syira M. P."
          nrp="5027211061"
          src="/src/assets/icha.png"
        />
        <TeamCard
          name="Dhea Arfryza A. P."
          nrp="5027211013"
          src="/src/assets/dhea.png"
        />
      </div>
    </div>
    <footers />
  </div>
</template>

<script>
import Headers from "../components/Headers.vue";
import Footers from "../components/Footers.vue";
import TeamCard from "../components/TeamCard.vue";

export default {
  name: "Header",
  components: {
    Headers,
    Footers,
    TeamCard,
  },
};
</script>

<style></style>
