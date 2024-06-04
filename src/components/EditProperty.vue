<template>
  <div>
    <v-stepper v-model="step" non-linear>
      <v-stepper-header>
        <v-stepper-item color="blue">Osnovni podaci</v-stepper-item>
        <v-divider></v-divider>
        <v-stepper-item color="blue">Oznake</v-stepper-item>
        <v-divider></v-divider>
        <v-stepper-item color="blue">Slike</v-stepper-item>
      </v-stepper-header>

      <v-stepper-window>
        <!-- STEP 1 -->
        <v-stepper-window-item value="1">
          <v-card>
            <v-card-text>
              <v-row dense>
                <!-- Prvi red-->
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.name"
                    label="Ime vlasnika"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" md="3" sm="6"
                  ><v-select
                    v-model="editedItem.property.category"
                    label="Kategorija"
                    :items="listOfAllCategories"
                    item-title="value"
                    item-value="id"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-select
                    v-model="editedItem.property.borough.boroughName"
                    label="Opština"
                    :items="listOfAllBoroughs"
                    item-title="boroughName"
                    item-value="id"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.property.price"
                    label="Cena €"
                  ></v-text-field>
                </v-col>
                <!-- Drugi red-->
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.phone"
                    label="Telefon"
                  ></v-text-field></v-col
                ><v-col cols="12" md="3" sm="6">
                  <v-select
                    v-model="editedItem.property.type.typeName"
                    label="Tip"
                    :items="listOfAllTypes"
                    item-title="typeName"
                    item-value="idType"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.street"
                    label="Ulica"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="1" sm="6">
                  <v-text-field
                    v-model="editedItem.number"
                    label="Broj"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="6">
                  <v-select
                    v-model="editedItem.property.deposit"
                    label="Depozit"
                    :items="yesOrNo"
                    item-title="value"
                    item-value="id"
                  ></v-select>
                </v-col>
                <!-- Treci red-->
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.email"
                    label="Email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-select
                    v-model="editedItem.property.structure.structureType"
                    label="Struktura"
                    :items="listOfAllStructures"
                    item-title="structureType"
                    item-value="idStructure"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.property.floor"
                    label="Sprat"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.property.bathrooms"
                    label="Kupatila"
                  ></v-text-field>
                </v-col>
                <!--Cetvrti red-->
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.contract"
                    label="Ugovor"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-select
                    v-model="editedItem.property.equipment.equipmentType"
                    label="Nameštenost"
                    :items="listOfAllEquips"
                    item-title="equipmentType"
                    item-value="id"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" md="2" sm="6">
                  <v-text-field
                    v-model="editedItem.property.rooms"
                    label="Prostorije"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="6">
                  <v-text-field
                    v-model="editedItem.property.squareFootage"
                    label="Kvadratura (m²)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="6">
                  <v-text-field
                    v-model="editedItem.property.heating"
                    label="Grejanje"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                  <v-text-field
                    v-model="editedItem.property.title"
                    label="Naslov"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" sm="6"> </v-col>
                <v-col cols="12" md="7" sm="12">
                  <v-textarea
                    v-model="editedItem.property.description"
                    label="Opis"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="5" sm="12">
                  <v-textarea
                    v-model="editedItem.property.description"
                    label="Dodatne informacije"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-action>
              <v-row
                ><v-col
                  ><v-btn variant="flat" @click="prev" :disabled="true"
                    >Prethodno</v-btn
                  ></v-col
                >
                <v-col class="text-center">
                  <v-btn variant="flat" @click="close">Odustani</v-btn></v-col
                >
                <v-col class="text-right"
                  ><v-btn
                    class="text-white"
                    color="blue-darken-4"
                    variant="flat"
                    @click="next"
                    >Sledeće</v-btn
                  ></v-col
                ></v-row
              >
            </v-card-action>
          </v-card>
        </v-stepper-window-item>
        <!-- STEP 2 -->
        <v-stepper-window-item value="2">
          <v-card>
            <v-card-text>
              <div v-if="listOfAllTags">
                <v-row>
                  <v-col
                    cols="12"
                    md="2"
                    sm="3"
                    v-for="tag in listOfAllTags"
                    :key="tag.idTag"
                    ><v-checkbox
                      :label="tag.tagName"
                      v-model="selected"
                      :value="tag.idTag"
                      color="primary"
                    ></v-checkbox
                  ></v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-action>
              <v-row
                ><v-col class="text-left"
                  ><v-btn variant="flat" @click="prev">Prethodno</v-btn></v-col
                >
                <v-col class="text-center">
                  <v-btn variant="flat" @click="close">Odustani</v-btn></v-col
                >
                <v-col class="text-right"
                  ><v-btn
                    class="text-white"
                    color="blue-darken-4"
                    variant="flat"
                    @click="next"
                    >Sledeće</v-btn
                  ></v-col
                ></v-row
              >
            </v-card-action>
          </v-card>
        </v-stepper-window-item>
        <!-- STEP 3 -->
        <v-stepper-window-item value="3">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col v-for="(file, index) in shownImages" :key="index">
                  <v-img
                    :lazy-src="file.url"
                    :src="file.url"
                    aspect-ratio="1"
                    class="bg-grey-lighten-2"
                    cover
                  >
                    <template v-slot:placeholder>
                      <v-row
                        align="center"
                        class="fill-height ma-0"
                        justify="center"
                      >
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
              <v-spacer></v-spacer>
              <v-file-input multiple @change="handleImageInput"></v-file-input>
              <v-btn @click="uploadImages">Upload Images</v-btn>
            </v-card-text>
            <v-card-action>
              <v-row
                ><v-col
                  ><v-btn variant="flat" @click="prev">Prethodno</v-btn></v-col
                >
                <v-col class="text-center">
                  <v-btn variant="flat" @click="close">Odustani</v-btn></v-col
                >
                <v-col class="text-right"
                  ><v-btn
                    class="text-white"
                    color="blue-darken-4"
                    variant="flat"
                    @click="save"
                    >Sačuvaj</v-btn
                  ></v-col
                ></v-row
              >
            </v-card-action>
          </v-card>
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>
  </div>
