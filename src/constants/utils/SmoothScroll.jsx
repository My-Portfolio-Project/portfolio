/* eslint-disable react/prop-types */

import ReactLenis from "@studio-freight/react-lenis"


const SmoothScroll = ({children}) => {
  return (
<ReactLenis
option={{
    duration: 3,
    easing: (t) => Math.min(1,1.001 - Math.pow(3, -20 * t)),
    smoothWheel: true,
    SmoothScrolltrue: true,
    infinite:false,
    direction: "vertical",
    wheelMultiplier: 1,
    touchMultiplier: 1
}}
root
>
    {children}
</ReactLenis>
  )
}

export default SmoothScroll
