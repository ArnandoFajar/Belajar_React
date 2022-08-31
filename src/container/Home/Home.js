import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";
import "./Home.css";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponent: true,
  };

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({
  //         showComponent: false,
  //       });
  //     }, 15000);
  //   }

  render() {
    return (
      <div>
        {/* <h2>Youtube Component</h2>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Ini Judul"
                    desc="102 ditonton. 10 hari yang lalu"
                />
                <YoutubeComp 
                    time="2.23" 
                    title="Ini Judul 2"
                    desc="200 ditonton. 19 hari yang lalu"
                />
                <YoutubeComp 
                    time="5.23" 
                    title="Ini Judul 3"
                    desc="500 ditonton. 20 hari yang lalu"
                />
                <YoutubeComp/> */}
        {/* <p>Counter</p>
                <hr/>
                <Product/> */}

        {/* Life cycyle component
        <p>LifeCycle Component</p>
        <hr />

        {this.state.showComponent ? <LifeCycleComp /> : null} */}

        {/* API  */}
        <BlogPost/>
      </div>
    );
  }
}

export default Home;
