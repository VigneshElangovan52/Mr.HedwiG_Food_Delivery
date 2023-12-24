import React from "react";
import { Link } from "react-router-dom";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            UserData : {
            name: "",
            html_url: "",
            location: "",
            avatar_url: "",
            bio: ""
            }
        };
    }

    async componentDidMount(){


                const github_url = "https://api.github.com/users/VigneshElangovan52";
                const  response = await fetch (github_url);
                const data = await response.json();
                console.log(data);

                this.setState({
                    UserData: data,
                });

        //console.log("Component Did Mount");
    }

    render(){
        //const {name, location, contact} = this.props;
        const {name, html_url, location, avatar_url, bio} = this.state.UserData;
        //const {count} = this.state;
        // const onIncrement = () =>{
        //     this.setState( 
        //         {
        //         count: count+1
        //         }
        //     )
        // }
        return(
            <Link to={html_url}><div className="bg-stone-400 my-5 border border-solid border-gray-200 w-1/2 h-60 rounded-lg hover:bg-slate-300">
                {/* <h2>Count: {count}</h2>
                <button onClick={onIncrement}>Increment Button</button> */}
                <img className= "m-1 p-2 w-56 float-left" src = {avatar_url} alt="Display pic"></img>
                <h1 className="font-bold py-2 mt-2">{name}</h1>
                <h5 className="font-mono">{location}</h5>
                <h5 className="whitespace-normal font-serif p-2">{bio}</h5>
                <h5 className="font-mono underline decoration-indigo-500 font-bold"> GitHub: 👩‍💻{html_url}</h5>
            </div></Link>
            );
    };
}
export default UserClass;