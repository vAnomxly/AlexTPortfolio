import React,{Component} from "react"

class APICall extends Component{
    constructor(){
        super()
        this.state = {
            Data:[],
            Loading:true,
            choice:"",
            Clicked:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        fetch("https://swapi.dev/api/planets/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
            Data:data,
            Loading:false
        })
        })
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    handleClick(){
        this.setState(prevState => {
            return{
                Clicked: !prevState.Clicked
                }})
    }
    render(){
        const Text = this.state.Loading ? "Loading..." : "Try typing in \"name\" "
        const Choice = this.state.Loading ? null : "Choice"
        const Click = this.state.Clicked ? "name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films, created, edited, url." : null
        const BTNText = this.state.Clicked ? "Hide choices" : "See all choices"
        var pick = this.state.choice
        const Name = this.state.Data[pick]
        
        
        return(
            <div>
                <h1>{Text}</h1>
                <form>
                    <input name="choice" value={this.state.choice} onChange={this.handleChange} placeholder={Choice}></input>
                    <button type="button" onClick={this.handleClick}>{BTNText}</button>
                </form>
                <p>{Click}</p>
                <h1>{Name}</h1>
            </div>
        )
    }
}

export default APICall