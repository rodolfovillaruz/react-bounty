import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function App() {
  return (
    <div className="App">
      <div className="App-screen">
        <div className="App-container">
          <div className="App-header">
            <div className="App-header-links">
              Bounty Logo
            </div>
            <div className="App-header-push"></div>
            <div className="App-header-links">
              Home
            </div>
            <div className="App-header-links">
              |
            </div>
            <div className="App-header-links">
              About Us
            </div>
          </div>
          <div className="App-contents">
            <div className="App-content-box">
              <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide>Lorem ipsum dolor</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
            <div className="App-content-description">
              <h1>What we do</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum felis eu mi imperdiet, id dapibus orci hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dolor odio, pretium vitae est at, fermentum ornare massa. Vivamus aliquam tristique libero vel efficitur. Nulla iaculis, diam vel auctor pretium, justo lorem pellentesque massa, vestibulum vulputate risus nibh vitae felis. Maecenas sed leo varius, malesuada eros id, ultrices lorem. Quisque auctor ligula eget nulla egestas elementum.
              </p>
            </div>
          </div>
          <div className="App-footer">
            <div className="App-header-links">
              © 2022 Bounty Media Pte. Ltd, Singapore.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
