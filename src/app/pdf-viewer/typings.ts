export type PDFPageProxy = import('pdfjs-dist/types/src/display/api').PDFPageProxy;
export type PDFSource = import('pdfjs-dist/types/src/display/api').DocumentInitParameters;
export type PDFDocumentProxy = import('pdfjs-dist/types/src/display/api').PDFDocumentProxy;
export type PDFDocumentLoadingTask = import('pdfjs-dist/types/src/display/api').PDFDocumentLoadingTask;
export type PDFViewerOptions = import('pdfjs-dist/types/web/base_viewer').PDFViewerOptions;

export interface PDFProgressData {
  loaded: number;
  total: number;
}

export enum FindStateEnum {
  FOUND = 0,
  NOT_FOUND = 1,
  WRAPPED = 2,
  PENDING = 3
}

export interface IFindResultMatchesCount {
  current: number;
  total: number;
}

export interface IFindResult {
  state: FindStateEnum;
  previous: any;
  matchesCount: IFindResultMatchesCount;
  rawQuery: string;
}
