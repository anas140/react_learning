import React from 'react'
const Ninjas = ({ninjas}) => {
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