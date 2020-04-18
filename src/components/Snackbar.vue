<template>
  <v-container>
    <v-snackbar v-model="snackbar" :color="color" multi-line top>
      {{ mensaje }}
      <v-btn text @click="actualizarSnackbar(false)">Cerrar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Snackbar",
  data() {
    return {
      snackbar: false
    };
  },
  methods: {
    ...mapMutations(["actualizarSnackbar"])
  },
  watch: {
    _snackbar(nuevoValor) {
      this.snackbar = nuevoValor;
    }
  },
  computed: {
    ...mapGetters(["mensaje", "color", "_snackbar"])
  }
};
</script>