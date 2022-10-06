import './App.css';
const newLocal = 'video/mp4';
const About = (props) => {
    return (
        <>
       
            <div class="main ">
                
            </div>
            <div  className={props.iteam}>
                    <video autoPlay muted loop><source src={props.video} type={newLocal} /></video>
                    <h6>{props.name}</h6>
                    <div>
                        <button>KNOW more..!</button>
                    </div>
             </div>
        </>
    );
}
export default About