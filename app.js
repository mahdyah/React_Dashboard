//  import Style from './App.css'

const Box=(props)=>{
    return (
        <div className='box'>
            <h5>{props.Name}</h5>
            <h5>{props.Name1}</h5>
            <h5>{props.Name2}</h5>
            <h5>{props.Name3}</h5>
            <h5>{props.Name4}</h5>
            <h5>{props.Name5}</h5>
            <div>{props.empty}</div>
            <h3>{props.Number1}</h3>
            <h3>{props.Number2}</h3>
            <h3>{props.Number3}</h3>

        </div>
    )
}


class App extends React.Component{
    render(){
return(
    <div className='container'>
      
<div className="topOne"  ><Box  Name="Reviews" Number1="1,281"/></div>
<div className="topTwo"  ><Box  Name="Average Rating" Number1="4.6"/></div>
<div className="topThree"><Box  Name="Sentiment Analysis " Number1="960" Number2="122" Number3="321" /></div>
<div className="bottom"  ><Box  Name="Website Visitors" Number1="821" empty="" /></div>
<div className="left"    ><Box  Name="Dashboard" Name1="Widget" Name2="Reviews" Name3= "Customers" Name4="Online Analysis" Name5="Settings"/></div>

    </div>
)
    }
}

ReactDOM.render(<App/>,
document.getElementById('root'))