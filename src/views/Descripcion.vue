<template>
  <v-container>
    <v-row class="text-center">
      <h1>Objetivo</h1>
    </v-row>
    <v-row>
      <v-card>
        <v-list>
          <v-subheader>El proyecto consiste en un ABM/CRUD solo FrontEnd de tareas a realizar. El objetivo es poner en practica conocimientos en Vue, utilizando:</v-subheader>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-group>
              <v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title v-html="item.titulo"></v-list-item-title>
                </v-list-item-content>
              </v-list-item-content>
            </v-list-item-group>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          id: 1,
          titulo: "Vuetify para darle estilo"
        },
        {
          id: 2,
          titulo: "Vuex para intercomunicar componentes"
        },
        {
          id: 3,
          titulo: "VueRouter para manejar rutas de acceso"
        },
        {
          id: 4,
          titulo: "Babel para transcopilar el código"
        },
        {
          id: 5,
          titulo: "EsList para monitorear la calidad y el formato del código"
        }
      ]
    };
  }
};
</script>