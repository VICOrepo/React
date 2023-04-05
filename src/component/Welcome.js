//Class Components
import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const{name,heroName}=this.props
        return (
            <h1>
           Welcom {name} a.k.a {heroName}
            </h1>
        )
    }

}

export default Welcome