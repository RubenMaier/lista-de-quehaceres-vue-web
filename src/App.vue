<template>
  <v-app>
    <Navbar />

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="green" app>
      <span class="white--text float-right">&copy; 2020 - Made with ♡ by me</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>