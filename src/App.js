import React from "react"
import Table from "./components/Table"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data.memes,
          });
            console.log("items",this.state.items)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
   )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    const containsErrorMessage = () => {
      return <div>Error: {error.message}</div>;
    };

    const isLoading = () => {
      return <div>Loading...</div>;
    };
    
    function results()  {
      return (
         <div>
          {items.map(myMemes => (
            <h1 
              key={myMemes.id}>
              {myMemes.name}
              <img className="memeImage" src={myMemes.url}/>
           </h1>   
          ))}    
        </div>
      )
    }
    const showMe = () =>{
      return (
        <div>
           <Table results={this.results}  />
        </div>
          )
    }

    if (error) return containsErrorMessage();
    return !isLoaded ? isLoading() : results();
  }
}
export default App