import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
import '../index.css'
import { Flex, WhiteSpace, Icon ,SearchBar} from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`}  {...restProps}>
        <div style={{ marginLeft: '5px', backgroundColor: 'red', width: '50px', borderRadius: '25px', height: '50px', textAlign: 'center', lineHeight: '50px' }}>
            <i style={{ fontSize: '35', color: '#fff' }} className='iconfont icon-gouwuche'></i>
        </div>
    </div>
);
const PlaceHolders = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <img style={{ width: '100%', height: '100%' }} src="./img/tea.jpg" alt="" />
        <p>To art stadio 欧式风格 </p>
        <p style={{ marginLeft: '-90px', marginTop: '-10px', color: '#000' }}>￥39.95</p>
    </div>
);
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff' }}
                    rightContent={[
                        <i style={{ fontSize: '22' }} className='iconfont icon-gouwuche'></i>
                    ]}
                >商城</NavBar>
                <Carousel

                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1, 2, 3, 4].map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: '200px' }}
                        >
                            <img
                                src={`./img/${val % 2 + 1}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height: '200px' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            <div style={{ margin: "-190px 10px 10px 30px",position:"relative"}}>
                                <i style={{ fontSize: '35', color: '#fff' }} className='iconfont icon-caidan'></i>
                                <input
                                    style={{
                                        width: '80%', height: '25px', marginLeft: '10px',
                                        border: '0', backgroundColor: '#f5e9e2',
                                        borderRadius: '3px', fontSize: '12px',textIndent:"3em",
                                        
                                    }}
                                    type="text" placeholder='输入关键字搜索' />
                                    <i className='iconfont icon-search'  style={{color: '#bbb',position:"absolute",left:30}}></i>
                            </div>
                        </a>
                    ))}
                </Carousel>
                <div>
                    <div className="flex-container" >
                        <Flex style={{ textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>
                            <Flex.Item><PlaceHolder /><p>桌</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>床</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>椅</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>几</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>柜</p></Flex.Item>
                        </Flex>
                        <Flex style={{ textAlign: 'center', fontSize: '13px' }}>
                            <Flex.Item><PlaceHolder /><p>书架</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>床</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>家居饰品</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>户外家具</p></Flex.Item>
                            <Flex.Item><PlaceHolder /><p>全部分类</p></Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                </div>
                <div style={{ height: '100%', padding: '7px 0px', backgroundColor: '#eeeeee' }}>
                    <div className="flex-container">
                        <Flex>
                            <Flex.Item><PlaceHolders /></Flex.Item>
                            <Flex.Item><PlaceHolders /></Flex.Item>
                        </Flex>
                        <Flex style={{marginTop:'10px'}}>
                            <Flex.Item><PlaceHolders /></Flex.Item>
                            <Flex.Item><PlaceHolders /></Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                </div>
            </div>
        )
    }
}
