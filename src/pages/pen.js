import React, { Component } from "react";
import { TweenMax } from "gsap/all";
import imgPen from '../assets/images/img_pen-landscape.png'

class Pen extends Component {

    constructor(props) {
        super(props);
        // part1 trigger
        this.part1Trigger = null;
    }

    componentDidMount() {
        // move the pen body up to connect with the first part
        TweenMax.set('.part3', { y: -572 })
    }
    render() {
        return (

            <div className="">
                <header>
                    <div className="wrapper clearfix">
                        <h1 className="title">Pen Animation</h1>
                        <p className="intro">
                            Learn how to reveal parts of a product or uncover your story step
                            by step.
            </p>
                        <p className="intro-img">
                            <img src={imgPen} alt="" />
                        </p>
                    </div>
                </header>
                <main>
                    <section className="section-static bcg-white">
                        <div className="wrapper">
                            <h1>Static Section</h1>
                            <p className="subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula.{' '}
                            </p>
                        </div>
                    </section>

                    <section id="reveal-effect" className="section-static bcg-blue">
                        <div className="wrapper">
                            <h1>Reveal Effect</h1>
                            <p className="subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula.{' '}
                            </p>
                            <ol className="parts">
                                <li
                                    className="part1"
                                    ref={li => this.part1Trigger = li}>
                                    <h2>Heading 1</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part2">
                                    <h2>Heading 2</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part3">
                                    <h2>Heading 3</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part4">
                                    <h2>Heading 4</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part5">
                                    <h2>Heading 5</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part6">
                                    <h2>Heading 6</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                            </ol>
                        </div>
                    </section>
                    <section className="section-static bcg-white">
                        <div className="wrapper">
                            <h1>Static Section</h1>
                            <p className="subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula.{' '}
                            </p>
                        </div>
                    </section>
                </main>
                <footer>
                    <div className="wrapper clearfix">
                        <p>
                            &copy; 2016{' '}
                            <a href="https://ihatetomatoes.net/product/scrollmagic-workshop/">
                                {' '}
                                Petr Tichy - Ihatetomatoes.net
              </a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Pen