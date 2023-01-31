import React from "react";

const AllUserList = () => {
    const [state, setState] = useState({
        name: "Abcd",
    })
    state = {
        name: "Abcd",
    };
    let allUsers = [
        
        {
            name: "john",
            email: "john@gmail.com",
            phone: "+91223456",
        },
        {
            name: "shreya",
         email: "abc@gmail.com",
         phone:12345
        },
        {
            name: "reya",
         email: "cd@gmail.com",
         phone:12545
        },
    ];
    state.name = "bcd";

    //let array = [
        // <UserDetails user={allUser[0]}/>,
        // <UserDetails user={allUser[1]}/>,
        // <UserDetails user={allUser[2]}/>,

    //     allUsers.map((user, index) =>
    //     <userDetails = key={index} user={user} />
    //     ));

    // ];

    // WebGL2RenderingContext() {
    //     setTimeout(() => {
    //         this.setState({name: "sahil"});
    //     }, 1500);
    // }

    return (
        <div>
            {/* {allUsers[0]} */}
            {/* <h1>The name is (this.state.name)</h1>
            this.allUser.map((user, index) => (
                <userDetails keys={index} user={user} />
            ))  */}
        </div>
    )
}