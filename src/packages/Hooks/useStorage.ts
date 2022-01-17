import StorageType from '@/types/storage';

const useStorage = () => {
  const isBrowser = (() => typeof window !== `undefined`)();

  const getItem = (key: string, type: StorageType): string =>
    isBrowser ? window[type][key] : ``;

  const setItem = (key: string, value: string, type: StorageType): boolean => {
    if (isBrowser) {
      window[type].setItem(key, value);
      return true;
    }

    return false;
  };

  const removeItem = (key: string, type: StorageType): void => {
    window[type].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
