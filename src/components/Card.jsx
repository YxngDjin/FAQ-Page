import { minus, plus, star } from "../assets/images"
import { useState } from "react";



const Card = () => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);

    const toggleAnswer1 = () => {
        setShowAnswer1(!showAnswer1);
    };

    const toggleAnswer2 = () => {
        setShowAnswer2(!showAnswer2);
    };

    const toggleAnswer3 = () => {
        setShowAnswer3(!showAnswer3);
    };

    const toggleAnswer4 = () => {
        setShowAnswer4(!showAnswer4);
    };


  return (

    <section className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="flex max-sm:w-[80%] bg-white rounded-3xl p-[30px] flex-col">
            <div className="flex h-[20%] w-full items-center mb-9">
                <img 
                    src={star} 
                    alt="star"
                    id="star"
                    className="scale-[0.5] w-[6rem]"
                />
                <h1 className="flex font-bold text-[3rem] text-darkpurple">
                    FAQs
                </h1>
            </div>
            <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="xl:text-xl text-darkpurple font-bold">
                            What is Frontend Mentor, <br className="lg:hidden" />and how will it help me?  
                        </p>
                        <div className="flex relative" onClick={toggleAnswer1}>
                            {showAnswer1 ? (
                                <img 
                                    src={minus}
                                    alt="minus"
                                    className="w-6"
                                />
                            ) : (
                                <img 
                                    src={plus} 
                                    alt="plus"
                                    className="w-6"
                                />
                            )}
                        </div>
                    </div>
                    {showAnswer1 && (
                        <p className="mt-5 text-grayishpurple transition-all">
                            Frontend Mentor offers realistic coding challenges to help developers <br /> improve their  
                            frontend coding skills with projects in HTML, CSS,<br /> and JavaScript. It's suitable for 
                            all levels and ideal for portfolio building.
                        </p>
                    )}
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="xl:text-xl text-darkpurple font-bold">
                            Is Frontend Mentor free?  
                        </p>
                        <div className="flex relative" onClick={toggleAnswer2}>
                            {showAnswer2 ? (
                                <img 
                                    src={minus}
                                    alt="minus" 
                                    className="w-6"
                                />
                            ) : (
                                <img 
                                    src={plus} 
                                    alt="plus" 
                                    className="w-6"
                                />
                            )}
                        </div>
                    </div>
                    {showAnswer2 && (
                        <p className="mt-5 text-grayishpurple transition-all">
                            Yes, Frontend Mentor offers both free and premium coding<br /> challenges, with the free 
                            option providing access<br /> to a range of projects suitable for all skill levels.
                        </p>
                    )}
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="xl:text-xl text-darkpurple font-bold">
                            Can I use Frontend <br className="lg:hidden" />Mentor projects in my portfolio?  
                        </p>
                        <div onClick={toggleAnswer3} className="flex relative">
                            {showAnswer3 ? (
                                <img 
                                    src={minus}
                                    alt="minus" 
                                    className="w-6"
                                />
                            ) : (
                                <img 
                                    src={plus} 
                                    alt="plus" 
                                    className="w-6"
                                />
                            )}
                        </div>
                    </div>
                    {showAnswer3 && (
                        <p className="mt-5 text-grayishpurple transition-all">
                            Yes, you can use projects completed on Frontend Mentor<br /> in your portfolio. It's an excellent
                            way<br /> to showcase your skills to potential employers!
                        </p>
                    )}
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="xl:text-xl text-darkpurple font-bold">
                            How can I get help if I'm stuck<br className="lg:hidden" /> on a Frontend Mentor challenge?  
                        </p>
                        <div onClick={toggleAnswer4} className="flex relative">
                            {showAnswer4 ? (
                                <img 
                                    src={minus}
                                    alt="minus"
                                    className="w-6"
                                />
                            ) : (
                                <img 
                                    src={plus} 
                                    alt="plus"
                                    className="w-6"
                                />
                            )}
                        </div>
                    </div>
                    {showAnswer4 && (
                        <p className="mt-5 text-grayishpurple transition-all">
                            The best place to get help is inside Frontend Mentor's <br />Discord community. There's a help
                            channel where you can<br /> ask questions and seek support from other community members.
                        </p>
                    )}
                </div>
        </div>
    </section>
  )
}

export default Card