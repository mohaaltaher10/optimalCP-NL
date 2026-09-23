'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, ArrowRight, Code } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#2c241b] font-sans" dir="rtl">
      {/* Header */}
      <header className="border-b-2 border-double border-[#8b2626]/30 bg-[#fbf7ee] sticky top-0 z-50 w-full shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo variant="blue" className="w-8 h-8" />
            <span className="text-xl font-bold font-serif-ar text-[#8b2626]">OptimalCP</span>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="font-bold border-[#8b2626]/30 text-[#8b2626] hover:bg-[#8b2626] hover:text-white gap-2">
              <ArrowRight className="w-4 h-4" /> العودة للتسجيل
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#8b2626]/20 pb-6">
          <div className="p-4 bg-blue-500/10 rounded-sm text-blue-600 shadow-sm border border-blue-500/20">
            <FileText className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black font-serif-ar text-[#8b2626]">التراخيص والمصادر والاعتمادات</h1>
            <p className="text-slate-600 font-bold text-sm mt-1">الشفافية الكاملة في اعتماد التقنيات والمكتبات مفتوحة المصدر.</p>
          </div>
        </div>

        <Card className="rounded-sm shadow-sm border border-[#8b2626]/20 bg-[#fffdf8] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-2 h-full bg-blue-600" />
          
          <CardHeader className="bg-[#fbf7ee] border-b border-[#8b2626]/20 p-6">
            <CardTitle className="text-lg font-black flex items-center gap-2 text-slate-900">
              <Award className="w-5 h-5 text-blue-600" /> البنية التقنية والبرمجيات المُستخدمة
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8 space-y-8 text-slate-700 leading-relaxed font-medium">
            <p className="text-sm">
              تم تطوير منصة OptimalCP باستخدام أحدث الأطر البرمجية والمكتبات العالمية المعتمدة تحت تراخيص مفتوحة المصدر:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-sm bg-[#fbf7ee]">
                <span className="block font-black text-slate-900 text-sm mb-1">Next.js Framework</span>
                <p className="text-xs text-slate-500 font-bold">MIT License - Copyright © Vercel, Inc.</p>
              </div>
              <div className="p-4 border rounded-sm bg-[#fbf7ee]">
                <span className="block font-black text-slate-900 text-sm mb-1">Google Firebase Cloud</span>
                <p className="text-xs text-slate-500 font-bold">Apache License 2.0 - Copyright © Google LLC.</p>
              </div>
              <div className="p-4 border rounded-sm bg-[#fbf7ee]">
                <span className="block font-black text-slate-900 text-sm mb-1">Tailwind CSS v4</span>
                <p className="text-xs text-slate-500 font-bold">MIT License - Copyright © Tailwind Labs, Inc.</p>
              </div>
              <div className="p-4 border rounded-sm bg-[#fbf7ee]">
                <span className="block font-black text-slate-900 text-sm mb-1">Lucide Icons</span>
                <p className="text-xs text-slate-500 font-bold">ISC License - Copyright © Lucide Contributors.</p>
              </div>
            </div>

            <section className="pt-6 border-t space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-blue-600 pr-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" /> التراخيص الخارجية ومصادر المسائل (Codeforces API)
              </h2>
              <p className="text-sm text-slate-600">
                تعتمد المنصة في مزامنة المسائل والتقييمات على واجهة برمجة التطبيقات العامة لـ <strong className="text-slate-900">Codeforces API</strong>. جميع الحقوق الفكرية الخاصة بالمسائل الأصلية محفوظة لأصحابها ومؤلفيها على منصة Codeforces.
              </p>
            </section>

            <div className="p-4 bg-[#fbf7ee] rounded-sm border border-blue-200 text-center font-black text-blue-900 text-sm">
              حقوق العلامة والمنصة © 2026 مملوكة لـ استوديو آرتياتك - Artiatech Studio (ليبيا).
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
