export interface IPageChangingEvent {
  source: any; // PDFViewer
  pageNumber: number;
  pageLabel: string;
  previous: number;
}
