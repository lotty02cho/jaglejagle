'use client';
export default function StepReview({ formData, setFormData }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">후기 평가</h2>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="맛" className="border p-2 rounded" value={formData.taste||''} onChange={e=>setFormData({...formData,taste:e.target.value})} />
        <input type="text" placeholder="서비스" className="border p-2 rounded" value={formData.service||''} onChange={e=>setFormData({...formData,service:e.target.value})} />
        <input type="text" placeholder="분위기" className="border p-2 rounded" value={formData.mood||''} onChange={e=>setFormData({...formData,mood:e.target.value})} />
        <select className="border p-2 rounded" value={formData.revisit||''} onChange={e=>setFormData({...formData,revisit:e.target.value})}>
          <option value="">재방문의사</option>
          <option value="yes">예</option>
          <option value="no">아니오</option>
        </select>
      </div>
    </section>
  );
}
