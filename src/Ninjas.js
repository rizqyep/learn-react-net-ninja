import React, {Component} from 'react';


class Ninjas extends Component{
    render() {
        const {ninjas}=this.props;
        console.log(ninjas);
        const ninjaList=ninjas.map(ninja => {
            return (
                <div className="ninja" key ={ninja.id}>
                    <div>Name : {ninja.name} </div>
                    <div>Age : {ninja.age} </div>
                    <div>Belt : {ninja.belt} </div>
                    <br></br>
                </div>
            
            );
        });
        return (
            <div className="ninjaList">
                {ninjaList}
            </div>
        );
    }
}

export default Ninjas;