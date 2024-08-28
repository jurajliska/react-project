class App extends React.Component {
    constructor(props) {
      super(props)

      this.input = React.createRef()
    
      this.state = {
         newWho: "",
         newWat: "",
         characters: []
      }
    }

    // load my dudes
    componentDidMount = () => {
        fetch("https://api.npoint.io/c6b03d3d2185805f2467")
            .then(res => res.json())
            .then(json => this.setState({ characters: json }))
    }

    // List of dudes component
    listOfDudes = () => {
        return this.state.characters.map(dude => (
            <li key={dude.id} className="dude">
                <a className="ctrl" onClick={() => this.removeDude(dude)}>x</a>

                <article className={
                    dude.cool < 10 ? "faded" : dude.cool > 50 ? "gold" : ""
                }>
                    {dude.who}
                    <span>{dude.wat}</span>
                </article>

                <input className="ctrl" type="number" value={dude.cool} onChange={this.handleCool(dude)}/>
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

    // update cool
    handleCool = dude => event =>{
        const cool = +event.target.value

        this.setState(state => { 
            return { 
                characters: state.characters.map(item =>
                    item === dude ? { ...dude, cool } : item
                )
             }
        })
        
    }

    // remove dude
    removeDude = dude => {
        this.setState(state => { 
            return { 
                characters: state.characters.filter(item => item !== dude)
             }
        })
        
    }

    // add new dude
    handleSubmit = event => {
        if ( event.key === 'Enter' && this.state.newWho && this.state. newWat){
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

            this.resetForm()
        }
    }

    // reset form
    resetForm = () => {
        this.setState({
            newWho: "",
            newWat: ""
        })

        this.input.current.focus()
    }
    
    // Template
    render(){
        return(
            <div>
                <ul>{this.listOfDudes()}</ul>

                <form className="add-new" onKeyPress={this.handleSubmit}>
                    <input
                        autoFocus
                        type="text"
                        ref={this.input}
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
