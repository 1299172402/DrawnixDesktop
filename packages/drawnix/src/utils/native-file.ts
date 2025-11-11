import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

/**
 * 在原生平台上保存文件
 * @param blob 文件 Blob 数据
 * @param filename 文件名
 * @param mimeType 文件 MIME 类型
 */
export async function saveFileNative(
  blob: Blob,
  filename: string,
  mimeType?: string
): Promise<void> {
  try {
    // 将 Blob 转换为 Base64
    const base64Data = await blobToBase64(blob);
    
    // 移除 data URL 前缀
    const base64 = base64Data.split(',')[1];

    // 保存文件到应用的文档目录
    const result = await Filesystem.writeFile({
      path: filename,
      data: base64,
      directory: Directory.Documents,
      recursive: true,
    });

    console.log('文件已保存到:', result.uri);

    // 使用 Share API 分享文件，让用户选择保存位置
    await Share.share({
      title: '保存文件',
      text: `保存 ${filename}`,
      url: result.uri,
      dialogTitle: '选择保存位置',
    });
  } catch (error) {
    console.error('保存文件失败:', error);
    throw error;
  }
}

/**
 * 在原生平台上保存图片
 * @param blob 图片 Blob 数据
 * @param filename 文件名
 */
export async function saveImageNative(
  blob: Blob,
  filename: string
): Promise<void> {
  try {
    // 将 Blob 转换为 Base64
    const base64Data = await blobToBase64(blob);
    
    // 移除 data URL 前缀
    const base64 = base64Data.split(',')[1];

    // 保存图片到应用的缓存目录
    const result = await Filesystem.writeFile({
      path: filename,
      data: base64,
      directory: Directory.Cache,
      recursive: true,
    });

    console.log('图片已保存到:', result.uri);

    // 使用 Share API 分享图片
    await Share.share({
      title: '保存图片',
      text: `保存 ${filename}`,
      url: result.uri,
      dialogTitle: '选择保存位置',
    });
  } catch (error) {
    console.error('保存图片失败:', error);
    throw error;
  }
}

/**
 * 将 Blob 转换为 Base64 字符串
 */
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to convert blob to base64'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
