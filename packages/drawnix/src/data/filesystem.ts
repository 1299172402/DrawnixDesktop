import type { FileSystemHandle } from 'browser-fs-access';
import {
  fileOpen as _fileOpen,
  fileSave as _fileSave,
  supported as nativeFileSystemSupported,
} from 'browser-fs-access';
import { MIME_TYPES } from '../constants';
import { isNativePlatform } from '../utils/platform';
import { saveFileNative } from '../utils/native-file';

type FILE_EXTENSION = Exclude<keyof typeof MIME_TYPES, 'binary'>;

export const fileOpen = <M extends boolean | undefined = false>(opts: {
  extensions?: FILE_EXTENSION[];
  description: string;
  multiple?: M;
}): Promise<M extends false | undefined ? File : File[]> => {
  // an unsafe TS hack, alas not much we can do AFAIK
  type RetType = M extends false | undefined ? File : File[];

  const mimeTypes = opts.extensions?.reduce((mimeTypes, type) => {
    mimeTypes.push(MIME_TYPES[type]);

    return mimeTypes;
  }, [] as string[]);

  const extensions = opts.extensions?.reduce((acc, ext) => {
    if (ext === 'jpg') {
      return acc.concat('.jpg', '.jpeg');
    }
    return acc.concat(`.${ext}`);
  }, [] as string[]);

  return _fileOpen({
    description: opts.description,
    extensions,
    mimeTypes,
    multiple: opts.multiple ?? false,
  }) as Promise<RetType>;
};

export const fileSave = async (
  blob: Blob | Promise<Blob>,
  opts: {
    /** supply without the extension */
    name: string;
    /** file extension */
    extension: FILE_EXTENSION;
    description: string;
    /** existing FileSystemHandle */
    fileHandle?: FileSystemHandle | null;
  }
) => {
  const filename = `${opts.name}.${opts.extension}`;
  
  // 如果在原生平台（Android/iOS），使用 Capacitor API
  if (isNativePlatform()) {
    const resolvedBlob = await Promise.resolve(blob);
    const mimeType = MIME_TYPES[opts.extension];
    await saveFileNative(resolvedBlob, filename, mimeType);
    return null; // 原生平台不返回 FileSystemHandle
  }
  
  // Web 平台使用原有的方式
  return _fileSave(
    blob,
    {
      fileName: filename,
      description: opts.description,
      extensions: [`.${opts.extension}`],
    },
    opts.fileHandle as any
  );
};

export type { FileSystemHandle };
export { nativeFileSystemSupported };
