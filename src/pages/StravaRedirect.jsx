import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
// import history from 'history';

export default function StravaRedirect(props) {
    const [complete, setComplete] = useState(false)
    // const [userData, setUserData] = useState({})
    const clientId  = import.meta.env.VITE_CLIENT_ID;
    const clientSecret  = import.meta.env.VITE_CLIENT_SECRET;

    const [token, setToken] = useState({})
    // const [refreshToken, setRefreshToken] = useState("")
    // const [accessToken, setAccessToken] = useState("")
    // const [userId, setUserId] = useState("")

    const navigate = useNavigate()

    

    const getAuthToken = (str) => {
        return str.split("&")[1].slice(5);};

   

    const getRefreshTokens = async (authTok) => {
        try {
            const response = await axios.post(
                `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authTok}&grant_type=authorization_code`
            );
            return response.data;
        } catch (error) {
            console.log("error 1",error);
        }
    }

    const getUserStats = async (id, accessToken) => {
        try {
            const response = await axios.get(
                `https://www.strava.com/api/v3/athletes/${id}/stats`,
                { headers: { Authorization: `Bearer ${accessToken}` } }
            );
            return response;
        } catch (error) {
            console.log("error 2", error);
        }
    };

    const getUserData = async (accessToken) => {
        try {
            const response = await axios.get(
                `https://www.strava.com/api/v3/athlete/activities?before=1670173061&after=1514764800&page=1&per_page=30`,
                { headers: { Authorization: `Bearer ${accessToken}` } }
            );
            return response;
        } catch (error) {
            console.log("error 2", error);
        }
    };


    const activate = async () => {
        try{
            const stravaAuthToken = getAuthToken(location.search)

            // console.log(stravaAuthToken)

            const tokens = await getRefreshTokens(stravaAuthToken)
            console.log(tokens)

            const accessToke = await tokens.access_token
            console.log(accessToke)
            // setToken(tokens)
            // setUserId(tokens.athlete.id)
            // setAccessToken(tokens.access_token)
            // setRefreshToken(tokens.refresh_token)

            const user = await getUserData(accessToke)
            // const user = await getUserStats(tokens.athlete.id, accessToke)
            props.setUserData(user)
            setComplete(true)



        } catch(err) {
            console.log("err 3", err)
        }
        
    };
    activate();

    useEffect(() => {
        // console.log("token UE", token)
        // console.log("access UE", accessToken)
        // console.log("refresh UE", refreshToken)
        // console.log("userId UE", userId)

        
        
    }, [token])

    useEffect(() => {
        console.log("user data", props.userData)
    }, [props.userData])

    const handleClick = () => {
        navigate("/yourdistance")
    }

    return (

        <div className="strava-redirect">
            {!complete && <h1>Loading....</h1>}

            {complete && <button onClick={handleClick}>See Results</button>}
            
           
        </div>
    )
}   