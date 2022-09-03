import React, { Component, Fragment } from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeComPage extends Component {
  render() {
    return (
      <Fragment>
        <p>Youtube Component</p>
        <hr />
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
      </Fragment>
    );
  }
}
export default YoutubeComPage;
