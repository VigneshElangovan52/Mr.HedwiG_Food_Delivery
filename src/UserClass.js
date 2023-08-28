import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }

    render(){
        const {name, location, contact} = this.props;
        const {count} = this.state;
        const onIncrement = () =>{
            this.setState( 
                {
                count: count+1
                }
            )
        }
        return(
            <div className="user-class-div">
                <h2>Count: {count}</h2>
                <button onClick={onIncrement}>Increment Button</button>
                <h1>Name: {name}</h1>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
            );
    };
}
export default UserClass;