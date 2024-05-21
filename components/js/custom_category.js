import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

class CustomCategory extends b4d.Blockly.ToolboxCategory {
    /**
     * Constructor for a custom category.
     * @override
     */
    constructor(categoryDef, toolbox, opt_parent) {
      super(categoryDef, toolbox, opt_parent);
    }

    /** @override */
    addColourBorder_(colour){
    this.rowDiv_.style.backgroundColor = colour;
  }
  setSelected(isSelected){
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName('BlocklyTreeLabel')[0];
    if (isSelected) {
      // Change the background color of the div to white.
      this.rowDiv_.style.backgroundColor = 'white';
      // Set the colour of the text to the colour of the category.
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      // Set the background back to the original colour.
      this.rowDiv_.style.backgroundColor = this.colour_;
      // Set the text back to white.
      labelDom.style.color = 'white';
      this.iconDom_.style.color = 'white';
    }
    // This is used for accessibility purposes.
    b4d.Blockly.utils.aria.setState(/** @type {!Element} */ (this.htmlDiv_), b4d.Blockly.utils.aria.State.SELECTED, isSelected);
  }
}

b4d.Blockly.registry.register(b4d.Blockly.registry.Type.TOOLBOX_ITEM, b4d.Blockly.ToolboxCategory.registrationName, CustomCategory, true);
