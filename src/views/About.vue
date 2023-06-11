<template>
  <div
    class="h-full"
    style="background-image: url(http://localhost:8081/src/assets/bg-new.png)"
  >
    <headers />
    <div class="flex flex-col flex-wrap mx-10 my-10 space-y-8 bg-container">
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
  components: {
    Headers,
    Footers,
    TeamCard,
  },
};
</script>
