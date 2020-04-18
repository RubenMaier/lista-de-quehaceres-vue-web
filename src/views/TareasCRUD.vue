<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="7" lg="7">
        <Nota v-for="(tarea, index) in listaTareas" :tarea="tarea" :index="index" :key="index" />
      </v-col>

      <v-col cols="12" sm="6" md="5" lg="5" v-if="formCrear">
        <v-form @submit.prevent="agregarTareaNueva">
          <v-text-field label="Titulo de la tarea" v-model="tareaForm.titulo"></v-text-field>
          <v-textarea label="Descripcion de tarea" v-model="tareaForm.descripcion"></v-textarea>
          <v-btn block color="success" type="submit">Agregar tarea</v-btn>
        </v-form>
      </v-col>

      <v-col cols="12" sm="6" md="5" lg="5" v-if="!formCrear">
        <v-form @submit.prevent="actualizarTarea">
          <v-text-field label="Titulo de la tarea" v-model="tareaForm.titulo"></v-text-field>
          <v-textarea label="Descripcion de tarea" v-model="tareaForm.descripcion"></v-textarea>
          <v-btn block color="warning" type="submit">Editar tarea</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <Snackbar />
  </v-container>
</template>

<script>
import Nota from "@/components/Nota.vue";
import Snackbar from "@/components/Snackbar.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Nota,
    Snackbar
  },
  data() {
    return {
      tareaForm: {
        titulo: "",
        descripcion: ""
      }
    };
  },
  methods: {
    ...mapMutations(["agregarTarea", "editarTarea"]),
    agregarTareaNueva() {
      this.agregarTarea(this.tareaForm);
      this.tareaForm.titulo = "";
      this.tareaForm.descripcion = "";
    },
    actualizarTarea() {
      this.editarTarea(this.tareaForm);
      this.tareaForm.titulo = "";
      this.tareaForm.descripcion = "";
    }
  },
  computed: {
    ...mapGetters(["listaTareas", "formCrear", "_titulo", "_descripcion"])
  },
  watch: {
    _titulo(tituloNuevo) {
      this.tareaForm.titulo = tituloNuevo;
    },
    _descripcion(decripcionNueva) {
      this.tareaForm.descripcion = decripcionNueva;
    }
  }
};
</script>