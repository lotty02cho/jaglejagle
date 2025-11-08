'use client';
export default function StepPurpose({ formData, setFormData }) {
  const purposes = [
    { key: 'food', label: '맛집리뷰', active: true },
    { key: 'estate', label: '부동산리뷰', active: false },
    { key: 'tip', label: '생활꿀팁', active: false },
    { key: 'product', label: '상품리뷰', active: false },
    { key: 'diary', label: '일기장', active: false },
  ];
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">무엇에 대해 글을 쓸까요?</h2>
      <div className="grid grid-cols-2 gap-4">
        {purposes.map((p) => (
          <button
            key={p.key}
            disabled={!p.active}
            className={`p-4 rounded shadow ${formData.purpose === p.key ? 'bg-orange-500 text-white' : 'bg-gray-100'} ${!p.active ? 'opacity-50' : ''}`}
            onClick={() => setFormData({ ...formData, purpose: p.key })}
          >{p.label}</button>
        ))}
      </div>
    </section>
  );
}
