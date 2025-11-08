'use client';
export default function StepTemplate({ formData, setFormData }) {
  if (formData.purpose !== 'food') return <div>맛집리뷰만 지원합니다.</div>;
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">맛집리뷰 템플릿 설정</h2>
      <div className="flex flex-col gap-4">
        <input type="date" placeholder="방문일" className="border p-2 rounded" value={formData.date||''} onChange={e=>setFormData({...formData,date:e.target.value})} />
        <input type="text" placeholder="위치" className="border p-2 rounded" value={formData.location||''} onChange={e=>setFormData({...formData,location:e.target.value})} />
        <input type="text" placeholder="메뉴명" className="border p-2 rounded" value={formData.menu||''} onChange={e=>setFormData({...formData,menu:e.target.value})} />
        <input type="text" placeholder="가격" className="border p-2 rounded" value={formData.price||''} onChange={e=>setFormData({...formData,price:e.target.value})} />
        <input type="text" placeholder="한줄 후기" className="border p-2 rounded" value={formData.comment||''} onChange={e=>setFormData({...formData,comment:e.target.value})} />
      </div>
    </section>
  );
}
