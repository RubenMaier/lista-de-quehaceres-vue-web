
<template>
  <v-container fluid>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link v-for="(opcion, index) in listaOpciones" :key="index" :to="opcion.link">
          <v-list-item-action>
            <v-icon>{{opcion.icono}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{opcion.titulo}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Lista de quehaceres</v-toolbar-title>
      <v-spacer />
      <v-switch color="black" v-model="$vuetify.theme.dark" hide-details inset :label="temaColor"></v-switch>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    listaOpciones: [
      {
        link: "/",
        icono: "mdi-clipboard-text",
        titulo: "Lista de tareas"
      },
      {
        link: "/descripcion",
        icono: "mdi-rocket",
        titulo: "Descripcion del proyecto"
      }
    ]
  }),
  computed: {
    temaColor() {
      return this.$vuetify.theme.dark ? "Oscuro" : "Claro";
    }
  }
};
</script>