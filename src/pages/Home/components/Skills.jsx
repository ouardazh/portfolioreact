import './Skills.css'
function Skills(){
    return(
        <div className="containerskills">

            <p className='titleskills'>My Skills:</p>
            <div className='skills'>
                <label for="progress">HTML:</label>
                <progress value="80" max="100"></progress> <br/>

                <label for="progress">CSS:</label>
                <progress value="70" max="100"></progress> <br/>

                <label for="progress">JavaScript:</label>
                <progress value="50" max="100"></progress> <br/>

                <label for="progress">Git:</label>
                <progress value="60" max="100"></progress> <br/>

                <label for="progress">React:</label>
                <progress value="10" max="100"></progress> <br/>

            </div>
         
        </div>
       
    )
}
export default Skills;