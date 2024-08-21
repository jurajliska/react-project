class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         newWho: "Marceline the vampire",
         newWat: "A wild rocket girl.",
         characters: [
            {
                "id": 1,
                "who": "Finn the human",
                "wat": "A silly kid who wants to become a great hero.",
                "cool": 12
            },
            {
                "id": 2,
                "who": "Jake the Dog",
                "wat": "Finns best friend.",
                "cool": 43
            }
         ]
      }
    }

    // List of dudes component
    listOfDudes = () => {
        return this.state.characters.map(dude => (
            <li key={dude.id} className="dude">
                <a className="ctrl">x</a>

                <article className="">
                    {dude.who}
                    <span>{dude.wat}</span>
                </article>

                <input className="ctrl" type="number" value={dude.cool}></input>
            </li>
        ))
    }

    // save new who
    handleWho = event =>{
        this.setState({
            newWho: event.target.value
        })
    }

    // save new wat
    handleWat = event =>{
        this.setState({
            newWat: event.target.value
        })
    }

    // add new dude
    handleSubmit = event => {
        if ( event.key === 'Enter'){
            this.setState(state => {
                const newDude = {
                    "id": Math.max( ...state.characters.map(d => d.id) ) + 1,
                    "who": this.state.newWho,
                    "wat": this.state.newWat,
                    "cool": 15
                }
    
                return {
                    characters: [ ...state.characters, newDude ]
                }
            })
        }
    }
    
    // Template
    render(){
        return(
            <div>
                <ul>{this.listOfDudes()}</ul>

                <form className="add-new" onKeyPress={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.newWho}
                        onChange={this.handleWho}
                    />

                    <input 
                        type="text"
                        value={this.state.newWat}
                        onChange={this.handleWat}
                    />
                </form>

                <p className="preview">
                    {this.state.newWho}
                    <br />
                    <small>{this.state.newWat}</small>
                </p>
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
