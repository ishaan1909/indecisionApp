import React from "react";
export default class AddOption extends React.Component{
    state = {
        error:undefined
    }
    handleAddOption = (e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{
            return({
                error
            })
        })
        if(!error){
            e.target.elements.option.value = ""
        }
    }
    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    
    render()
    {
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className = "add-option" onSubmit={this.handleAddOption}>
                    <input className = "add-option__input" type="text" name="option"></input>
                    <button className="button">ADD OPTION</button>
                </form>
            </div>
        );
    }
}