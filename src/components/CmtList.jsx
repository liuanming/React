import React from "react"

import CmtItem from "@/components/CmtItem"


export default class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentList: [
                {id: 1, user: "张三", content: "哈哈，沙发"},
                {id: 2, user: "李四", content: "哈哈，板凳"},
                {id: 3, user: "王五", content: "哈哈，凉席"},
                {id: 4, user: "赵六", content: "哈哈，小崽子"},
                {id: 5, user: "田七", content: "哈哈，不会啊"},
            ],
            msg: "123"
        }
    }


    render() {
        return <div>
            <h1>这是评论列表组件</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}

            <button onClick={this.run}>按钮</button>

            <button onClick={this.xg}>修改</button>
            <p>{this.state.msg}</p>

            <input type="text" value={this.state.msg} onChange={(e) => this.txtchange(e)}/>
        </div>
    }


    /*run(){
         console.log("我要跑")
    }*/
    run = () => {
        console.log("跑起来")
    };

    xg = () => {
        this.setState({
            msg:"修改了"
        },function () {
            //修改后想立刻拿到最新的值
        })
    };

    txtchange = (e) => {
        const newVal = e.target.value;
        this.setState({
            msg:newVal
        })
    }

}