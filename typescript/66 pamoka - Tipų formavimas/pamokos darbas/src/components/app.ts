import Form from './form.js';
import ProductsTable from './products-table.js';
import ProductCollection from '../helpers/product-collection.js';
import allProducts from '../data/products.js';
import categoryNameToTitleDictionary from '../data/category-name-to-title-dictionary.js';
import CategorySelect from './category-select.js';

class App {
  public htmlElement: Element;

  private productForm: Form;

  private containerHtmlElement: HTMLDivElement;

  private categorySelect: CategorySelect;

  private productsTable: ProductsTable;

  private productCollection: ProductCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector(selector);
    if (!foundElement) {
      throw new Error(`Nėra elemento su id: '${selector}'`);
    }
    this.htmlElement = foundElement;

    this.categorySelect = new CategorySelect();
    this.containerHtmlElement = document.createElement('div');
    this.productCollection = new ProductCollection(allProducts);
    this.productForm = new Form();
    this.productsTable = new ProductsTable(
      this.productCollection.getAll(),
      'Visi produktai',
    );

    this.format();
  }

  private updateTableOnCategoryChange = (categoryName: string): void => {
    const categoryProducts = this.productCollection.getByCategoryName(categoryName);

    if (categoryName in categoryNameToTitleDictionary) {
      const tableTitle = categoryNameToTitleDictionary[categoryName];
      this.productsTable.setTitle(tableTitle);
    }
    this.productsTable.setData(categoryProducts);

    this.productsTable.update();
  };

  private formatCategorySelect = (): void => {
    this.categorySelect.onChange = this.updateTableOnCategoryChange;
  };

  private formatContainerHtmlElement = () => {
    this.containerHtmlElement.className = 'd-flex gap-4 my-4 align-items-start';
    this.containerHtmlElement.append(
      this.productsTable.htmlElement,
      this.productForm.htmlElement,
    );
  };

  private format = (): void => {
    this.formatCategorySelect();
    this.formatContainerHtmlElement();

    this.htmlElement.append(
      this.categorySelect.htmlElement,
      this.containerHtmlElement,
    );
  };
}

export default App;
