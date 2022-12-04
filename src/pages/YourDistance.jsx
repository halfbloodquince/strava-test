

export default function YourDistance(props) {

    console.log("YOUR DISTANCE USER DATA ",props.userData)
  return (
    <div className="distance">
        <div className="dist--title">Your Latest Runs</div>

        
        <div className="time--quick">
            <div>{(props.userData.data[0].moving_time / 60).toFixed(1)} min</div>
            <div>{(props.userData.data[0].distance / 1000).toFixed(2)} km</div>
            <div>{(props.userData.data[0].distance / 1000).toFixed(2)} km</div>
        </div>
        <div className="time--quick">
            <div>{(props.userData.data[1].moving_time / 60).toFixed(1)} min</div>
            <div>{(props.userData.data[1].distance/1000).toFixed(2)} km</div>
        </div>
        <div className="time--quick">
            <div>{(props.userData.data[2].moving_time / 60).toFixed(1)} min</div>
            <div>{(props.userData.data[2].distance/1000).toFixed(2)} km</div>
        </div>
        <div className="time--quick">
            <div>{(props.userData.data[3].moving_time / 60).toFixed(1)} min</div>
            <div>{(props.userData.data[3].distance/1000).toFixed(2)} km</div>
        </div>
        <div className="time--quick">
            <div>{(props.userData.data[4].moving_time / 60).toFixed(1)} min</div>
            <div>{(props.userData.data[4].distance/1000).toFixed(2)} km</div>
        </div>
    </div>
  )
}
