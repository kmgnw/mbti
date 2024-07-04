import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../image/오수형.png';
import bannerImage1 from '../image/훈이.png';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="content" id="start">
      <p style={{color: 'blue'}}>나와 닮은 짱구 캐릭터 테스트</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>

      <div>
      <img src={bannerImage} alt="킹오수" className="img1"
      style={{
        margin: 0,
        width: '30vw'
      }}
      />
      </div>

      <div>
      <img src={bannerImage1} alt="킹오수" 
      style={{
        margin: 0,
        width: '30vw'
      }} className="img1" />
      </div>

      </div>

      <p id="maker">제작자: 김건우,,ㅎㅎㅎ</p>
      <p id="require">
        ※안심하세요! 오수나 훈이가 나올 확률이 높습니다!
      </p>
      <button className="btn btn-warning" style={{
        backgroundColor: 'blue',
        color: 'white'
      }} onClick={() => navigate('/question')}>
        오수나 훈이 되러 출발하기
      </button>
    </div>
  );
}

export default Start;