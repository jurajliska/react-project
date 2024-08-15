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

    handleChange = event =>{
        this.setState({
            dude: event.target.value
        })
    }
    

    render(){
        const dudes = this.state.characters.map(dude => (
            <li key={dude.id}>
                {dude.who}

                {dude.who.split(' ').length < 3 && (
                    <small>
                        <strong> - lol, short name</strong>
                    </small>
                )}
            </li>
        ))

        return(
            <div>
                <ul>{dudes}</ul>

                <form className="add-new">
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
