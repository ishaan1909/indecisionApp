import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import Action from "./Action";
import OptionModal from "./OptionModal";
export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selected:undefined
    }

    handleRemove = (optionToRemove)=>{
        this.setState((prevState)=>{
            return {
                options:prevState.options.filter((option)=>optionToRemove !== option)
            }
        })
    } 
    handleDeleteOptions = ()=>{
        this.setState(()=>{
            return {
                options:[]
            }
        })
    }
    handlePick=()=>{
        const randomNum = Math.floor((Math.random())*(this.state.options.length))
        const optionIs = (this.state.options[randomNum]);
        this.setState(()=>{
            return{
                selected:optionIs
            }
        })
    }
    handleClosing = ()=>{
        this.setState(()=>{
            return{selected:undefined}
        })
    }
    handleAddOption=(option)=>{
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option)>-1){
            return `This option already exists`
        }
        // this.setState((prevState)=>options:prevState.options.concat([option])}})
        this.setState((prevState)=>{
            return {
                options:prevState.options.concat([option])
            }
        })
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options!==null){
            this.setState(()=>{
                return({
                    options
                })
            })
            }
        }catch(e){
            
        }
        
    }
    componentDidUpdate(prevProps,prevState){
         if(prevState.options.length !== this.state.options.length)
         {
            console.log("Component did update");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
         }
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    
    render()
    {
        const title = "Indecision App"
        const subTitle = "Put your hands in the hands of a computer"
        return(
            <div>
                <Header  title = {title} subTitle = {subTitle}/>
                <div className="container">
                    <Action    
                    hasOptions={this.state.options.length>0}
                    handlePick = {this.handlePick}    
                />
                <div className="widget">
                    <Options 
                        options = {this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleRemove = {this.handleRemove}
                    />
                    <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
                </div>
                
                
                </div>
                
                <OptionModal handleClosing = {this.handleClosing} selectedOption = {this.state.selected} />
            </div>
        );
    }
}

