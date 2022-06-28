export interface IPageRenderedEvent {
  source: any; // PDFPageView
  pageNumber: number;
  cssTransform: boolean;
  error: any;
  timestamp: number;
}
