'use client';
import { useRouter } from 'next/navigation';
export default function StepPreview({ formData, setFormData, onEditStart }) {
  const router = useRouter();
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
      ${formData.imagePreviewUrl ? `<img src="${formData.imagePreviewUrl}" alt="thumb" />` : ''}
    </div>
  `;

  const fileToDataUrl = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const copyHtml = async () => {
    try { navigator.clipboard.writeText(html); } catch (e) {}
    let thumbnailDataUrl: string | undefined = undefined;
    if (formData.image instanceof File) {
      try { thumbnailDataUrl = await fileToDataUrl(formData.image); } catch (e) {}
    } else if (typeof formData.imagePreviewUrl === 'string') {
      thumbnailDataUrl = formData.imagePreviewUrl; // 이미 objectURL일 수도 있지만 목록 용도로 사용
    }
    try {
      const now = new Date().toISOString();
      const post = {
        id: `${Date.now()}`,
        title: formData?.menu ? `${formData.menu} 맛집리뷰` : '맛집리뷰',
        date: formData?.date || now.slice(0, 10),
        location: formData?.location || '',
        menu: formData?.menu || '',
        price: formData?.price || '',
        comment: formData?.comment || '',
        body: formData?.body || '',
        ratings: {
          taste: formData?.taste || '',
          service: formData?.service || '',
          mood: formData?.mood || '',
          revisit: formData?.revisit || '',
        },
        html,
        thumbnail: thumbnailDataUrl,
        createdAt: now,
      };
      const key = 'posts';
      const prev = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      const list = prev ? JSON.parse(prev) : [];
      list.unshift(post);
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) {}
    alert('HTML이 복사되고, 목록에 저장되었습니다.');
    router.push('/posts');
  };
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">미리보기</h2>
      <div className="border p-4 rounded bg-gray-50" dangerouslySetInnerHTML={{__html: html}} />
      <div className="flex gap-4 mt-4">
        <button className="btn-secondary" onClick={()=>{ setFormData({}); onEditStart && onEditStart(); }}>수정하기</button>
        <button className="btn-primary" onClick={copyHtml}>html 만들기</button>
      </div>
    </section>
  );
}
