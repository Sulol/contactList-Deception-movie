import React from 'react'
import './Style.css'

export default function Contact(props) {

    const tag = props.tags.map(o => <span>{o} </span>);

    const online = props.status ? 'greenButton' : 'grayButton';

    // let online = '';

    // props.status ? online = 'greenButton' : online = 'grayButton'

    

    const good = props.opan > 0 ? 'true' : 'false';


    return (
        <div className="block-tele">
            <div className="block_status">
                <div className={online}></div>
                <img src={props.imgUrl} alt="" className="block-img"/>
            </div>
            <div className="block-mess">
                <div>
                    <div className="block-tele__name">{props.name}</div>
                        <div className="block-tele__message">{props.message}</div>
                    <div className="tag">{tag}</div> 
                </div>
                <div>
                    <div className="time">{props.time}</div>
                    <div className={good}>{props.opan}</div>
                </div>
                  
            </div>
                 
        </div>
    )
}
