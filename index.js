class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         dude: "Marceline the vampire",
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
            <li key={dude.id}>
                {dude.who}

                {dude.who.split(' ').length < 3 && (
                    <small>
                        <strong> - lol, short name</strong>
                    </small>
                )}
            </li>
        ))
    }

    handleChange = event =>{
        this.setState({
            dude: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()

        const newDude = {
            "id": 99,
            "who": this.state.dude,
            "wat": this.state.dude,
            "cool": 15
        }

        this.setState(state => { 
            return {
                characters: [ ...state.characters, newDude ]
            }
        })
    }
    
    // Template
    render(){
        return(
            <div>
                <ul>{this.listOfDudes()}</ul>

                <form className="add-new" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.dude}
                        onChange={this.handleChange}
                    />
                </form>

                <p className="preview">
                    {this.state.dude}
                </p>
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
