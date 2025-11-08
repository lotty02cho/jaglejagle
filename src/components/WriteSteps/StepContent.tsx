'use client';
export default function StepContent({ formData, setFormData }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">콘텐츠 입력</h2>
      <div className="flex flex-col gap-4">
        <input type="file" accept="image/*" className="border p-2 rounded" onChange={e=>setFormData({...formData,image:e.target.files?.[0]})} />
        <textarea placeholder="본문 작성" className="border p-2 rounded" value={formData.body||''} onChange={e=>setFormData({...formData,body:e.target.value})} />
        <button className="px-4 py-2 bg-blue-500 text-white rounded" disabled>음성으로 입력하기(준비중)</button>
      </div>
    </section>
  );
}
