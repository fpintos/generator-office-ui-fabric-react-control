import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { I<%= name %> } from './<%= name %>.types';
import { I<%= name %>Props } from './<%= name %>.types';
import { I<%= name %>StyleProps } from './<%= name %>.types';
import { I<%= name %>Styles } from './<%= name %>.types';

const getClassNames = classNamesFunction<I<%= name %>StyleProps, I<%= name %>Styles>();

@customizable('<%= name %>', ['theme'])
export class <%= name %>Base extends BaseComponent<I<%= name %>Props> implements I<%= name %> {
  public static defaultProps: Partial<I<%= name %>Props> = {
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <div><%= name %></div>
        </FocusZone>
      </div>
    );
  }

  public focus(): void {
    this.focusZone.focus();
  }

  @autobind
  private _setFocusZone(component: IFocusZone): void {
    this.focusZone = component;
  }
}
