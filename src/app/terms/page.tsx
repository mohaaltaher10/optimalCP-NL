'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, AlertCircle, ArrowRight, CheckCircle2, ShieldAlert, Award } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function TermsPage() {
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
          <div className="p-4 bg-orange-500/10 rounded-sm text-orange-600 shadow-sm border border-orange-500/20">
            <Scale className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black font-serif-ar text-[#8b2626]">شروط الاستخدام واتفاقية الخدمة</h1>
            <p className="text-slate-600 font-bold text-sm mt-1">القوانين المُنظمة للاستخدام والنزاهة الأكاديمية والرقابة في OptimalCP.</p>
          </div>
        </div>

        <Card className="rounded-sm shadow-sm border border-[#8b2626]/20 bg-[#fffdf8] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-2 h-full bg-orange-500" />
          
          <CardHeader className="bg-[#fbf7ee] border-b border-[#8b2626]/20 p-6">
            <CardTitle className="text-lg font-black flex items-center gap-2 text-slate-900">
              <AlertCircle className="w-5 h-5 text-orange-600" /> القواعد العامة والحقوق والواجبات
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8 space-y-8 text-slate-700 leading-relaxed font-medium">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-orange-500 pr-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-600" /> 1. الترخيص والملكية الفكرية
              </h2>
              <p className="text-sm">
                منصة OptimalCP هي بيئة تعليمية متقدمة مملوكة ومُدارة من قِبل استوديو آرتياتك (Artiatech Studio). يُمْنح المستخدم ترخيصاً شخصياً وغير حصري وغير تجاري لاستخدام المنصة للتعلم والتطوير البرمجي.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-orange-500 pr-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600" /> 2. النزاهة الأكاديمية وقواعد السلوك
              </h2>
              <ul className="list-disc list-inside text-sm space-y-2 pr-4 text-slate-600">
                <li>يمنع استخدام أي وسيلة غش أو نسخ حلول الآخرين بنوايا تلاعبية في مسابقات المنصة ولوحة الشرف.</li>
                <li>التفاعل في منتدى النقاش يجب أن يلتزم بالاحترام المتبادل وتجنب الخطاب المسيء أو السب أو المحتوى المضلل.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-orange-500 pr-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-orange-600" /> 3. نظام الرقابة المجتمعية والحدود اليومية
              </h2>
              <p className="text-sm">
                لحماية المجتمع من الإغراق والسبام (Spam Protection):
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 pr-4 text-slate-600">
                <li>تطبق المنصة حدود نشر يومية (موضوعان و10 ردود كحد أقصى يومياً).</li>
                <li>تتضمن المنصة نظام بلاغات مجتمعي آلي؛ في حال وصول أي مشاركة إلى 5 بلاغات يتم إخفاؤها تلقائياً لمراجعتها من الإدارة.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-orange-500 pr-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" /> 4. تعليق الحسابات وإنهاء الخدمة
              </h2>
              <p className="text-sm">
                تحتفظ إدارة المنصة بحق تعليق أو حظر أي حساب يخالف شروط الاستخدام أو يسعى لتخريب البيئة التعليمية دون إشعار مسبق.
              </p>
            </section>

            <div className="p-4 bg-[#fbf7ee] rounded-sm border border-orange-200 flex flex-col md:flex-row justify-between items-center gap-2 text-xs font-bold text-slate-500">
              <span>آخر تحديث للشروط: سبتمبر 2026</span>
              <span className="text-orange-700">Artiatech Studio - جميع الحقوق محفوظة</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
