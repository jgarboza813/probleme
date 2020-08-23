import React from "react"
import "./Splash.css"
import Video from "../../static/video.mp4"

export default function Home() {
  return <div>
  <div class="spotify">
    <iframe class="spotify" src="https://open.spotify.com/embed/track/5SmX8PF2yeAeCimP2tmeV1" width="300" height="80" allowtransparency="true" allow="media"></iframe>
  </div>
  <div class="contain">
    <video autoPlay muted loop id="bg" class="bg">
      <source src={Video} type="video/mp4" />
    </video>
    <div class="knockout">
      Problèmè
    </div>
  </div>
  <div class="content">

  </div>
  </div>
}
