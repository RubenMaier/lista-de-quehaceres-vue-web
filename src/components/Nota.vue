<template>
  <v-container>
    <v-card class="mb-3">
      <v-row align-center>
        <v-col cols="12" lg="9" xl="8">
          <v-card-text>
            <v-chip class="ma-2" color="green" label text-color="white">
              <v-icon left>mdi-label</v-icon>
              {{tarea.titulo}}
            </v-chip>
            <p>{{tarea.descripcion}}</p>
          </v-card-text>
        </v-col>
        <v-col cols="12" lg="3" xl="4">
          <v-btn color="warning" @click="activarEdicionDeTarea(index)" block outlined>Editar</v-btn>
          <v-btn color="error" @click="eliminarTarea(tarea.id)" block outlined>Eliminar</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Nota",
  props: ["tarea", "index"],
  methods: {
    ...mapMutations(["activarEdicionDeTarea", "eliminarTarea"])
  }
};
</script>