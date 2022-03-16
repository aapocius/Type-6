import categories from '../data/categories.js';
import Category from '../types/category.js';

export type OnCategoryChange = (categoryName: string) => void;

class CategorySelect {
  private static categories: Category[] = categories;

  public onChange: OnCategoryChange | null;

  public htmlElement: HTMLSelectElement;

  constructor() {
    this.onChange = null;
    this.htmlElement = document.createElement('select');

    this.format();
  }

  private handleChange = () => {
    const categoryName = this.htmlElement.value;
    if (this.onChange) {
      this.onChange(categoryName);
    }
  };

  private formatOptions = (): void => {
    const blankOption = '<option value="all">Select Category</option>';
    const categoryOptions = CategorySelect.categories
      .map((x) => `
      '<option value="${x.name}">${x.name}</option>'
      `);
    const allOptions = blankOption + categoryOptions;

    this.htmlElement.innerHTML = allOptions;
  };

  private format = (): void => {
    this.formatOptions();
    this.htmlElement.addEventListener('change', this.handleChange);
  };
}

export default CategorySelect;
