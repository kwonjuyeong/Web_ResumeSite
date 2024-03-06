import React from 'react';
import './Header.css'; 
import logoImage from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="로고" />
      </div>
      <nav>
        <ul className="menu-group">
          <li><a href="#job-info">채용정보</a></li>
          <li><a href="#apply">입사지원</a></li>
          <li><a href="#company">회사소개</a></li>
          <li><a href="#hr-system">인사제도</a></li>
        </ul>
        <ul className="menu-group">
          <li><a href="#applicant-query">합격자 조회</a></li>
          <li><a href="#contact">문의하기</a></li>
        </ul>

        <ul className="menu-group">
          <li><a href="/privacy-policy">개인정보 처리방침</a></li>
          <li><a href="/email-opt-out">이메일무단수집거부</a></li>
        </ul>
      </nav>

      <div className="footer-info">
       
        <p>경기도 안양시 동안구 경수대로 247</p>
        <p>@ All rights reserved.</p>
      </div>
    </header>
  );
}

export default Header;