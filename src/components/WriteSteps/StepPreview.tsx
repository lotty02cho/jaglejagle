'use client';
export default function StepPreview({ formData, setFormData, onEditStart }) {
  const html = `
    <div>
      <h2>맛집리뷰</h2>
      <ul>
        <li>방문일: ${formData.date||''}</li>
        <li>위치: ${formData.location||''}</li>
        <li>메뉴명: ${formData.menu||''}</li>
        <li>가격: ${formData.price||''}</li>
        <li>한줄 후기: ${formData.comment||''}</li>
      </ul>
      <p>본문: ${formData.body||''}</p>
      <p>맛: ${formData.taste||''}, 서비스: ${formData.service||''}, 분위기: ${formData.mood||''}, 재방문의사: ${formData.revisit||''}</p>
    </div>
  `;
  const copyHtml = () => {
    navigator.clipboard.writeText(html);
    alert('HTML이 복사되었습니다!');
  };
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">미리보기</h2>
      <div className="border p-4 rounded bg-gray-50" dangerouslySetInnerHTML={{__html: html}} />
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={()=>{ setFormData({}); onEditStart && onEditStart(); }}>수정하기</button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded" onClick={copyHtml}>html 만들기</button>
      </div>
    </section>
  );
}
