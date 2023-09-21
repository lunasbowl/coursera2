import React from "react";
import aboutUsImage1 from '../components/assets/about-us-1.jpg';
import aboutUsImage2 from '../components/assets/about-us-2.jpg';
import './AboutUs.css';

function AboutUs () {
    return (
        <>
            <section className="about-us">
                <div className="about-text">
                    <h2 className="about-little-lemon">Little Lemon</h2>
                    <h3 className="about-chicago">Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque sed leo vel nibh luctus tempus nec a elit. 
                        Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Nullam a dui in urna gravida pellentesque 
                        aliquet vitae massa. Proin mauris eros, posuere quis sapien quis, 
                        vehicula tristique metus.
                    </p>
                    <p>
                        Aenean rutrum, magna vel pulvinar feugiat, nibh justo venenatis tellus, 
                        quis lobortis eros ante sit amet magna. Vestibulum accumsan egestas 
                        eros non elementum. Integer eget mi ligula. Nulla vitae diam ex. 
                        Aliquam mollis, risus eget egestas congue, tellus nibh tristique velit, 
                        id iaculis eros metus quis ipsum. Praesent et luctus massa. 
                        Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Nunc eu eros diam. Vestibulum vulputate nulla neque, 
                        id accumsan dolor dignissim et. Aenean orci mauris, sodales at odio ut, 
                        auctor sagittis erat.
                    </p>
                </div>
                <div>
                    <div>
                        <img className="about-image" src={aboutUsImage1} alt="About us 1" />
                    </div>
                    <div>
                        <img className="about-image" src={aboutUsImage2} alt="About us 2" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;