<template>
  <v-app light>

    <v-navigation-drawer v-model="sideNav">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          View Content
        </v-list-tile-content>
    </v-list-tile>
    </v-navigation-drawer>

  <v-toolbar dark class="primary">
    <v-toolbar-title>FinMash</v-toolbar-title>
    <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up">  </v-toolbar-side-icon>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat><v-icon left>dashboard</v-icon>View Content</v-btn>
    </v-toolbar-items>
  </v-toolbar>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
