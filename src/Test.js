import React, {component} from 'react';
import "./Test.css"
// const App =() => {
//     return (
//       <div>
//         <h1 id="testId">Hello, I am Sahil</h1>
//       </div>
//     );
//   };

class Test extends component {
    //  state = {
        //  isLoggedIn: false;
     //};
     state = {isLoggedIn: false};
     render() {
        return (
            <div>
                {/* if(this.isLoggedIn) {
                    <h1>You are not legend In!</h1>
                } */}
                {/* <h1>You are not legend In!</h1> */}
                {!this.state.isLoggedInLoggedIn ? (
                    <h1>You are not legend In!</h1>
                ) : (
                    <h1>Congratulations, You are logged in!</h1>
                )
            }
                {/* <h1>Congratulation, you are logged in!</h1> */}
                <button onClick={(e) => this.setState({isLoggedIn: !this.state.isLoggedIn})}>
                    Login!
                </button>
            </div>
        )
     }
}
        //   render() {
        //     console.log("Hello");
        //     return (
        //         <div>
        //             <h1 id="testId">Hello</h1>
        //              </div>
                    /* <style>
                    .testId {
                        color: "red";
                    }
                    </style> */
                    /* <h1
                     id="testId" */
                     /* style={{ */
                    //     color: "red",
                    //     backgroundColor:"yellow",
                    //  }}
                        // >
                        //     Hello, I am Sahil
                        /* //     </h1> */
                
        //     );
        //   };
           // );
 
//}
  
  export default Test;