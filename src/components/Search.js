import React from 'react';


// Getting data from a form

// 1) Make it a stateful component
// 2) Create value as place to store the data
// 3) Create handleChange function
// 4) Don't forget the to bind the handleChange function in constructor


// Handling onclick
// 1) Add an onClick attribute
// 2) Create the function
// 3) Bind
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);

    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    handleClick(){
        // When the button is clicked, I will pass the data up through props
        this.props.handleClick(this.state.value)
    }
    
 render(){
     return (
        <div className='row my-3'>
            <div className='col-8'>
        <input type="text" placeholder="Enter movie name" value={this.state.value} 
        onChange={this.handleChange} className={'form-control'}/>
        </div>
        <div className='col-4'>
        <button onClick={this.handleClick} className={'btn btn-primary btn-block'}>Search</button>
        </div> 
        </div>
     )
}
}
export default Search;