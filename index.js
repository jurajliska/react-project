class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         dude: "Marceline the vampire"
      }
    }
    

    render(){
        return <div>
            <p>
                My good friend <strong>{this.state.dude}</strong>.
                <br/>
                I like {this.state.dude}.
            </p>
        </div>
    }
}

// ReactDOM.render(<App />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
