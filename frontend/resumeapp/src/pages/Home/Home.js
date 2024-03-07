import React from 'react';
import './Home.css';
import homeImage from '../../assets/images/home-img.jpg'; // 상대 경로를 수정합니다.
import menu1 from '../../assets/images/home/f78db183-eb18-4817-a401-0bd55c72e865.png'
import menu2 from '../../assets/images/home/c5858455-0e38-45df-a9e4-49d5c62a1044.png'
import menu3 from '../../assets/images/home/72094ddd-4376-4913-ad7a-325656234fdc.png'
import menu4 from '../../assets/images/home/adce822a-bac0-4352-a99c-09feaa269602.png'
import menu5 from '../../assets/images/home/8f686572-b516-428b-9597-10518affb42a.png'
function Home() {
  return (
    <div id="wrap" className="main">
      <div id="imgArea" className="layoutMain" data-modal="slider" >		
        <div id="slider" className="slider">
          <img src={homeImage} alt="" data-index="0" />	
        </div>	
          <div id="menu" className="layoutMain">
              <a href="/app/jobnotice/list" className="nth-1">
                <h2>채용공고</h2>
                <p><br /><br /></p>
                <div className="icon" data-modal="icon">
                  <img src={menu1} alt="" width="120" height="90"/>
                </div>
              </a>
              <a href="/bbs/appsite/notice/list" className="nth-2">
                <h2 >채용문의</h2>
                <p></p>
                <div className="icon"  data-modal="icon">
                  <img src={menu2} alt="" width="120" height="90" />
                </div>
              </a>
              <a href="/app/applicant/registResume" className="nth-3">
                <h2 >지원서 작성</h2>
                <p></p>
                <div className="icon" data-modal="icon">
                  <img src={menu3} alt="" width="120" height="90" />
                </div>
              </a>
              <a href="/bbs/appsite/notice/list" className="nth-4">
                <h2>공지사항</h2>
                <p ></p>
                <div className="icon" data-modal="icon">
                  <img src={menu4} alt="" width="120" height="90" />
                </div>
              </a>
              <a href="/bbs/appsite/qna/write" className="nth-5">
                <h2>채용 QnA</h2>
                <p></p>
                <div className="icon" data-modal="icon">
                  <img src={menu5} alt="" width="120" height="90" />
                </div>
              </a>
            </div>
              
      </div>
    </div>
  );
}

export default Home;