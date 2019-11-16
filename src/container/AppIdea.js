import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs } from 'antd-mobile';
import '../index.css';
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' }
];
const page=['橙色律动','儿童房','翻滚吧，地毯君','角落里的遐想','橙色律动','儿童房'];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff' }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{backgroundColor: '#eeeeee', marginTop: '-10px', paddingTop: '20px' }}>
                        <ul>
                            {
                                [1,2,3,4,5,6].map((item,index)=>(
                                    <li style={{backgroundColor:'#fff',width:'45%',height:'180px',float:'left',marginLeft:'12px',marginTop:'10px'}}>
                                        <img src="./img/3.jpg" alt="" style={{width:'100%',height:'80%'}}/>
                                        <div style={{width:'40px',height:'40px',borderRadius:'20px',margin:'-15px 0 0 10px',overflow:'hidden',display:'inline-block'}}>
                                            <img src="./img/men.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <span style={{marginLeft:'5px',fontSize:'10px'}}>{page[item-1]}</span>
                                        <i style={{fontSize:'22',float:'right',margin:'10px 10px',color:'red'}} className='iconfont icon-dianzan'></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{backgroundColor: '#eeeeee', marginTop: '-10px', paddingTop: '20px' }}>
                        <ul>
                            {
                                [1,2,3,4,5,6].map((item,index)=>(
                                    <li style={{backgroundColor:'#fff',width:'45%',height:'180px',float:'left',marginLeft:'12px',marginTop:'10px'}}>
                                        <img src="./img/3.jpg" alt="" style={{width:'100%',height:'80%'}}/>
                                        <div style={{width:'40px',height:'40px',borderRadius:'20px',margin:'-15px 0 0 10px',overflow:'hidden',display:'inline-block'}}>
                                            <img src="./img/men.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <span style={{marginLeft:'5px',fontSize:'10px'}}>{page[item-1]}</span>
                                        <i style={{fontSize:'22',float:'right',margin:'10px 10px',color:'red'}} className='iconfont icon-dianzan'></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{backgroundColor: '#eeeeee', marginTop: '-10px', paddingTop: '20px' }}>
                        <ul>
                            {
                                [1,2,3,4,5,6].map((item,index)=>(
                                    <li style={{backgroundColor:'#fff',width:'45%',height:'180px',float:'left',marginLeft:'12px',marginTop:'10px'}}>
                                        <img src="./img/3.jpg" alt="" style={{width:'100%',height:'80%'}}/>
                                        <div style={{width:'40px',height:'40px',borderRadius:'20px',margin:'-15px 0 0 10px',overflow:'hidden',display:'inline-block'}}>
                                            <img src="./img/men.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <span style={{marginLeft:'5px',fontSize:'10px'}}>{page[item-1]}</span>
                                        <i style={{fontSize:'22',float:'right',margin:'10px 10px',color:'red'}} className='iconfont icon-dianzan'></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{backgroundColor: '#eeeeee', marginTop: '-10px', paddingTop: '20px' }}>
                        <ul>
                            {
                                [1,2,3,4,5,6].map((item,index)=>(
                                    <li style={{backgroundColor:'#fff',width:'45%',height:'180px',float:'left',marginLeft:'12px',marginTop:'10px'}}>
                                        <img src="./img/3.jpg" alt="" style={{width:'100%',height:'80%'}}/>
                                        <div style={{width:'40px',height:'40px',borderRadius:'20px',margin:'-15px 0 0 10px',overflow:'hidden',display:'inline-block'}}>
                                            <img src="./img/men.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <span style={{marginLeft:'5px',fontSize:'10px'}}>{page[item-1]}</span>
                                        <i style={{fontSize:'22',float:'right',margin:'10px 10px',color:'red'}} className='iconfont icon-dianzan'></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{backgroundColor: '#eeeeee', marginTop: '-10px', paddingTop: '20px' }}>
                        <ul>
                            {
                                [1,2,3,4,5,6].map((item,index)=>(
                                    <li style={{backgroundColor:'#fff',width:'45%',height:'180px',float:'left',marginLeft:'12px',marginTop:'10px'}}>
                                        <img src="./img/3.jpg" alt="" style={{width:'100%',height:'80%'}}/>
                                        <div style={{width:'40px',height:'40px',borderRadius:'20px',margin:'-15px 0 0 10px',overflow:'hidden',display:'inline-block'}}>
                                            <img src="./img/men.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <span style={{marginLeft:'5px',fontSize:'10px'}}>{page[item-1]}</span>
                                        <i style={{fontSize:'22',float:'right',margin:'10px 10px',color:'red'}} className='iconfont icon-dianzan'></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{backgroundColor: '#eeeeee', marginTop: '-10px', paddingTop: '20px' }}>
                        <ul>
                            {
                                [1,2,3,4,5,6].map((item,index)=>(
                                    <li style={{backgroundColor:'#fff',width:'45%',height:'180px',float:'left',marginLeft:'12px',marginTop:'10px'}}>
                                        <img src="./img/3.jpg" alt="" style={{width:'100%',height:'80%'}}/>
                                        <div style={{width:'40px',height:'40px',borderRadius:'20px',margin:'-15px 0 0 10px',overflow:'hidden',display:'inline-block'}}>
                                            <img src="./img/men.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <span style={{marginLeft:'5px',fontSize:'10px'}}>{page[item-1]}</span>
                                        <i style={{fontSize:'22',float:'right',margin:'10px 10px',color:'red'}} className='iconfont icon-dianzan'></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Tabs>
            </div>
        )
    }
}
