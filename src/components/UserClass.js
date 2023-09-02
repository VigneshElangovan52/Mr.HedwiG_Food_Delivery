import React from "react";


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
            <div className="user-class-div">
                {/* <h2>Count: {count}</h2>
                <button onClick={onIncrement}>Increment Button</button> */}
                <img src = {avatar_url} alt="Display pic" style={{width: "100%", height: "30%"}}></img>
                <h1>{name}</h1>
                <h5>{bio}</h5>
                <h5>{location}</h5>
                <h5> GitHub: {html_url}</h5>
            </div>
            );
    };
}
export default UserClass;