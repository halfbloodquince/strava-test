

export default function Home() {
    const clientId  = import.meta.env.VITE_CLIENT_ID;
    const redirectUrl = "http://localhost:5174/redirect";
    const scope = "activity:read_all"

    // console.log(stravaAuthToken)


    const handleLogin = () => {
        console.log(clientId)
        window.location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
    }



    return (
    <div className="Homepage">
        <h1>Hi</h1>
        <button onClick={handleLogin}>Connect with Strava</button>
    </div>
    
    )
};
