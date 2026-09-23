'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, ArrowRight, Eye, UserCheck, Server, Cookie, HelpCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function PrivacyPolicyPage() {
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
          <div className="p-4 bg-[#8b2626]/10 rounded-sm text-[#8b2626] shadow-sm border border-[#8b2626]/20">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black font-serif-ar text-[#8b2626]">سياسة الخصوصية وحماية البيانات</h1>
            <p className="text-slate-600 font-bold text-sm mt-1">تستند هذه السياسة إلى معايير الشفافية والأمان العالمية المعتمَدة لدى Google.</p>
          </div>
        </div>

        <Card className="rounded-sm shadow-sm border border-[#8b2626]/20 bg-[#fffdf8] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#8b2626]" />
          
          <CardHeader className="bg-[#fbf7ee] border-b border-[#8b2626]/20 p-6">
            <CardTitle className="text-lg font-black flex items-center gap-2 text-[#8b2626]">
              <Lock className="w-5 h-5 text-[#8b2626]" /> المبادئ الأساسية للخصوصية في OptimalCP
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8 space-y-8 text-slate-700 leading-relaxed font-medium">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-[#8b2626] pr-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#8b2626]" /> 1. البيانات التي نجمعها والأغراض
              </h2>
              <p className="text-sm">
                نحن نجمع الحد الأدنى من البيانات الضرورية لتشغيل المنصة وتخصيص تجربة التعلم البرمجي:
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 pr-4 text-slate-600">
                <li><strong className="text-slate-900">بيانات الحساب الأساسية:</strong> البريد الإلكتروني، اسم المستخدم، وصورة الحساب (تُجلب آلياً عند تسجيل الدخول عبر Google أو تُدخل عند التسجيل بالبريد).</li>
                <li><strong className="text-slate-900">البيانات الديموغرافية (العمر والجنس والدولة):</strong> نجمع السن بالسنوات والجنس للدراسات الإحصائية وتحليل مستويات الفئات العمرية المختلفة للآدمن، وتوجيه المسابقات البرمجية المناسبة.</li>
                <li><strong className="text-slate-900">بيانات الأداء والحلول:</strong> نقاط XP، المسائل المحلولة، التفاعل في المنتدى، ومقبض Codeforces المربوط.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-[#8b2626] pr-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#8b2626]" /> 2. حظر بيع البيانات أو الإعلانات التتبعّية
              </h2>
              <p className="text-sm">
                تلتزم منصة OptimalCP بالسياسة الصارمة المتبعة في البيئات التعليمية المتقدمة:
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 pr-4 text-slate-600">
                <li>لا نبيع ولا نؤجر ولا نشارك بياناتك الشخصية مع أي أطراف ثالثة لأغراض تجارية أو تسويقية نهائياً.</li>
                <li>لا نستخدم برامج تتبع إعلانية موجّهة ولا نزرع أكواد تتبع خارجية.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-[#8b2626] pr-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-[#8b2626]" /> 3. التخزين والأمان والتشفير (Google Firebase)
              </h2>
              <p className="text-sm">
                تُخزن جميع البيانات في البنية التحتية الآمنة لـ Google Cloud و Firebase Firestore مع التشفير أثناء النقل وفي حالة الراحة (Encryption at rest and in transit). تخضع قواعد البيانات لآليات الأمان المحمية بسلسلة أذونات دقيقة (Security Rules).
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-[#8b2626] pr-3 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-[#8b2626]" /> 4. ملفات تعريف الارتباط (Cookies) والجلسات
              </h2>
              <p className="text-sm">
                نستخدم الكوكيز التقنية الضرورية فقط لتأمين الجلسة وتذكر حالة تسجيل دخولك وآليات الجدار الناري المحلي لمنع الهجمات المكررة (Rate Limiting).
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 border-t border-slate-200 pt-6">
              <h2 className="text-lg font-black text-slate-900 border-r-4 border-[#8b2626] pr-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#8b2626]" /> 5. حقوقك وحذف البيانات
              </h2>
              <p className="text-sm">
                يحق لجميع المستخدمين تعديل بياناتهم الشخصية في أي وقت من خلال صفحة الملف الشخصي، كما يحق لهم طلب حذف حساباتهم نهائياً عبر التواصل مع إدارة المنصة.
              </p>
            </section>

            <div className="p-4 bg-[#fbf7ee] rounded-sm border border-[#8b2626]/20 flex flex-col md:flex-row justify-between items-center gap-2 text-xs font-bold text-slate-500">
              <span>تاريخ آخر تحديث: سبتمبر 2026</span>
              <span className="text-[#8b2626]">إشراف وتطوير: استوديو آرتياتك - Artiatech Studio</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
