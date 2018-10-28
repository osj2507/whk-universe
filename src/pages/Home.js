import React from "react";

import './Home.css';

function Home() {
  return (
    <>
      <section id="universe">
        <div id="galaxy">
          <div id="solar-system">
            <div id="mercury" class="orbit">
              <div class="pos">
                <div class="planet">
                </div>
              </div>
            </div>
            <div id="venus" class="orbit">
              <div class="pos">
                <div class="planet">
                </div>
              </div>
            </div>
            <div id="earth" class="orbit">
              <div class="pos">
                <div class="orbit">
                  <div class="pos">
                    <div class="moon"></div>
                  </div>
                </div>
                <div class="planet">
                </div>
              </div>
            </div>
            <div id="mars" class="orbit">
              <div class="pos">
                <div class="planet">
                </div>
              </div>
            </div>
            <div id="jupiter" class="orbit">
              <div class="pos">
                <div class="planet">
                </div>
              </div>
            </div>
            <div id="saturn" class="orbit">
              <div class="pos">
                <div class="planet">
                  <div class="ring"></div>
                </div>
              </div>
            </div>
            <div id="uranus" class="orbit">
              <div class="pos">
                <div class="planet">
                </div>
              </div>
            </div>
            <div id="neptune" class="orbit">
              <div class="pos">
                <div class="planet">
                </div>
              </div>
            </div>
            <div id="sun">
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
