import { h, VNode } from 'vue';

export const GlobalIcon = (props, context) : VNode  => {
 const svg = require(`@/assets/svg/${props.icon}.svg`).default;
 return h(svg, { ...context.attrs }, () => [h(svg)]);
}

GlobalIcon.props = {
  icon: {
    type: String,
    required: true,
  },
};

export default GlobalIcon;