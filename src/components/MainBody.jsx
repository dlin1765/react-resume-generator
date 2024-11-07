import "../styles/MainBody.css"
import resumePic from '../assets/resume.avif'
import FlexContainer from "./FlexContainer";

function MainBody(){
    const buttonStyle = {
        color: "#AO83C9",
    }

    return(
        <div className = "body1">
            <div className = "textBody1" >
                <h3 style = {{fontSize: '3em'}}>
                    Generate a professional resume for free!
                </h3>
                <button className = "b1">Click me to get started!</button>
            </div>

            <div>
                <img src = {resumePic} alt = "resume" />
            </div>
        </div>
    );
}

export default MainBody;