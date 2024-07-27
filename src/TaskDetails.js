import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {

    const { id } = useParams();
    const {data: item, isLoad, error } = useFetch('https://servern-tyr6.onrender.com/item/' + id );
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('https://servern-tyr6.onrender.com/item/' + item.id , {
            method: "DELETE", 
        }).then(() => {
            navigate("/Home");
        })
    }
    console.log(item);

    return ( 
        <div className="taskdetails">
    <h1>Task Details </h1>

{error && <div>{error} </div> }
{isLoad && <div className='loader'> </div> }
{item && (
    <div className="detail-cont">
        <article>
    <h1>{item.title} </h1>
    <p> Type: {item.type} </p>
    <p>Description: {item.description} </p>
    <p>{item.date} </p>
   
    <button className="btn btn-danger" onClick={handleDelete}>
        Delete Note
    </button>
</article>
    </div>


)}
        </div>
     );
}
 
export default TaskDetails;