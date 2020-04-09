import React, {Component} from 'react';
import { Card, Tabs } from "antd";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";
import Auxiliary from "../../util/Auxiliary";
import { ClockCircleOutlined, HourglassOutlined, GithubOutlined } from '@ant-design/icons';

const TabPane = Tabs.TabPane;

class HrTimer extends Component {
  render() {
    return (
      <Auxiliary>
        <Card title=<span className="Heading">HR Timer</span>>
          <Tabs type="card">
            <TabPane tab=<span><ClockCircleOutlined />Timer</span> key="timer">
              <Timer />
            </TabPane>
            <TabPane tab=<span><HourglassOutlined />Stopwatch</span> key="stopwatch">
              <Stopwatch />
            </TabPane>
          </Tabs>
        </Card>
        <a href="https://github.com/aman1106/react-timer" target="_blank">
          <GithubOutlined style={{fontSize: 20, margin: 10, color: "#3f3f3f"}}/>
        </a>
      </Auxiliary>
    )
  }
}

export default HrTimer;
