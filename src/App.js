import React from 'react'
import ContactList from './components/ContactList/ContactList'
import './index.css'
import './fonts.css'

export default function App() {
    return (
        <div className="block">
            <div className="block__top">
                <div className="icon-menu"></div>
                <div className="tele">Telegram</div>
                <div className="icon-search"></div>
            </div>
            <ContactList />
        </div>
    )
}
