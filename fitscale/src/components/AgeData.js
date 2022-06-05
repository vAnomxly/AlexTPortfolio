import React,{Component} from "react"
import MFitData from "./MFitData"
import BicepData from "./BicepData"
import SquatData from "./SquatData"

class AgeData extends Component{
    constructor(){
        super()
        this.state = {
            Data:MFitData,
            choice:"",
            loading:true,
            Clicked:false,
            ename:""
        }
        this.nowFalse = this.nowFalse.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleChange(event){
        const {name,value,type} = event.target
        this.setState({[name]:value})
        if (value==="bench"&&type==="radio"){
            this.setState({
                ename:value,
                Data:MFitData
                })
        }
        if (value==="bicep"&&type==="radio"){
            this.setState({
                ename:value,
                Data:BicepData
                })
        }
        if (value==="squat"&&type==="radio"){
            this.setState({
                ename:value,
                Data:SquatData
                })
        }
        
    }
    nowFalse(){
        this.setState({loading:false})
    }
    handleClick(){
        this.setState(prevState => {
            return{
                Clicked: !prevState.Clicked
                }})
    }
    render(){
        const Choice = "Type in a Weight!"
        const BTNText = this.state.Clicked ? "Hide choices" : "See all choices"
        const Click = this.state.Clicked ? "110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230" : null
        const pick = this.state.choice
        const Name = this.state.Data[pick]
        
        
        
        return(
            <div>
                <form>
                    <label>
                        <input
                        type="radio"
                        name="exercise"
                        value="bench"
                        onChange={this.handleChange}>
                        
                        </input>
                        Benchpress
                    </label>
                    <br/>
                    <label>
                        <input
                        type="radio"
                        name="exercise"
                        value="bicep"
                        onChange={this.handleChange}>
                        
                        </input>
                        Bicep Curl
                    </label>
                    <br/>
                    <label>
                        <input
                        type="radio"
                        name="exercise"
                        value="squat"
                        onChange={this.handleChange}>
                        
                        </input>
                        Squat
                    </label>
                    <br/>
                    <input 
                    name="choice" 
                    value={this.state.choice} 
                    onChange={this.handleChange} 
                    placeholder={Choice}></input>
                    <button type="button" onClick={this.handleClick}
                    >
                    {BTNText}
                    </button>
                </form>  
                <p>{Click}</p>
                <h1>{Name}</h1>
            </div>
        )
    }
}


export default AgeData