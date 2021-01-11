import React, { useState , useEffect } from 'react';

import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

import './styles.css';


function Landing() {


    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
          const { total } = response.data;

          setTotalConnections(total);
        })
    }, []);


    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="prof" />

                    <h2>Sua Plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} 
                alt="Plataforma de estudos"
                 className="hero-image"/>


                 <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="DarAulas"/>
                        Dar Aulas
                    </Link>

                 </div>

                 <span className="total-connections">
                        total de {totalConnections} conexões ja realizadas
                        <img src={purpleHeartIcon} alt="botaoRoxo"/>


                 </span>



            </div>
        </div>
    )
}


export default Landing;