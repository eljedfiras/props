import React from 'react';
import PropTypes from "prop-types";

 const Profile = (props) => {
    console.log(props);
    const myStyle={
        textAlign:"center",
        color:"#30D5C8",
        textTransform: "uppercase",
        fontFamily: ' Georgia, serif',margin:"auto",
    }
return (
<div>
<h1 style={myStyle}>  FullName={props.fullName}</h1>
<h2 style ={{color:"black",textAlign:"center"}}> Profession={props.profession}</h2>
<p style ={{color:"black",textAlign:"center"}}> Bio={props.Bio}</p>
{props.children}
</div>
)} 

Profile.defaultProps={
    FullName:'GoMyCode(default)',
    Bio:'Formation Center(default)',
    Profession:'Formation Center(default)'
}

Profile.propTypes = {
    Fullname: PropTypes.string,
    Bio:PropTypes.string,
    Profession:PropTypes.string,

}
export default Profile;
