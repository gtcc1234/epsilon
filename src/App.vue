<template>
  <v-app light>

    <div id="logo">
      <v-container fluid>
        <v-layout row>
          <v-flex xs2>
            <router-link to="/" tag="span" style="cursor: pointer">
                <h6 class="black--text">FinMash</h6>
            </router-link>
          </v-flex>
          <v-flex xs6>
            <p class="primary--text">
              The latest and greatest of fintech
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div id="menu">

    <v-navigation-drawer temporary v-model="sideNav">
      <v-list-tile
      v-for="item in menuItems"
      :key="item.title" router :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          {{ item.title }}
        </v-list-tile-content>
    </v-list-tile>
    </v-navigation-drawer>


    <v-toolbar dark class="primary" xs2>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up">  </v-toolbar-side-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>

<main>
  <router-view></router-view>
</main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { title: 'Home', link: '/contents' },
          { title: 'About', link: '/about' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  #logo {
    background: white
    height: 4em
    margin-top: 1em
    padding-bottom: 1em
    font-family: "Times New Roman"
    color: blue
  }

  #menu {

  }

</style>
