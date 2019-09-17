import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import movieRow from './MovieRow';
import './App.css';
import MovieRow from './MovieRow';

class App extends React.Component {
  constructor(props){
    super(props)

    console.log("This is my initializer!")

    const movies = [
      {id: 0, poster_src: "https://pixabay.com/vectors/popcorn-buttered-cinema-corn-food-155602/", title:"Avenger Infinity War", overview: "this is the first overview lorem  nfanfuf vabfufafnfd"  },
      {id: 1, poster_src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0799949%2F&docid=1MDx4UekNp9VGM&tbnid=dJsMzXWS8ZP9VM%3A&vet=10ahUKEwiZ_IuD-tfkAhVPWxoKHUKSAUgQMwiMASgTMBM..i&w=1013&h=1500&bih=689&biw=1280&q=movie%20images&ved=0ahUKEwiZ_IuD-tfkAhVPWxoKHUKSAUgQMwiMASgTMBM&iact=mrc&uact=8", title:"Avenger Infinity War!", overview: "this is the second overview lorem  nfanfuf vabfufafnfd"  }
    ]


      var movieRows=[]
    movies.forEach((movie) => {
      console.log(movie.title)
        const movieRow = <MovieRow movie={movie}  />


      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
  }

render(){
  return (
    <div>
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <Logo width="50"  src="Public/favorites.min.svg" />
            </td>
            <td>
              MoviesDB Search
            </td>
          </tr>
        </tbody>
      </table>

      <input className="inputArea" placeholder="Enter your search here"  />

      {this.state.rows}
    </div>
  );
}

}

export default App;
