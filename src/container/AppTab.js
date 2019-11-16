import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppIdea from './AppIdea';
import AppStro from './AppStro';
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i style={{fontSize:'22'}} className='iconfont icon-home'></i>
            }
            selectedIcon={<i style={{fontSize:'22'}} className='iconfont icon-home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:'22'}} className='iconfont icon-linggan'></i>
            }
            selectedIcon={
              <i style={{fontSize:'22'}} className='iconfont icon-linggan'></i>
            }
            title="灵感"
            key="idea"
            selected={this.state.selectedTab === 'idea'}
            onPress={() => {
              this.setState({
                selectedTab: 'idea',
              });
            }}
          >
            <AppIdea/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:'22'}} className='iconfont icon-store_icon'></i>
            }
            selectedIcon={
              <i style={{fontSize:'22'}} className='iconfont icon-store_icon'></i>
            }
            title="商城"
            key="store"
            selected={this.state.selectedTab === 'store'}
            onPress={() => {
              this.setState({
                selectedTab: 'store',
              });
            }}
          >
            <AppStro/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:'22'}} className='iconfont icon-wode'></i>}
            selectedIcon={<i style={{fontSize:'22'}} className='iconfont icon-wode'></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}