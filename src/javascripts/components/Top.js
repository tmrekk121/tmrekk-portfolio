import React from "react";

export default class Works extends React.Component {
  render() {
    return (
        <div className="slide" id="slide">
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
            images/flower_gjmhn8_c_scale,w_200.jpg 200w,
            images/flower_gjmhn8_c_scale,w_792.jpg 792w,
            images/flower_gjmhn8_c_scale,w_1008.jpg 1008w,
            images/flower_gjmhn8_c_scale,w_1179.jpg 1179w,
            images/flower_gjmhn8_c_scale,w_1283.jpg 1283w,
            images/flower_gjmhn8_c_scale,w_1400.jpg 1400w"
            src="images/flower_gjmhn8_c_scale,w_1400.jpg"
            alt="Flower"
            decoding="async" />
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
            images/leaf_kuvfb0_c_scale,w_200.jpg 200w,
            images/leaf_kuvfb0_c_scale,w_810.jpg 810w,
            images/leaf_kuvfb0_c_scale,w_1198.jpg 1198w,
            images/leaf_kuvfb0_c_scale,w_1400.jpg 1400w"
            src="images/leaf_kuvfb0_c_scale,w_1400.jpg"
            alt="Leaf"
            decoding="async" />
        </div>
    );
  }
}
