import React from 'react';

const Ninjas  = ({ninjas})=> {
    console.log(ninjas);
    const ninjaList=ninjas.map(ninja => {
        if(ninja.age>20) {
            return (
                <tr className="ninja" key={ninja.id}>
                
                    <td>{ninja.name} </td>
                    <td>{ninja.age} </td>
                    <td>{ninja.belt} </td>
                    
                </tr>
        
            );
        }
        else {
            return null;
        }
    });

    return (
        <div className="ninjaList">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Belt</th>
                    </tr>
                </thead>
                <tbody>
                    {ninjaList}
                </tbody>
            </table>
          
        </div>
    );
}

export default Ninjas;