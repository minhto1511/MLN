"use client";

import React, { useCallback, useMemo, useState } from "react";

type Status = "idle" | "submitting" | "submitted";

function basicModerationCheck(text: string): { ok: boolean; reason?: string } {
  const normalized = text.toLowerCase();

  // Danh sách rất đơn giản, chỉ minh họa cơ chế kiểm duyệt phía client.
  // Có thể mở rộng/tuỳ biến trong tương lai.
  const bannedWords = [
    "địt",
    "đụ",
    "cặc",
    "lồn",
    "đm ",
    "dm ",
    "dmm",
    "fuck",
    "bitch",
  ];

  if (normalized.trim().length < 15) {
    return {
      ok: false,
      reason:
        "Nội dung quá ngắn. Hãy viết đầy đủ thành 1–2 câu hoàn chỉnh để nêu rõ góp ý hoặc câu hỏi của bạn.",
    };
  }

  if (normalized.length > 2000) {
    return {
      ok: false,
      reason: "Nội dung quá dài. Vui lòng tóm tắt lại (tối đa 2000 ký tự) để dễ đọc và xử lý.",
    };
  }

  for (const w of bannedWords) {
    if (normalized.includes(w)) {
      return {
        ok: false,
        reason:
          "Phát hiện từ ngữ không phù hợp (ví dụ: chửi thề, xúc phạm cá nhân/tổ chức, nội dung miệt thị/kỳ thị). Vui lòng diễn đạt lại góp ý/câu hỏi theo cách tôn trọng và mang tính xây dựng.",
      };
    }
  }

  return { ok: true };
}

