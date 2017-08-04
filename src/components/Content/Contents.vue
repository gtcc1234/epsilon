<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs10 sm8 md7 offset-md1>
        <v-layout row>
          <h6 class="primary--text">Top News</h6>
        </v-layout>

            <v-layout row wrap v-for="content in contents" :key="content.id" class="mb-2">
              <v-flex>
                <v-card>
                  <a v-bind:href="content.link">
                    <v-container fluid>
                      <v-layout row>
                        <v-flex xs10 sm11 md7>
                          <v-card-title primary-title>
                            <div>
                            {{ content.author }} |  {{ content.publication }}
                            </div>
                            <div>
                              <h5 class="black--text mb-0">{{ content.title }}</h5>
                              <div>{{ content.description }}</div>
                            </div>
                          </v-card-title>
                        </v-flex>
                        <v-flex xs4 sm3 md2 class="hidden-sm-and-down">
                            <v-card-media
                            :src="content.imageUrl"
                            height="130px"
                            contain
                            ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </a>
                </v-card>
              </v-flex>
          </v-layout>

        <v-layout row>
          <h5 class="primary--text"> Editor's Picks: Analysis and Commentary</h5>
        </v-layout>
        <v-layout row wrap v-for="editor in editors" :key="editor.id" class="mb-2">
          <v-flex>
            <v-card>
              <a v-bind:href="editor.link">
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs10 sm11 md7>
                      <v-card-title primary-title>
                        <div>
                        {{ editor.author }} |  {{ editor.publication }}
                        </div>
                        <div>
                          <h5 class="black--text mb-0">{{ editor.title }}</h5>
                          <div>{{ editor.description }}</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4 sm3 md2 class="hidden-sm-and-down">
                        <v-card-media
                        :src="editor.imageUrl"
                        height="130px"
                        contain
                        ></v-card-media>
                    </v-flex>
                  </v-layout>
                </v-container>
              </a>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex class="hidden-xs-only " sm4 md3 offset-md1>
          <v-layout row>
            <h6 class="primary--text">USD Exchange Rate</h6>
          </v-layout>
        <v-layout row class="mb-2">
          <v-flex>
            <v-card>
              <v-flex>
                Currency:
              </v-flex>
              <v-flex>
                Bitcoin ${{ btc }}
              </v-flex>
              <v-flex>
                Etherium ${{ eth }}
              </v-flex>
              <v-flex>
                Litecoin ${{ ltc }}
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row>
          <h6 class="primary--text">Subscribe</h6>
        </v-layout>

        <v-layout row class="mb-2">
          <v-flex>
            <v-card>
              Weekly Newsletter
            </v-card>
          </v-flex>
        </v-layout>


      <v-layout row>
        <h6 class="primary--text">Newest</h6>
      </v-layout>

      <v-layout row>
        <v-flex>
          <v-card>
            Newest Stuff
          </v-card>
        </v-flex>
      </v-layout>


    </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        btc: '',
        eth: '',
        ltc: ''
      }
    },
    computed: {
      contents () {
        return this.$store.getters.featuredContents
      },
      editors () {
        return this.$store.getters.editContents
      }
    },
    mounted () {
      this.load()
    },
    methods: {
      load () {
        fetch('http://www.coincap.io/page/ETH').then(res => res.json()).then(rest => {
          this.eth = rest.usdPrice
          console.log(this.eth)
        })
        fetch('http://www.coincap.io/page/BTC').then(res => res.json()).then(rest => {
          this.btc = rest.usdPrice
          console.log(this.btc)
        })
        fetch('http://www.coincap.io/page/LTC').then(res => res.json()).then(rest => {
          this.ltc = rest.usdPrice
          console.log(this.ltc)
        })
      }
    }
  }
</script>

<style scoped>
a:link    {
  /* Applies to all unvisited links */
  text-decoration:  none;
  background-color: white;
  color:            blue;
  }

</style>
