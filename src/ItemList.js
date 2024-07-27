import { Link } from "react-router-dom";

const ItemList = (props) => {
    
    const item = props.item;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return (

        <div className="homeContent container-fluid">
            
             {/* {item.map((item) => (
            <div className="item-prev" key={item.id} >
            <Link to={`/details/${item.id}` } >
            
            <h4>{item.title}</h4>
            <div className='prev-mess'> 
            <span>Descrption : <p className="type-tag ">{item.type } </p> </span> 
            <p>{item.date} </p> 
            <button className="btn" onClick={()=> handleDelete(item.id)}> <i className="bi bi-trash"></i></button>
             </div>
            </Link>
             </div>
        ))} */}
    <div className="container">
    <div className="row mt-2">
        {item.map((item) => 
            <div className="col-md-4 mt-2 " key={item.id}>
                 <Link to={`/details/${item.id}` } >
                <div className="card card-style ">
                <h1 className="card-header">{item.title}</h1>
                    <div className="card-body card-style">
                        
                        <p className="card-text">Type: {item.type}</p>
                        <p className="card-text">Descript: {item.description } </p>
                        <p className="card-text">Date: {item.date}</p>
                    </div>
                </div>
                </Link>
            </div>
        )}
    </div>
</div>


    </div>
    );
}
 
export default ItemList;

