import React from 'react';
import breakfast from './breakfast.png' 
import lanch from './lanch.png'
import dinner from './dinner.png'
import './Start.css';

class Start extends React.Component {
    // constructor(props) {
        // super(props);
        // Не вызывайте здесь this.setState()!
        //this.state = { counter: 0 };
       // this.handleClick = this.handleClick.bind(this);
    // }
    render() {
        return (
            <div className='flex-column justify-center h100'>

                <div className='button-container button-container-top-height'>
                    <div className='breakfast flex-row'>
                        <img src={breakfast} className='image self-align-center'/>
                        <div className='self-align-center title'>Завтрак</div>
                    </div>
                    <div className='lunch flex-row'>
                        <img src={lanch} className='image self-align-center'/>
                        <div className='self-align-center title'>Обед</div>
                    </div>
                </div>

                <div className='button-container button-container-bottom-height'>
                    <div className='dinner flex-row'>
                        <img src={dinner} className='image self-align-center'/>
                        <div className='self-align-center title'>Ужин</div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Start;