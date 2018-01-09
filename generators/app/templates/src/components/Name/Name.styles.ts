import { I<%= name %>StyleProps } from './<%= name %>.types';
import { I<%= name %>Styles } from './<%= name %>.types';

export function getStyles(styleProps: I<%= name %>StyleProps): I<%= name %>Styles {
  return {
    root: [
      'ms-<%= name %>',
      {
        borderStyle: 'solid',
      },
      styleProps.className
    ],
  };
}
