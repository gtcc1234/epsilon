<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router to="/contents" class="info"> See Contents </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large router to="/content/new" class="info"> Create Content </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="content in contents" :src="content.imageUrl" :key="content.id"><div  class="title"> {{ content.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p> Join Us </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        contents: [
          {
            imageUrl: 'http://marketingland.com/wp-content/ml-loads/2014/09/content-marketing-ss-1920-800x450.jpg', id: 'aaa12312313aaa', title: 'Trying Content 1'
          },
          {
            imageUrl: 'http://marketingland.com/images/authors/JimYu-lg.jpg', id: 'aaaa41231123aa2', title: 'Trying Content 2'
          }
        ]
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
