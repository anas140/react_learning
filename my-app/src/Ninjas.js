import React from 'react'
import './Ninjas.css';
const Ninjas = ({ninjas, deleteNinja}) => {
    // const ninjaList = ninjas.map(ninja => {
    //     if( ninja.age > 22) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //                 <hr/>
    //             </div>
    //         );
    //     } else {
    //         return null
    //     }
    // })
    
    const ninjaList = ninjas.map((ninja) => {
        return (ninja.age > 22) ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>age {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>X</button>
                <hr/>
            </div>
        ) : null;
    })
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>  
    );
}
export default Ninjas;