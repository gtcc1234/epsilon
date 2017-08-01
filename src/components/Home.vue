<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item v-for="content in contents" :src="content.imageUrl" :key="content.id" @click="onLoadContent(content.id)"><div  class="title"> {{ content.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router to="/contents" class="info"> See Contents </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large router to="/content/new" class="info"> Create Content </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p> Dummy Test</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      contents () {
        return this.$store.getters.featuredContents
      }
    },
    methods: {
      onLoadContent (id) {
        this.$router.push('/content/' + id)
      }
    }
  }

</script>


<style scoped>

.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0,0,0,0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}


</style>
