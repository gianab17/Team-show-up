import React from 'react'

function SignUpInfo() {
    return (
        <div className="sign-up-container">
        <input type="text" id="input_type" placeholder="Type" selectBoxOptions="Individual; Family; Family/Individual"/>
        <input type="text" id="input_model" placeholder="model" selectBoxOptions="Honda; Ford; Toyota; Fiat; Jeep"/>
        <input type="text" id="input_mileage" placeholder="mileage" selectBoxOptions="Good; Great"/>
        <input type="text" id="input_seats" placeholder="seats" selectBoxOptions="4; 5; 6"/>
        </div>
    ) 
}

export default SignUpInfo;