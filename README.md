# About the Project

This stand-alone Angular application aims to demonstrate and test AgGrid's theme customization. The styles implemented for the tables of this app match those of the tables in Jazz Design System Project.

AgGrid allows customization of their pre-existing themes, such as--`.ag-theme-alpine`, `.ag-theme-balham`, `.ag-theme-material`--OR their base theme through css parameters. For use cases like the Jazz Design System project, it is recommended to create a new theme from scratch by extending the base theme.

It is important to note, as [ mentioned in the AgGrid's documentation site ](https://www.ag-grid.com/angular-data-grid/themes/):
> Themes are intended to change the overall look and feel of a grid. If you want to style a particular column or a particular header, consider using either cell and header renderers, or applying CSS classes or styles at the column definition level. Sometimes it is possible to achieve the same effect using custom renderers as it is with themes. If so, use whichever one makes more sense for you.

# Setup

## Define the themes in the app's style 

All themes need to be defined in the app's parent styles file (`\ag-grid-theming\src\styles.scss`) with their own unique names.

**1. Import AgGrid default styles and AgGrid Base Theme**

- In order to extend AgGrid's base theme, AgGrid's default styles and AgGrid's base theme styles need to be imported into the app's root styles.

```scss
@import '../node_modules/ag-grid-community/dist/styles/ag-grid.scss';
@import '../node_modules/ag-grid-community/dist/styles/ag-theme-base/sass/_ag-theme-base-mixin.scss';
```

**2. Define your themes with @include ag-theme-base**

- Use sass's `@include` decorator to access the `ag-theme-base()` and pass in the list of CSS parameters that you'd like to customize.

```scss
// THEME #1
.jazz-theme__table-basic {
  @include ag-theme-base(
    (
      foreground-color: black,
      background-color: transparent,
      data-color: black,
      secondary-foreground-color: black,
      header-foreground-color: black,
      odd-row-background-color: #EEEEEE,
      border-color: #D0D0D0,
      secondary-border-color: ag-derived(border-color),
      row-border-color: ag-derived(secondary-border-color),
      row-hover-color: #E7F1FF,
    )
  );
}

// THEME #2
.jazz-theme__table-two {
  @include ag-theme-base(
    (
        // custom css key-value pairs...
    )
  );
}

// THEME #3
.jazz-theme__table-three{
  @include ag-theme-base(
    (
        // custom css key-value pairs...
    )
  );

```

**3. Set the theme to AgGrid's class**

- Inside HTML, set AgGrid component's class as your defined theme to apply the styles.

```html
  <ag-grid-angular
    class="jazz-theme__table-basic"
    #theme1
    style="..."
    [rowData]="..."
    [columnDefs]="..."
    rowSelection="..."
  >
  </ag-grid-angular>
``` 

# Testing AgGrid's CSS Parameters

During testing, not all parameters listed in AgGrid's documentation seemed to behave as expected.

The Table below displays the full list of CSS parameters listed in AgGrid's documentation site, and whether each of the parameters were confirmed to behave as expected.

### TABLE LEGEND

| VALUES | DESCRIPTION                                                                                   |
| ------ | --------------------------------------------------------------------------------------------- |
| true   | Was tested, and functionality was verified.                                                   |
| false  | Was tested, and functionality was not verified. Additional testing and verification required. |
| N/A    | Unsure how to test. Additional testing and verification required.                             |

### TABLE OF CUSTOMIZABLE CSS PARAMETERS

| PARAMETERS                                       | TESTED   |
| ------------------------------------------------ | -------- |
| foreground-color                                 | true     |
| data-color                                       | true     |
| secondary-foreground-color                       | true     |
| header-foreground-color                          | true     |
| disabled-foreground-color                        | N/A      |
| background-color                                 | true     |
| header-background-color                          | false    |
| subheader-background-color                       | N/A      |
| subheader-toolbar-background-color               | N/A      |
| control-panel-background-color                   | N/A      |
| selected-row-background-color                    | false    |
| odd-row-background-color                         | true     |
| modal-overlay-background-color                   |          | 
| row-hover-color                                  | true     |
| column-hover-color                               |          |
| range-selection-border-color                     |          |
| range-selection-background-color                 |          |
| range-selection-background-color-1               |          |
| range-selection-background-color-2               |          |
| range-selection-background-color-3               |          |
| range-selection-background-color-4               |          |
| range-selection-highlight-color                  |          |
| selected-tab-underline-color                     |          |
| selected-tab-underline-width                     |          |
| selected-tab-underline-transition-speed          |          |
| range-selection-chart-category-background-color  |          |
| range-selection-chart-background-color           |          |
| header-cell-hover-background-color               |          |
| header-cell-moving-background-color              |          |
| value-change-value-highlight-background-color    |          |
| value-change-delta-up-color                      |          |
| value-change-delta-down-color                    |          |
| chip-background-color                            |          |
| suppress-css-var-overrides                       |          |
| borders                                          |          |
| borders-critical                                 |          |
| borders-secondary                                |          |
| borders-side-button                              |          |
| side-bar-panel-width                             |          |
| border-radius                                    |          |
| border-color                                     | true     |
| secondary-border-color                           | true     |
| row-border-color                                 | true     |
| cell-horizontal-border                           |          |
| header-column-separator                          |          |
| header-column-separator-height                   |          |
| header-column-separator-width                    |          |
| header-column-separator-color                    |          |
| header-column-resize-handle                      |          |
| header-column-resize-handle-height               |          |
| header-column-resize-handle-width                |          |
| header-column-resize-handle-color                |          |
| suppress-native-widget-styling                   |          |
| input-border-color                               |          |
| input-disabled-border-color                      |          |
| input-disabled-background-color                  |          |
| checkbox-background-color                        |          |
| checkbox-border-radius                           |          |
| checkbox-checked-color                           |          |
| checkbox-unchecked-color                         |          |
| checkbox-indeterminate-color                     |          |
| toggle-button-off-border-color                   |          |
| toggle-button-off-background-color               |          |
| toggle-button-on-border-color                    |          |
| toggle-button-on-background-color                |          |
| toggle-button-switch-background-color            |          |
| toggle-button-switch-border-color                |          |
| toggle-button-border-width                       |          |
| toggle-button-height                             |          |
| toggle-button-width                              |          |
| input-focus-box-shadow                           |          |
| input-focus-border-color                         |          |
| minichart-selected-chart-color                   |          |
| minichart-selected-page-color                    |          |
| grid-size                                        |          |
| icon-size                                        |          |
| widget-container-horizontal-padding              |          |
| widget-container-vertical-padding                |          |
| widget-horizontal-spacing                        |          |
| widget-vertical-spacing                          |          |
| cell-horizontal-padding                          |          |
| cell-horizontal-padding                          |          |
| cell-widget-spacing                              |          |
| row-height                                       |          |
| header-height                                    |          |
| list-item-height                                 |          |
| column-select-indent-size                        |          |
| row-group-indent-size                            |          |
| filter-tool-panel-group-indent                   |          |
| full-width-tabs                                  |          |
| font-family                                      |          |
| font-size                                        |          |
| card-radius                                      |          |
| card-shadow                                      |          |
| popup-shadow                                     |          |

# Helpful Links

- [ AgGrid List of Customizable Parameters ](https://www.ag-grid.com/angular-data-grid/themes-customising/#full-list-of-theme-parameters/)
- [ AgGrid Themes ](https://www.ag-grid.com/angular-data-grid/themes/)
- [ AgGrid Customizing Theme ](https://www.ag-grid.com/angular-data-grid/themes-customising/)
- [ Design System JIRA Story (UXODS-338) ](https://jira.princeton.edu/jira/browse/UXODS-388)
