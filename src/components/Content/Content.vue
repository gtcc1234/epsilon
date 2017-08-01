<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ content.title }}</h6>
          </v-card-title>
          <v-card-media
             :src="content.imageUrl"
             height="300px"
           ></v-card-media>
           <v-card-text>
             <div class="info--text">{{ content.date}}</div>
             <div> Oliver twisting his foot the book sought the foot.  Dummy Text</div>
           </v-card-text>
           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn class="primary"> Action 1</v-btn>
           </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>


<script>

export default {
  props: ['id'],
  computed: {
    content () {
      return this.$store.getters.loadedContent(this.id)
    }
  }
}

</script>
