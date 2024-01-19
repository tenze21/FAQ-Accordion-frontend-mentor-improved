## FAQ Accordion Improved.
Some improvements I have made are:
- Styled it such that when javascript is not loaded the answer isn't displayed.

```<style>
      [data-state='no-js'] .answer{
        display: none;
      }
    </style>```

- Imrpoved accessibility with `ARIA`.

- Added a `noscript`.
```<noscript>
      <!-- show all content if no js -->
      <style>
        [data-state='no-js'] .answer{
          display: block;
        }
      </style>
    </noscript>```

- Used `aria-expanded` attributes to hide and display the answer and change the icon at the same time. The function below is called on clicking the question which changes the `aria-expanded` value and the style is applied accordingly.
```function toggleDisclosure(){
    const isExpanded= this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded', !isExpanded);
}```


``` .disclosure_button[aria-expanded="true"] .show {
        display: none;
    }
    .disclosure_button[aria-expanded="true"] .hide{
        display: inline-block;
    }
    .disclosure_button[aria-expanded="true"] + .answer{
        display: block;
    }
    .disclosure_button[aria-expanded="false"] + .answer{
        display: none;
    }```