</template>
<script>
import getEmptyItem from "../services/getEmptyItem.js";
import { ref } from "vue";
export default {
  name: "EditProperty",
  props: {
    defaultItem: Object,
  },
  data: () => ({
    editedItem: Object.assign({}, getEmptyItem()),
    item: Object.assign({}, getEmptyItem()),
    index: -2,
    step: 0,
    listOfAllTags: [],
    listOfAllEquips: [],
    listOfAllTypes: [],
    listOfAllStructures: [],
    listOfAllBoroughs: [],
    listOfAllCategories: ["Iznajmljivanje", "Prodaja"],
    selected: [],
    yesOrNo: [
      { id: 0, value: "NE" },
      { id: 1, value: "DA" },
    ],
    selectedImages: [],
    uploadedImages: [],
    shownImages: [],
    blobArrays: [],
  }),
  async created() {
    this.editedItem = this.defaultItem;
    this.index = this.editedItem.idOwner - 1;
    let error = ref(null);
    let x = this.editedItem.property.idProperty;
    try {
      //all tags
      let alltags = fetch("http://localhost:8081/getTags").then((response) =>
        response.json()
      );
      this.listOfAllTags = await alltags;
      // all equips
      let allequips = fetch("http://localhost:8081/getEquipments").then(
        (response) => response.json()
      );
      this.listOfAllEquips = await allequips;
      // all types
      let alltypes = fetch("http://localhost:8081/getTypes").then((response) =>
        response.json()
      );
      this.listOfAllTypes = await alltypes;
      // all boroughs
      let allboroughs = fetch("http://localhost:8081/getBoroughs").then(
        (response) => response.json()
      );
      this.listOfAllBoroughs = await allboroughs;
      // all structures
      let allstructs = fetch("http://localhost:8081/getStructures").then(
        (response) => response.json()
      );
      this.listOfAllStructures = await allstructs;
      if (x > 0) {
        // property tags
        const url = "http://localhost:8081/listOfTags/" + x;
        let tags = fetch(url).then((response) => response.json());
        this.selected = await tags;
      }

      // all images
      //let urlImages = "http://localhost:8081/getImages/" + x;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  },
  methods: {
    close() {
      this.$emit("close-pressed", {
        item: this.editedItem,
        index: this.index,
      });
    },
    save() {
      this.$emit("save-pressed", {
        item: this.item,
        index: this.index,
      });
    },
    next() {
      this.step = this.step + 1;
    },
    prev() {
      this.step = this.step - 1;
    },
    handleImageInput(event) {
      this.selectedImages = Array.from(event.target.files);
      this.selectedImages.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.shownImages.push({ name: file.name, url: reader.result });
        };
        this.uploadedImages.push(file);
        reader.readAsDataURL(file);
      });
    },
    async uploadImages() {
      try {
        let formData = new FormData();
        // Append each selected file to FormData
        for (let image of this.uploadedImages) {
          formData.append("images", image);
        }

        let url = "http://localhost:8081/upload/" + this.editedItem;
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        // Handle response from backend
        const responseData = await response.json();
        console.log("Upload response:", responseData);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    },
    async downloadImages() {},
  },
};
</script>
