import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src ="https://avatars3.githubusercontent.com/u/51688346?s=460&u=1c474ee5990d90d27fffd5f4b3ddccb6574fe6df&v=4" alt ="Fabrício Bahiese"/>
                <div>
                    <strong>Fabrício Bahiense</strong>
                    <span>Programação</span>
                </div>
            </header>

                <p>
                    ablubluble
                </p>


            <footer>
                <p>
                    Preço/hora: 
                    <strong> R$ 40,00</strong>
                </p>
                
                <button type ="button">
                    <img src ={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato.
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;