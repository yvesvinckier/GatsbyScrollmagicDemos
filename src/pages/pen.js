import React, { Component } from "react";
// import ScrollMagic from "../utils/ScrollMagic"; // my own wrapper for scrollmagic that includes greensock
// import { TweenMax, Linear } from "gsap";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear } from "gsap";
import "animation.gsap";
import "debug.addIndicators"
import imgPen from '../assets/images/img_pen-landscape.png'


class Pen extends Component {

    constructor(props) {
        super(props);
        // part1 trigger
        this.part1Trigger = null;
        this.part2Trigger = null;
        this.part3Trigger = null;
        this.part4Trigger = null;
        this.part5Trigger = null;
        this.part6Trigger = null;
    }

    componentDidMount() {
        // move the pen body up to connect with the first part
        TweenMax.set(this.part3Trigger, { y: -572 })
        // hide all headings and text
        // TweenMax.set(['.parts h2, .parts p'], { autoAlpha: 0 })
        // create a tween that will move the pen body back to its original css position
        const bodyToStart = TweenMax.to(this.part3Trigger, 1, {
            y: 0,
            ease: Linear.easeNone,
        })
        // Init ScrollMagic Controller
        const controller = new ScrollMagic.Controller();
        // Create a Scene 1 - move pen body back to start - HOW?
        const bodyToStartScene = new ScrollMagic.Scene({
            triggerElement: this.part1Trigger,
            triggerHook: 1,
            offset: 287,
            duration: 572
        })
            .setTween(bodyToStart)
            .addIndicators()
            .addTo(controller)

        // move 4 and 5 down, to connect with part 6 - HOW?
        // TweenMax.set('.part5', {y: 120});
        // TweenMax.set('.part4', {y: 289});

        // move part 6 to connect with the body
        TweenMax.set(this.part6Trigger, { y: -846 });

        // move 4 and 5 to connect with part 6 again
        TweenMax.set(this.part5Trigger, { y: -726 }); /* 120 - 846 */
        TweenMax.set(this.part4Trigger, { y: -557 }); /* 289 - 846 */

        // Create scene for part 6 - move part 6 back to start
        const p6ToStart = TweenMax.to('.part6', 1, { y: 0, ease: Linear.easeNone });

        const p6ToStartScene = new ScrollMagic.Scene({
            triggerElement: this.part1Trigger,
            triggerHook: 1,
            duration: 846,
            offset: 1250
        })
            .setTween(p6ToStart)
            // .addIndicators()
            .addTo(controller);

        // Create scene for part 5 - move part 5 back to start
        const p5ToStart = TweenMax.to(this.part5Trigger, 1, { y: 0, ease: Linear.easeNone });

        const p5ToStartScene = new ScrollMagic.Scene({
            triggerElement: this.part1Trigger,
            triggerHook: 1,
            duration: 726,
            offset: 1250
        })
            .setTween(p5ToStart)
            .addTo(controller);

        // Create scene for part 4 - move part 4 back to start
        const p4ToStart = TweenMax.to(this.part4Trigger, 1, { y: 0, ease: Linear.easeNone });

        const p4ToStartScene = new ScrollMagic.Scene({
            triggerElement: this.part1Trigger,
            triggerHook: 1,
            duration: 557,
            offset: 1250
        })
            .setTween(p4ToStart)
            .addTo(controller);

        // Loop through all parts and add a class .fade-in
        const arrayLi = document.getElementsByClassName('parts')[0].getElementsByTagName("li");
        console.log(arrayLi)
        let items = Array.from(arrayLi)
        console.log(items);
        items.map((item) => {
            const scene = new ScrollMagic.Scene({
                triggerElement: item,
                triggerHook: 0.55
            })
                .setClassToggle(item, 'fade-in')
                .addTo(controller);
            console.log(item);
        })
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
                                <li className="part2"
                                    ref={li => this.part2Trigger = li}>
                                    <h2>Heading 2</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part3"
                                    ref={li => this.part3Trigger = li}>
                                    <h2>Heading 3</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part4"
                                    ref={li => this.part4Trigger = li}>
                                    <h2>Heading 4</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part5"
                                    ref={li => this.part5Trigger = li}>
                                    <h2>Heading 5</h2>
                                    <p>
                                        Vivamus hendrerit in dui arcu sed erat molestie vehicula.
                                        Nullam in dui mauris.
                  </p>
                                </li>
                                <li className="part6"
                                    ref={li => this.part6Trigger = li}>
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