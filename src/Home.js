import ItemList from './ItemList';
import SideContent from './SideContent';
import useFetch from './useFetch';


const Home = ({items}) => {

const {data, isLoad, error } = useFetch("http://localhost:8000/item");

    return (
    <div className="section">
         <h1>Main Page </h1>
        <div className="home">
            <div className="side-bar">
                <h1>Latest Notes </h1>
                <SideContent items={data} />
            </div>
        
         {error && <div>{error} </div> }
         {isLoad && <div className='loader'> </div> }
        {data && <ItemList item={data}  />}
        </div>
    </div>       
     );
}
 
export default Home;