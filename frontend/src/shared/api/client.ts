import { InquiryFormData, InquirySubmitResponse } from '../types/inquiry';
import { NoticeItem } from '../types/notice';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  error?: any;
}

const API_BASE = '/api/v1';

async function fetchJson<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || '요청 처리 중 오류가 발생했습니다.');
  }
  return json;
}

export const api = {
  // 상담 문의 접수
  submitInquiry: (data: InquiryFormData) =>
    fetchJson<InquirySubmitResponse>(`${API_BASE}/inquiries`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // 공지사항 목록
  getNotices: () =>
    fetchJson<NoticeItem[]>(`${API_BASE}/notices`),

  // 공지사항 상세
  getNoticeDetail: (id: number) =>
    fetchJson<NoticeItem>(`${API_BASE}/notices/${id}`),

  // 회사 메타 정보
  getCompanyInfo: () =>
    fetchJson<any>(`${API_BASE}/company`),
};
