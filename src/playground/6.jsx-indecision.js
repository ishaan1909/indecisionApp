

// jsx = java script xml
const app ={
    title: "Indecision app",
    subtitle: "Your life in the hands of a computer",
    options:[]
}

const numbers = [55,101,1000];

const handleSubmit = (e)=>
{
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = ""
        reRender()
    }

}
const removeAll = ()=>{
    app.options = [];
    reRender();
}   
const makeDecision = ()=>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    console.log(randomNum);
    const SelectedOption = app.options[randomNum]
    alert(SelectedOption)
}   
function visiblity(){
    return (app.options.length>0);
}
function reRender()
{
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options.length>0) ? (<p>Count : {app.options.length}</p>):"No options"}
        <button onClick={makeDecision} disabled={visiblity}>What should I do ?</button>
        <button onClick={removeAll}>REMOVE ALL</button>
        <ol>
            {app.options.map((option)=> <li key = {option}>{option}</li>)}
        </ol>
        <form onSubmit={handleSubmit}>
            <input type="text" name="option"></input>
            <button>ADD OPTION</button>
        </form>
        </div>
    );
    ReactDOM.render(template,document.getElementById("app"));
}

reRender();