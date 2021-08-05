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
        })}
  render() {
    const { error, isLoaded, items } = this.state;

    const containsErrorMessage = () => {
      return <div>Error: {error.message}</div>;
    };
    
    const isLoading = () => {
      return <div>Loading...</div>;
    };
    
    const showMe = () =>{
      return (
        <div>
          {items.map((myMemes, index)=>(
           <Table 
              key={myMemes.id}
              name={myMemes.name}
              url={myMemes.url}
              alt={myMemes.id}
              />
            ))}  
        </div>
          )
    }

    if (error) return containsErrorMessage();
    return !isLoaded ? isLoading() : showMe();
  }
}
export default App