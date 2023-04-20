class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0,
        }
    }
    componentDidMount()
    {
        //const json = JSON.parse(localStorage.getItem('count'))
        const StringCount = localStorage.getItem('count');
        const count = parseInt(StringCount);
        if(!isNaN(count)){
            this.setState(()=>{
                return{
                    count
                }
            })
        }
        
    }
    componentDidUpdate()
    {
        const json = JSON.stringify(this.state.count);
        localStorage.setItem('count',json);
    }
    handleAddOne()
    {
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        })

    }
    handleMinusOne()
    {
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            }
        })  
    }
    handleReset()
    {
        this.setState(()=>{
            return (
                {count:0}
            );
        })
        

    }
    render()
    {
        return(
            <div>
    
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter count={5}/>,document.getElementById("app"));
// let count = 0;
// const addOne = ()=>{
//     count ++;
//     reRender();
// }
// const minusOne = ()=>{
//     count--;
//     reRender();
// }
// const reset = ()=>{
//     count = 0;
//     reRender();
// }





// function reRender(){
//     const template2 = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>RESET</button>
//         </div>
//     );
//     ReactDOM.render (template2,appRoot);
// }

// reRender();

