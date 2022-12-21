import React from 'react';
import PropTypes from "prop-types";

 const Profile = ({Bio,profession,fullName,children,handleName}) => {
    const myStyle={
        textAlign:"center",
        color:"#30D5C8",
        textTransform: "uppercase",
        fontFamily: ' Georgia, serif',margin:"auto",
    }
return (
<div>
<h1 style={myStyle}>  FullName={fullName}</h1>
<h2 style ={{color:"black",textAlign:"center"}}> Profession={profession}</h2>
<p style ={{color:"black",textAlign:"center"}}> Bio={Bio}</p>
{children}
<button  onClick={()=>handleName(fullName)}>click</button>
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


