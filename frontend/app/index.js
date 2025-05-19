import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    requestAnimationFrame(() => {
      router.replace('/login');
    });
  }, []);

  return null;
}
