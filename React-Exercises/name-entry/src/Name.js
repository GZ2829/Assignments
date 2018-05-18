import React, { Component } from 'react'



class Name extends Component{
    
    constructor(){
    super();

    this.state = {
        value: "",
        list: []
}
        
         this.addToList = this.addToList.bind(this);
         this.handleChange = this.handleChange.bind(this);
        
}    
   


    addToList(event){
        event.persist()
        this.setState(prevState=>{
            event.preventDefault()
            return {
                list: [...prevState.list, this.state.value]
            }
        })

    }
    handleChange(event) {
        event.persist()
        this.setState({value: event.target.value});
      }

    render() {
        const myList = this.state.list.map(name =>{
            return <li>{name}</li>
        })
        return(
            <div  onSubmit={this.addToList}>
                <form>
                    <input type = 'input' onChange = {this.handleChange} name ='name' value={this.state.value}></input>
                    <button>Submit</button>
                    <h1>~{this.state.value}</h1>
                    <br></br>
                    <ul>
                        {myList}
                    </ul>
                </form>
            </div>
        )
    }
}


export default Name;