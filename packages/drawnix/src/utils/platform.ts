import { Capacitor } from '@capacitor/core';

/**
 * 检测是否在 Capacitor 原生环境中运行
 */
export const isNativePlatform = (): boolean => {
  return Capacitor.isNativePlatform();
};

/**
 * 获取当前平台名称
 */
export const getPlatform = (): string => {
  return Capacitor.getPlatform();
};

/**
 * 检测是否为 Android 平台
 */
export const isAndroid = (): boolean => {
  return Capacitor.getPlatform() === 'android';
};

/**
 * 检测是否为 iOS 平台
 */
export const isIOS = (): boolean => {
  return Capacitor.getPlatform() === 'ios';
};

/**
 * 检测是否为 Web 平台
 */
export const isWeb = (): boolean => {
  return Capacitor.getPlatform() === 'web';
};
