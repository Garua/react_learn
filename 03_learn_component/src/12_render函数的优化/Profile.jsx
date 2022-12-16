import {memo} from "react";


const Profile = memo(function Profile(props){
    console.log('profile render.....')
    return <h2>Profile:{props.message}</h2>
})

export default Profile