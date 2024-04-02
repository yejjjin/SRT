import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full h-60 bg-slate-900 text-white p-6 flex justify-between">
    <div className="h-full flex flex-col justify-center gap-4">
      <span className="flex gap-4">
        <a href="/">개인정보처리방침</a>
        <a href="/">고객서비스헌장</a>
        <a href="/">여객운송약관/부속약관</a>
      </span>
      <p>
        대표자 : 이종국 ㅣ 상호: 주식회사 에스알 ㅣ 사업자등록: 305-86-31590 ㅣ
        통신판매업신고: 2016-서울강남-03705호(우: 06367) <br />
        서울특별시 강남구 광평로 56길 12 희림빌딩 | TEL 1800-1472 ㅣ FAX
        6484-4093
      </p>
      <p>Copyright 2018. SR Inc. All rights reserved.</p>
    </div>
    <div className="h-full flex items-center gap-8">
      <a href="/">공지사항</a>
      <a href="/">유관기관 이동</a>
    </div>
  </footer>
);

export default Footer;
