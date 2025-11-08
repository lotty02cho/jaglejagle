'use client';
export default function StepContent({ formData, setFormData }) {
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, imagePreviewUrl: previewUrl });
    } else {
      setFormData({ ...formData, image: undefined, imagePreviewUrl: undefined });
    }
  };

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">콘텐츠 입력</h2>
      <div className="flex flex-col gap-4">
        <input type="file" accept="image/*" className="border p-2 rounded" onChange={handleImageChange} />
        {formData?.imagePreviewUrl && (
          <div className="flex items-center gap-2">
            <img src={formData.imagePreviewUrl} alt="preview" className="h-20 w-20 object-cover rounded border" />
            <span className="text-sm text-gray-600">선택된 이미지 미리보기</span>
          </div>
        )}
        <textarea placeholder="본문 작성" className="border p-2 rounded" value={formData.body||''} onChange={e=>setFormData({...formData,body:e.target.value})} />
        <button className="px-4 py-2 bg-blue-500 text-white rounded" disabled>음성으로 입력하기(준비중)</button>
      </div>
    </section>
  );
}
