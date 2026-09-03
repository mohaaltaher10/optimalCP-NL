'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import { getDatabase, ref, onValue, set as rtdbSet } from 'firebase/database';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  onSnapshot
} from 'firebase/firestore';
import { firebaseConfig } from './config';
import React, { useState, useEffect, createContext, useContext } from 'react';

// قائمة حسابات الإدارة الأساسية المحمية
const ADMIN_EMAILS = ['artiateech@gmail.com', 'artiatechstudio@gmail.com'];

// تهيئة Firebase مرة واحدة فقط كـ Singleton لضمان استقرار الجلسات وسرعة الاستجابة
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = (!firebaseConfig.firestoreDatabaseId || firebaseConfig.firestoreDatabaseId === '(default)')
  ? getFirestore(app)
  : getFirestore(app, firebaseConfig.firestoreDatabaseId);
const rtdb = getDatabase(app);

// تصدير الكائنات الجاهزة للاستخدام المباشر
export { app, auth, db, rtdb };

// تهيئة موفر خدمة Google بشكل مسبق لتسريع الفتح ومنع حظر الـ Popup
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export function useFirebase() {
  return { app, auth, db, rtdb };
}

interface AuthContextType {
  user: User | null;
  userData: any | null;
  role: 'admin' | 'problem_setter' | 'trainee';
  isAdmin: boolean;
  isProblemSetter: boolean;
  isMaintenance: boolean;
  userLoading: boolean;
  adminLoading: boolean;
  maintenanceLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  role: 'trainee',
  isAdmin: false,
  isProblemSetter: false,
  isMaintenance: false,
  userLoading: true,
  adminLoading: true,
  maintenanceLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [role, setRole] = useState<'admin' | 'problem_setter' | 'trainee'>('trainee');
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const [maintenanceLoading, setMaintenanceLoading] = useState(true);

  // 1. Maintenance Mode listener (single subscription)
  useEffect(() => {
    const maintenanceRef = ref(rtdb, 'settings/maintenanceMode');
    const unsub = onValue(maintenanceRef, (snapshot) => {
      setIsMaintenance(!!snapshot.val());
      setMaintenanceLoading(false);
    }, (err) => {
      console.error('Error fetching maintenance mode:', err);
      setIsMaintenance(false);
      setMaintenanceLoading(false);
    });
    return () => unsub();
  }, []);

  // 2. Auth State & User Doc listener (single subscription)
  useEffect(() => {
    let docUnsub: (() => void) | null = null;

    const authUnsub = onAuthStateChanged(auth, (u) => {
      if (docUnsub) {
        docUnsub();
        docUnsub = null;
      }

      if (u) {
        setUser(u);
        const userDocRef = doc(db, `users/${u.uid}`);
        
        docUnsub = onSnapshot(userDocRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            setUserData(data);
            setRole(data.role || 'trainee');
          } else {
            const isSuper = ADMIN_EMAILS.includes(u.email || '');
            const initialUserData = {
              uid: u.uid,
              username: u.displayName || 'مبرمج_طموح',
              email: u.email,
              role: isSuper ? 'admin' : 'trainee',
              xp: 0,
              solved: 0,
              country: 'LY',
              badges: isSuper ? ['first_solve'] : [], 
              createdAt: new Date().toISOString(),
              lastActivity: new Date().toISOString()
            };
            setUserData(initialUserData);
            setRole(isSuper ? 'admin' : 'trainee');
            
            setDoc(userDocRef, initialUserData).catch(console.error);
            rtdbSet(ref(rtdb, `users/${u.uid}`), initialUserData).catch(console.error);
          }
          setUserLoading(false);
          setAdminLoading(false);
        }, (err) => {
          console.error("User doc snapshot error:", err);
          setUserLoading(false);
          setAdminLoading(false);
        });
      } else {
        setUser(null);
        setUserData(null);
        setRole('trainee');
        setUserLoading(false);
        setAdminLoading(false);
      }
    });

    return () => {
      authUnsub();
      if (docUnsub) docUnsub();
    };
  }, []);

  const value = {
    user,
    userData,
    role,
    isAdmin: role === 'admin',
    isProblemSetter: role === 'problem_setter' || role === 'admin',
    isMaintenance,
    userLoading,
    adminLoading,
    maintenanceLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useUser() {
  const { user, userLoading } = useContext(AuthContext);
  return { user, loading: userLoading };
}

export function useAdmin() {
  const { role, isAdmin, isProblemSetter, adminLoading } = useContext(AuthContext);
  return { role, isAdmin, isProblemSetter, loading: adminLoading };
}

export function useMaintenanceMode() {
  const { isMaintenance, maintenanceLoading } = useContext(AuthContext);
  return { isMaintenance, loading: maintenanceLoading };
}

export const loginWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = async () => {
  await signOut(auth);
};
