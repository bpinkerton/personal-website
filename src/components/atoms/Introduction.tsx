import React from 'react';
import style from "../../styles/Introduction.module.css"

function Introduction() {
    return (
        <div id={""} className={"font-mono min-w-[520px]"}>
            <div className={"text-sm text-primary-dark "}>
                Hi, my name is
            </div>
            <div className={"text-5xl font-bold text-secondary-light py-4"}>
                Brandon Pinkerton.
            </div>
            <div className={"text-2xl wrapper inline-flex"}>
                <div className={"text-secondary-dark"}><span className={"flex flex-nowrap"}>I&apos;m a</span></div>
                <ul className={`text-primary-dark ${style.dynamicTxt}`}>
                    <li><span>Web Developer.</span></li>
                    <li><span>Teacher.</span></li>
                    <li><span>Freelancer.</span></li>
                    <li><span>Lifelong Learner.</span></li>
                </ul>
            </div>
            <div className={"text-sm italic text-secondary-light md:w-[430px] w-[250px] pt-4"}>
                I specialize in <span className={"text-primary-dark"}>RESTful API design</span>,
                responsive <span  className={"text-primary-dark"}>web and mobile UI </span>
                and efficient <span  className={"text-primary-dark"}>cloud architecture</span>. <br/>
                I am passionate about lifelong learning and seek to <span  className={"text-primary-dark"}>push the boundaries</span> of technology.
            </div>
        </div>
    );
}



export default Introduction;