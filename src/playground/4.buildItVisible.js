class Visiblity extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            visible:false
        }
    }
    handleClick()
    {
        this.setState((prevState)=>{
            return {
                visible:!(prevState.visible)
            }
        })
    }
    render()
    {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleClick}>{this.state.visible?"Hide Details":"Show Details"}</button>
                {this.state.visible && <p>This is a paragraph made using tags</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visiblity />,document.getElementById("app"));
