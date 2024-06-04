<template>
  <v-container>
    <h1>Header</h1>
    <v-sheet class="mx-auto" elevation="8" max-width="800">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-group-item v-for="(file, index) in shownImages" :key="index">
          <!-- v-slot="{ isSelected, toggle }"-->
          <v-card
            :color="isSelected ? 'primary' : 'grey-lighten-1'"
            class="ma-4"
            height="200"
            width="100"
            @click="toggle"
            ><v-img
              :lazy-src="file.url"
              :src="file.url"
              aspect-ratio="1"
              class="bg-grey-lighten-2"
              cover
            />
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  icon="mdi-close-circle-outline"
                  size="48"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HeaderField",
  data() {
    return {
      model: null,
      selectedImages: [],
      uploadedImages: [],
      shownImages: [],
    };
  },
  async created() {
    let error = ref(null);
    try {
      let x = 1;
      const url = "http://localhost:8081/getImages/" + x;
      let allImages = fetch(url).then((response) => response.json());
      this.shownImages = await allImages;
      console.log(this.shownImages);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  },
  methods: {
    downloadImages(listImages) {
      listImages.array.forEach((element) => {
        this.shownImages.push({ name: element.name, url: element.path });
      });
    },
  },
};
</script>
