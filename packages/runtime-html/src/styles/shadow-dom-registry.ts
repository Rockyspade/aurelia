import { IContainer, Registration } from '@aurelia/kernel';
import {  IShadowDOMStyles } from './shadow-dom-styles';

export type ShadowDOMStylesFactory =
  (localStyles: (string | CSSStyleSheet)[], sharedStyles: IShadowDOMStyles | null) => IShadowDOMStyles;

export class ShadowDOMRegistry {
  constructor(
    private sharedStyles: IShadowDOMStyles,
    private createStyles: ShadowDOMStylesFactory
  ) { }

  public register(container: IContainer, ...params: any[]) {
    container.register(
      Registration.instance(
        IShadowDOMStyles,
        this.createStyles(params, this.sharedStyles)
      )
    );
  }
}
