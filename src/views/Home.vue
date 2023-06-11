<template>
  <headers />
  <div class="bg-container">
    <img class="bg-image" src="../assets/bg-new.png" alt="background" />
    <div class="text-poppins text-white">
      <h1 class="font-semibold text-5xl absolute top-[180px] left-[230px]">
        MULTIPLE DECODER
      </h1>
      <p class="font-normal text-2xl absolute top-[320px] left-[190px]">
        Open Source Tools That Will Generate Encoder Or
      </p>
      <p class="font-normal text-2xl absolute top-[360px] left-[230px]">
        Decoder With Various Advanced Options
      </p>
      <p
        class="font-semibold text-2xl absolute top-80 left-60 ml-20 mt-40 underline"
      >
        LET'S GET STARTED!
      </p>
      <div class="relative">
        <img
          class="h-auto max-w-full absolute top-[-1650px] right-[100px]"
          src="../assets/computer.png"
          alt="computer"
        />
      </div>
      <div class="relative">
        <button
          class="absolute top-[-1300px] right-[1120px] border border-transparent rounded-lg py-2 px-2 bg-gray-400 text-white hover:bg-gray-500 hover:text-black"
        >
          <img class="scale-30" src="../assets/encode.png" alt="encode" />
          Encode
        </button>
      </div>
      <div class="relative">
        <button
          class="absolute top-[-1300px] right-[900px] border border-transparent rounded-lg py-3 px-4 bg-gray-400 text-white hover:bg-gray-500 hover:text-black"
        >
          <img class="scale-30" src="../assets/decode.png" alt="decode" />
          Decode
        </button>
      </div>
      <div class="relative">
        <h1
          class="font-medium text-5xl italic underline text-center absolute bottom-[500px] left-[550px]"
        >
          MEET OUR TEAMS
        </h1>
        <div class="flex gap-14 absolute -top-96 w-full justify-center">
          <div
            class="relative bg-gray-400 w-64 h-80 rounded-lg border border-transparent"
          >
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div class="flex flex-col scale-125">
                <img src="../assets/yuni.png" alt="yuni" />
                <p class="text-base text-poppins text-white">
                  Midyanisa Yuniar
                </p>
                <p class="text-base text-poppins text-white">5027211025</p>
              </div>
            </div>
          </div>
          <div
            class="relative bg-gray-400 w-64 h-80 rounded-lg border border-transparent"
          >
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div class="flex flex-col scale-125">
                <img src="../assets/azril.png" alt="azril" />
                <p class="text-base text-poppins text-white">
                  M. Azril Fathoni
                </p>
                <p class="text-base text-poppins text-white">5027211002</p>
              </div>
            </div>
          </div>
          <div
            class="relative bg-gray-400 w-64 h-80 rounded-lg border border-transparent"
          >
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div class="flex flex-col scale-125">
                <img src="../assets/icha.png" alt="icha" />
                <p class="text-base text-poppins text-white">
                  Tarisha Syira M.P
                </p>
                <p class="text-base text-poppins text-white">5027211061</p>
              </div>
            </div>
          </div>
          <div
            class="relative bg-gray-400 w-64 h-80 rounded-lg border border-transparent"
          >
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div class="flex flex-col scale-125">
                <img src="../assets/dhea.png" alt="dhea" />
                <p class="text-base text-poppins text-white">
                  Dhea Arfryza A.P
                </p>
                <p class="text-base text-poppins text-white">5027211013</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footers />
</template>

<script>
import Headers from "../components/Headers.vue";
import Footers from "../components/Footers.vue";

export default {
  name: "Header",
  components: {
    Headers,
    Footers,
  },
};
</script>

<style></style>
