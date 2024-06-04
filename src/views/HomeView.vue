<template>
  <v-app
    ><HeaderField />
    <DataTable />
    <FooterField />
  </v-app>
</template>

<script>
import HeaderField from "../components/HeaderField.vue";
import DataTable from "../components/DataTable.vue";
import FooterField from "../components/FooterField.vue";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    HeaderField,
    DataTable,
    FooterField,
  },
  methods: {},
};
</script>
