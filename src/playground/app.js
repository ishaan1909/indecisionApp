
class IndecisionApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            options:[]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    // handleDeleteOption
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
    handleRemove(optionToRemove){
        this.setState((prevState)=>{
            return {
                options:prevState.options.filter((option)=>optionToRemove !== option)
            }
        })
    } 

    handleDeleteOptions()
    {
        this.setState(()=>{
            return {
                options:[]
            }
        })
    }
    
    handlePick()
    {
        const randomNum = Math.floor((Math.random())*(this.state.options.length))
        alert(this.state.options[randomNum]);
    }

    handleAddOption(option)
    {
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

    render()
    {
        const subTitle = "Put your hands in the hands of a computer"

        return(
            <div>
                <Header  subTitle = {subTitle}/>
                <Action    
                    hasOptions={this.state.options.length>0}
                    handlePick = {this.handlePick}    
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleRemove = {this.handleRemove}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}



const Header = (props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title:"Indecision"
};

const Action = (props)=>{
    return(
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    );
}

const Options = (props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length===0 && <p>Please add options to get Started</p>}
        {
            props.options.map((option)=>
                <Option 
                    key={option} 
                    optionText = {option}
                    handleRemove = {props.handleRemove}
                    />
                )
        }
        </div>
    );
}

const Option = (props)=>{
    return(
        <div>
           {props.optionText}
           <button onClick = {(e)=>{
            props.handleRemove(props.optionText)
           }}>Remove</button>
        </div>
    );
}


class AddOption extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddOption(e){
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
    render()
    {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>ADD OPTION</button>
                </form>
            </div>
        );
    }
}

// const User = (props)=>{
//     return (
//         <div>
//             <h1>Name:{props.name}</h1>
//             <h2>Age:{props.age} </h2>
//         </div>
//     );
// }


ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));