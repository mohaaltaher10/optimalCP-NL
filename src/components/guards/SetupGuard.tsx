'use client';

import { useAuth } from "@/firebase";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export function SetupGuard({ children }: { children: React.ReactNode }) {
  const { user, userData, role, userLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // الصفحات العامة والمسارات الرئيسية التي لا تتطلب تعليق العرض
  const PUBLIC_PATHS = [
    '/', 
    '/login', 
    '/setup', 
    '/privacy', 
    '/terms', 
    '/licenses', 
    '/problems', 
    '/roadmap', 
    '/forum', 
    '/leaderboard'
  ];

  useEffect(() => {
    if (userLoading) return;

    if (!user) {
      if (!PUBLIC_PATHS.includes(pathname)) {
        router.push("/login");
      }
      return;
    }

    if (role === 'admin') return;

    if (userData) {
      const hasUsername = userData.username && userData.username !== 'مبرمج_طموح';
      const hasCountry = !!userData.country;

      if ((!hasUsername || !hasCountry) && !PUBLIC_PATHS.includes(pathname)) {
        router.push("/setup");
      }
    }
  }, [user, userData, role, userLoading, pathname, router]);

  // يظهر التحقيق المبدئي فقط عند فتح الموقع لأول مرة
  if (userLoading && !PUBLIC_PATHS.includes(pathname)) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center gap-3 bg-white">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
        <p className="text-xs font-black text-slate-400">جاري التحقق من حالة الحساب...</p>
      </div>
    );
  }

  return <>{children}</>;
}
