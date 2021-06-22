
import Maincard from "./MainCard/Maincard";

const Main = ({results}) => {

    // console.log(results);

    let data =[];
    if(results.data){
        // console.log(results.data);
        data= results.data.Search||[];
    }
    return (
        <main>
            <div className="container">
                {data.map((film) =>{

                    return <Maincard key={film.imdbID} data ={film} />
                })}          
            </div>
            
        </main>
    )
}

export default Main
