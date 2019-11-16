import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
import '../index.css'
import { Flex, WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <img style={{ width: '100%', height: '100%' }} src="./img/hot.jpg" alt="" />
    </div>
);
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff' }}
                >住吧家居</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1, 2].map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: '200px' }}
                        >
                            <img
                                src={`./img/${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height: '200px' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <div style={{ height: '124px', padding: '7px 0px', backgroundColor: '#eeeeee' }}>
                    <div className="flex-container">
                        <Flex>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                </div>
                <div style={{ paddingLeft: '10px', fontSize: '18px', height: '24px', borderLeft: '5px solid #3fcccb', marginTop: '10px' }}>
                    热门推荐
                </div>
                <div style={{ height: '175px', marginTop: "10px", textAlign: 'center' }}>
                    <img style={{ width: '100%', height: '100%' }} src="./img/2.jpg" alt="" />
                    <p style={{ marginTop: '-30px', color: "#fff" }}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>
                </div>
            </div>
        )
    }
}