export function FeedbackPanel() {
  const [name, setName] = useState("");
  const [type, setType] = useState<"question" | "suggestion" | "error">("question");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const moderationResult = useMemo(() => {
    if (!content) return null;
    return basicModerationCheck(content);
  }, [content]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      const check = basicModerationCheck(content);
      if (!check.ok) {
        setStatus("idle");
        setError(check.reason ?? "Nội dung chưa phù hợp để gửi.");
        return;
      }

      setStatus("submitting");

      // Mô phỏng gửi lên server: hiện tại chỉ lưu tạm thời trong localStorage để tránh mất nội dung.
      try {
        const existingRaw = window.localStorage.getItem("mln122-feedback");
        const existing: unknown[] = existingRaw ? JSON.parse(existingRaw) : [];
        const entry = {
          id: Date.now(),
          name: name.trim() || "Ẩn danh",
          type,
          content: content.trim(),
          createdAt: new Date().toISOString(),
        };
        const next = [...existing, entry];
        window.localStorage.setItem("mln122-feedback", JSON.stringify(next));
      } catch {
        // Bỏ qua lỗi localStorage; vẫn coi như đã "gửi" trên giao diện.
      }

      setStatus("submitted");
      setTimeout(() => {
        setStatus("idle");
        setContent("");
      }, 1600);
    },
    [content, name, type]
  );

  const isSubmitting = status === "submitting";
  const isSubmitted = status === "submitted";

  return (
    <section className="relative mt-24 md:mt-32 mb-16">
      <div className="absolute -top-6 left-0 right-0 flex justify-center pointer-events-none">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FFD700] border-4 border-[#1A1A1A] font-black uppercase text-xs tracking-[0.3em] shadow-[4px_4px_0_#C41E3A] pointer-events-auto">
          <span>GÓP Ý & CÂU HỎI</span>
        </div>
      </div>

      <div className="socialist-block bg-[#FFF8DC] border-8 border-[#1A1A1A] px-4 py-8 md:px-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10 mb-6">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mb-3">
              Bạn thấy nội dung thế nào?
            </h2>
            <p className="font-sans text-sm md:text-base text-[#1A1A1A] leading-relaxed">
              Hãy gửi câu hỏi, góp ý chỉnh sửa hoặc báo lỗi nội dung. Hệ thống sẽ{" "}
              <span className="font-bold">tự động lọc bỏ các phát ngôn thiếu tôn trọng</span> (chửi
              thề, xúc phạm cá nhân/tổ chức, nội dung miệt thị, kỳ thị...) để đảm bảo không gian học
              tập lành mạnh và mang tính học thuật.
            </p>
            <p className="mt-2 font-sans text-[11px] text-[#1A1A1A]/70">
              Việc kiểm tra nội dung và lưu góp ý hiện chỉ diễn ra trên thiết bị của bạn (trình duyệt
              này) nhằm tránh bị mất nội dung; không được sử dụng cho mục đích nào khác.
            </p>
          </div>
          <div className="shrink-0">
            <div className="bg-[#C41E3A] text-[#FFD700] border-4 border-[#1A1A1A] px-4 py-3 font-black uppercase text-xs tracking-[0.2em] shadow-[4px_4px_0_#1A1A1A]">
              TÔN TRỌNG • HỌC THUẬT • XÂY DỰNG
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase mb-1 text-[#1A1A1A]">
                Tên (không bắt buộc)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                className="w-full border-4 border-[#1A1A1A] px-3 py-2 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]"
                placeholder="Bạn có thể để trống hoặc ghi 'Ẩn danh'"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-1 text-[#1A1A1A]">
                Loại nội dung
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "question" as const, label: "Câu hỏi" },
                  { key: "suggestion" as const, label: "Góp ý cải thiện" },
                  { key: "error" as const, label: "Báo lỗi nội dung" },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setType(opt.key)}
                    className={`px-3 py-2 text-xs font-black uppercase border-4 transition-all ${
                      type === opt.key
                        ? "bg-[#C41E3A] text-[#F5F0E1] border-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A] -translate-y-0.5"
                        : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#FFD700]/70"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase mb-1 text-[#1A1A1A]">
              Nội dung góp ý / câu hỏi
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full border-4 border-[#1A1A1A] px-3 py-2 font-sans text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]"
              placeholder="Ví dụ: Ở phần giải thích giá trị thặng dư, em chưa rõ chỗ..., hoặc: Ở chương 2, có vẻ thiếu ví dụ về..."
            />
            <div className="mt-1 flex justify-between items-center text-[11px] font-sans text-[#1A1A1A]/70">
              <span>
                Hệ thống đang kiểm tra độ dài & một số từ ngữ không phù hợp theo thời gian thực (tối đa
                2000 ký tự).
              </span>
              <span>{content.length}/2000</span>
            </div>
          </div>

          {moderationResult && !moderationResult.ok && (
            <div className="mt-2 border-4 border-[#C41E3A] bg-[#FFF1F2] px-3 py-2 font-sans text-xs text-[#1A1A1A]">
              <span className="font-black uppercase block mb-0.5">Cần chỉnh sửa thêm</span>
              <span>{moderationResult.reason}</span>
            </div>
          )}

          {error && (
            <div className="mt-2 border-4 border-[#C41E3A] bg-[#FFF1F2] px-3 py-2 font-sans text-xs text-[#1A1A1A]">
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 font-black uppercase text-xs tracking-[0.2em] border-4 border-[#1A1A1A] transition-all ${
                isSubmitting
                  ? "bg-[#A3A3A3] text-white cursor-wait"
                  : "bg-[#1A1A1A] text-[#F5F0E1] hover:bg-[#C41E3A] hover:text-[#FFD700] shadow-[4px_4px_0_#1A1A1A]"
              }`}
            >
              {isSubmitting ? "ĐANG GỬI..." : "GỬI NỘI DUNG ĐÃ KIỂM DUYỆT"}
            </button>
            {isSubmitted && (
              <span className="font-sans text-xs text-[#1A1A1A]">
                Cảm ơn bạn! Góp ý đã được ghi nhận (tạm lưu trên trình duyệt để tránh bị mất nội dung).
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

