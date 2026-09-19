import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { api } from '../../shared/api/client';
import { InquiryFormData, InquiryType } from '../../shared/types/inquiry';
import { COMPANY_INFO } from '../../shared/constants/navigation';
import { CheckCircle, Phone, Mail, Clock, Send } from 'lucide-react';

export const InquiryPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    companyName: '',
    contactPerson: '',
    contactPosition: '',
    phone: '',
    email: '',
    inquiryType: 'B2B_SOLUTION',
    estimatedVolume: '',
    content: '',
    agreePrivacy: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert('개인정보 수집 및 이용에 동의해 주셔야 문의 접수가 가능합니다.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      await api.submitInquiry(formData);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || '문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeader
        badge="Contact Us"
        title="기업 맞춤 도입 상담 & 무료 견적 문의"
        description="NCMS 플랫폼 도입 문의, 대량 명함 제작 견적, 무료 샘플 키트 신청을 남겨주시면 전담 매니저가 신속히 안내해 드립니다."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Cols: Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <Card className="p-10 sm:p-16 text-center space-y-6 bg-blue-50/50 border-blue-200">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-blue-200">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                문의가 성공적으로 접수되었습니다!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                작성해 주신 연락처(<strong>{formData.phone}</strong>) 및 이메일(<strong>{formData.email}</strong>)로 
                로그컴 B2B 전담 매니저가 24시간 이내(영업일 기준) 연락드리겠습니다.
              </p>
              <div className="pt-4">
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      companyName: '',
                      contactPerson: '',
                      contactPosition: '',
                      phone: '',
                      email: '',
                      inquiryType: 'B2B_SOLUTION',
                      estimatedVolume: '',
                      content: '',
                      agreePrivacy: false,
                    });
                  }}
                  variant="outline"
                >
                  추가 문의 작성하기
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-6 sm:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="회사명 (기업명)"
                    name="companyName"
                    required
                    placeholder="예: (주)로그컴"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="담당자 성함"
                      name="contactPerson"
                      required
                      placeholder="홍길동"
                      value={formData.contactPerson}
                      onChange={handleChange}
                    />
                    <Input
                      label="직함/부서"
                      name="contactPosition"
                      placeholder="총무팀 팀장"
                      value={formData.contactPosition}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="연락처"
                    name="phone"
                    required
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Input
                    label="이메일"
                    type="email"
                    name="email"
                    required
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      문의 유형 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                    >
                      <option value="B2B_SOLUTION">NCMS 전용 솔루션 도입 문의</option>
                      <option value="BULK_QUOTE">기업 단체 명함 대량 견적 요청</option>
                      <option value="SAMPLE_REQUEST">무료 프리미엄 샘플 키트 신청</option>
                      <option value="GENERAL">기타 일반 제휴 및 문의</option>
                    </select>
                  </div>
                  <Input
                    label="예상 임직원 수 / 월 주문량"
                    name="estimatedVolume"
                    placeholder="예: 임직원 150명 / 월 50건 내외"
                    value={formData.estimatedVolume}
                    onChange={handleChange}
                  />
                </div>

                <Textarea
                  label="상세 문의 내용"
                  name="content"
                  required
                  rows={5}
                  placeholder="도입을 원하시는 시기, 특별히 필요한 사양이나 요청사항을 자유롭게 작성해 주세요."
                  value={formData.content}
                  onChange={handleChange}
                />

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="agreePrivacy"
                      name="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-blue-800 focus:ring-blue-600 cursor-pointer"
                      required
                    />
                    <label htmlFor="agreePrivacy" className="font-semibold text-slate-800 cursor-pointer">
                      개인정보 수집 및 이용 동의 (필수)
                    </label>
                  </div>
                  <p className="text-slate-500 leading-relaxed pl-6">
                    입력하신 회사명, 담당자 정보, 연락처 등은 문의 처리 및 견적 회신 목적으로만 수집·이용되며, 
                    관련 법령에 따라 안전하게 보관 및 파기됩니다.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold gap-2 py-3.5"
                >
                  <Send className="w-4 h-4" />
                  {loading ? '문의 접수 중...' : '온라인 상담 및 견적 신청하기'}
                </Button>
              </form>
            </Card>
          )}
        </div>

        {/* Right 1 Col: Contact Side info */}
        <div className="space-y-6">
          <Card className="p-6 bg-slate-900 text-white">
            <h4 className="text-base font-bold mb-4 flex items-center gap-2 text-white">
              빠른 유선 상담 안내
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs text-slate-400 block">고객센터 대표전화</span>
                <span className="text-2xl font-extrabold text-blue-400">{COMPANY_INFO.phone}</span>
              </div>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{COMPANY_INFO.operatingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-bold text-slate-900 mb-3 text-sm">
              상담 진행 순서
            </h4>
            <ol className="space-y-3 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
              <li>온라인 문의 접수 또는 유선 상담</li>
              <li>전담 매니저의 1:1 맞춤 견적 및 샘플 발송</li>
              <li>고객사 CI 분석 및 전용 NCMS 테넌트 셋업</li>
              <li>임직원 온라인 셀프 발주 개시</li>
            </ol>
          </Card>
        </div>
      </div>
    </div>
  );
};
