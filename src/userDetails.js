import React , {component} from 'react';

// const userDetails = ({user={}}) => {
//     return (
//         <div>
//            <h3>{user.name}</h3> 
//            <h5>Email: {user.email}<br/>
//            phone Number: {user.phone}</h5>
           
//         </div>
//     );
// };
class UserDetails extends component {
    // {user} = this.props.user;
    user = this.user;
   render(){
       return(
        <div>
            <h3>{this.user.name}</h3>
            <h5>
                Email: {this.user.email}
                <br />
                phone Number: {this.user.phoneNumber}
            </h5>
        </div>
       );
    }
   }


export default userDetails;