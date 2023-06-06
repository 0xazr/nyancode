<template>
  <img
    src="../assets/bg.png"
    alt=""
    class="absolute h-full w-full -z-10 overflow-hidden"
  />
  <headers />
  <div class="py-13 text-white">
    <div
      class="flex flex-wrap items-center justify-center mx-10 xl:space-x-10 xl:space-y-0 space-x-0 space-y-3 xl:flex-row flex-col"
    >
      <div class="xl:w-2/6 w-full card-one">
        <div class="font-medium card-one-title font-poppins">
          Choose an Algorithm
        </div>
        <div
          class="self-center w-full my-4 border-1 border-[#5B5B6B] space-y-2"
        >
          <div
            class="flex flex-row flex-wrap items-center justify-start w-4/5 space-x-2 border-2 border-[#5B5B6B] rounded-lg mx-auto px-3"
          >
            <svg
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 text-primary-gray"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
            <input
              type="text"
              name="search"
              id="search"
              class="block py-2.5 px-0 text-sm text-primary-gray font-normal bg-transparent border-0 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer w-4/5"
              placeholder="Search here..."
              v-model="app.search"
            />
          </div>
          <div
            class="flex flex-wrap items-center justify-center mx-4 space-x-3 space-y-2 overflow-y-auto"
          >
            <div
              class="px-3 py-2 font-normal text-center cursor-pointer font-poppins rounded-xl"
              :class="{
                'bg-primary-gray': app.findAlgo(algo.name) == false,
                'bg-secondary-green': app.findAlgo(algo.name) == true,
              }"
              v-for="(algo, index) in find"
              :key="index"
              @click="app.setAlgo(algo.name)"
            >
              {{ algo.name.toUpperCase() }}
            </div>
          </div>
        </div>
      </div>
      <div class="xl:w-1/4 w-full card-one flex items-center">
        <div
          class="card-one-title font-poppins flex items-center justify-center w-full px-4"
        >
          <p class="font-medium flex-grow">The Algorithm</p>
          <svg
            @click="(app.temp.selected_types = []), (app.temp.keys = [])"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6 ml-2 cursor-pointer hover:bg-primary-gray hover:rounded-full"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            ></path>
          </svg>
        </div>
        <div
          class="flex justify-center mt-3 text-primary-gray"
          v-if="app.temp.selected_types.length == 0"
        >
          The algorithm will be drop in here.
        </div>
        <div
          class="flex flex-col items-center justify-center w-full text-primary-gray overflow-y-auto"
        >
          <div
            class="flex flex-col justify-start w-full px-3 py-2 bg-primary-green border-b-2 space-y-1 border-gray-300 h-full"
            :class="{
              'bg-primary-green': greenColor(index),
              'bg-primary-red': redColor(item.name, index),
            }"
            v-for="(item, index) in app.temp.selected_types"
            :key="index"
          >
            <div class="flex flex-row items-center justify-between">
              <div
                class="text-xs font-bold"
                :class="{
                  'text-primary-green': greenColor(index),
                  'text-primary-red': redColor(item.name, index),
                }"
              >
                {{ item.name.toUpperCase() }}
              </div>
              <div class="flex flex-row justify-center items-center">
                <label :for="`type_algo_${index}`" class="text-xs"
                  >Type:
                </label>
                <select
                  :name="`type_algo_${index}`"
                  :id="`type_algo_${index}`"
                  v-model="app.temp.selected_types[index].type"
                  class="border-0 text-xs focus:border-0 focus:ring-0 -my-2"
                  :class="{
                    'bg-primary-green': greenColor(index),
                    'bg-primary-red': redColor(item.name, index),
                  }"
                >
                  <option
                    class="-my-2 -py-2"
                    v-for="(type, index) in returnType(item.name)"
                    :key="index"
                    :value="type"
                  >
                    {{ type }}
                  </option>
                </select>
              </div>
              <div class="flex flex-row space-x-2">
                <svg
                  @click="app.hideAlgo(item.name)"
                  fill="none"
                  stroke="currentColor"
                  class="w-4 h-4 cursor-pointer hover:text-red-500"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  ></path>
                </svg>
                <svg
                  @click="app.deleteAlgo(index)"
                  fill="none"
                  stroke="currentColor"
                  class="w-4 h-4 cursor-pointer hover:text-red-500"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
            <input
              type="text"
              :name="`input-${item.name}`"
              :id="`input-${item.name}`"
              class="block bg-white rounded-sm py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#3ADF36] peer"
              placeholder="Key"
              v-if="app.findKey(item.name)"
              v-model="app.temp.keys[index]"
            />
          </div>
          <hr />
        </div>
      </div>
      <div class="flex flex-col space-y-4 xl:w-1/4 w-full h-96">
        <div class="card-two">
          <div class="font-medium text-black card-two-title font-poppins">
            Input
          </div>
          <input
            type="text"
            name="input"
            id="input"
            class="block mx-4 py-2.5 px-0 text-sm text-primary-gray font-normal bg-transparent border-0 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
            v-model="app.temp.text"
            placeholder="Input your text here."
          />
        </div>
        <div class="card-two">
          <div class="font-medium text-black card-two-title font-poppins">
            Output
          </div>
          <p
            class="block mx-4 py-2.5 px-0 text-sm text-primary-gray font-normal bg-transparent border-0 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer overflow-wrap break-word"
          >
            {{
              app.respon == "" ? "The results will come out here." : app.respon
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <footers />
</template>

<script>
import Headers from "../components/Headers.vue";
import Footers from "../components/Footers.vue";
import { useApp } from "../store";

export default {
  name: "Header",
  data() {
    return {
      find: [],
    };
  },
  components: {
    Headers,
    Footers,
  },
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
  created() {
    this.notHash();
  },
  methods: {
    notHash() {
      return (this.find = this.app.algo.filter(
        (item) => item.type[0] != "hash"
      ));
    },
    returnType(name) {
      let temp = {};
      temp = this.app.algo.find((item) => {
        if (item.name == name) {
          return item;
        }
      });
      return temp.type;
    },
    redColor(name, index) {
      return (
        this.app.findKey(name) == true &&
        ((this.app.temp.keys[index] == null ? true : false) ||
          (this.app.temp.selected_types[index].type == null ? true : false))
      );
    },
    greenColor(index) {
      return this.app.temp.keys[index] == null
        ? false
        : true && this.app.temp.selected_types[index].type == null
        ? false
        : true;
    },
  },
  watch: {
    "app.search": {
      handler() {
        this.find = this.notHash().filter((item) =>
          item.name.toLowerCase().includes(this.app.search.toLowerCase())
        );
      },
      deep: true,
    },
  },
};
</script>
