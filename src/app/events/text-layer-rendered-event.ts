export interface IPageViewport {
  viewBox: Array<number>;
  scale: number;
  rotation: number;
  offsetX: number;
  offsetY: number;
}

export interface ITextLayerBuilder {
  textLayerDiv: HTMLDivElement;
  textContentItemsStr: Array<string>;
  renderingDone: boolean;
  textDivs: Array<HTMLSpanElement>;
  viewPort: IPageViewport;
}

export interface ITextLayerRenderedEvent {
  source: ITextLayerBuilder;
  pageNumber: number;
  numTextDivs: number;
}
