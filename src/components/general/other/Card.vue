<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        每日推荐
      </p>
      <p class="change_icon" slot="extra" @click="randomMovie">
        <Icon type="ios-loop-strong"></Icon>
        Change
      </p>
      <ul class="movie_lists">
        <li v-for="item in movieList">
          <a :href="item.url">{{item.name}}</a>
          <Rate show-text allow-half disabled v-model="item.rate / 2">
            <span>{{item.rate}}</span>
          </Rate>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        movies: [],
        movieList: []
      }
    },
    created: function () {
      this.getMovies();
    },
    methods: {
      getMovies () {
        axios.get('http://localhost:8080/static/movie.json').then((res)=>{
          this.movies = res.data.data;
          this.randomMovie();
        }).catch((error)=>{
          console.log(error);
        })
      },
      randomMovie () {
        let temp = [];
        for (let index in this.movies) {
          temp.push(this.movies[index]);
        }
        const arr = [];
        for (let i = 0; i < 5; i++) {
          if (temp.length > 0) {
            const arrIndex = Math.floor(Math.random()*temp.length);
            arr[i] = temp[arrIndex];
            temp.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        this.movieList = arr;
      }
    }
  }
</script>

<style scoped>
  .ivu-card {
    width: 13rem;
    margin: 0.75rem 0.5rem;
  }

  .change_icon {
    color: #2d8cf0;
    cursor: pointer;
  }

  ul.movie_lists li>a{
    color: #2d8cf0;
  }

  ul.movie_lists li span {
    color: #f5a623;
  }
</style>
