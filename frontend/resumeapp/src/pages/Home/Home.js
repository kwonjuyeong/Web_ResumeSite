import React from 'react';
import './Home.css'
import homeImage from '../../assets/images/home-img.jpg'; // 상대 경로를 수정합니다.

function Home() {
  return (
    <div className="home"> {/* CSS 클래스를 적용합니다. */}
      <img src={homeImage} alt="홈 이미지" /> 
    </div>
  );
}

export default Home;