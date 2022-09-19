import React from 'react';
import Heading from "./Heading";
import Image from "next/image";
import PrimaryText from "./PrimaryText";

function About() {
    return (
        <div id={"about"} className={"js-show-on-scroll"}>
            <Heading index={1} label={"About Me"}/>
            <div className={"flex flex-wrap w-[350px] md:w-[700px] sm:w-[450px]"}>
                <div className={"pr-5 text-sm text-secondary-light font-mono max-w-[450px] pb-8"}>
                    Hi there! I&apos;m Brandon and I love all things technology.
                    My interest began in my teenage years where I started building custom computers
                    to keep up with the hardware boom in gaming. I quickly became fascinated with
                    how computers worked and, over time, my focus shifted from hardware to software.
                    <br/> <br/>
                    Over the years I have worked a variety of jobs within the tech-umbrella.
                    From <PrimaryText text={"Tech Support"}/>, <PrimaryText text={"Quality Assurance "}/>
                    and <PrimaryText text={"Product Owner"}/>, to <PrimaryText text={"Full Stack Engineer "}/>
                    and my latest endeavor, <PrimaryText text={"Software Engineering Trainer"}/>.
                    <br/> <br/>
                    My journey has carried me across several tech stacks and companies and I am grateful
                    for the experience and friendships I have gained along the way.
                    <br/> <br/>
                    Here are a few technologies I&apos;m working with:
                    <div className={"flex child:sm:px-4 pt-2 child:list-[square] child:marker:text-primary-dark child:ml-10"}>
                        <ul className={"child-hover:list-[disc] child-hover:marker:text-secondary-light"}>
                            <li>Java 8</li>
                            <li>Spring</li>
                            <li>REST</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <ul className={"child-hover:list-[disc] child-hover:marker:text-secondary-light"}>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Image src={"../../../me.jpg"} alt={"image of Brandon"} width={250} height={250}/>
                </div>

            </div>

        </div>
    );
}

export default About;