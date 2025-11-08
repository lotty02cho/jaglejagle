'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useState as useReactState } from 'react';
import StepPurpose from '../../components/WriteSteps/StepPurpose';
import StepTemplate from '../../components/WriteSteps/StepTemplate';
import StepContent from '../../components/WriteSteps/StepContent';
import StepReview from '../../components/WriteSteps/StepReview';
import StepPreview from '../../components/WriteSteps/StepPreview';

const steps = [StepPurpose, StepTemplate, StepContent, StepReview, StepPreview];

export default function WritePage() {
  const router = useRouter();
  const [step, setStep] = useReactState(0);
  const [formData, setFormData] = useReactState({});
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    try {
      const s = typeof window !== 'undefined' ? localStorage.getItem('demo_session') : null;
      if (!s) {
        alert('글 등록하기는 로그인 후 이용 가능합니다.');
        router.replace('/login');
      } else {
        setAllowed(true);
      }
    } catch (e) {
      router.replace('/login');
    }
  }, [router]);

  if (!allowed) return null;

  const CurrentStep = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <main className="max-w-md mx-auto p-4 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <CurrentStep formData={formData} setFormData={setFormData} onEditStart={()=>setStep(0)} />
      <div className="flex justify-between mt-8">
        <button className="px-4 py-2 rounded bg-gray-200" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>이전</button>
        <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))} disabled={isLast}>{isLast ? '완료' : '다음'}</button>
      </div>
    </main>
  );
}
