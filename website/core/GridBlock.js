const React = require('react');

// const CompLibrary = require('../../core/CompLibrary.js');
// const GridBlock = CompLibrary.GridBlock;

class GridBlock extends CompLibrary.GridBlock {
  renderBlockTitle(title) {
    if (!title) {
      return null;
    }
    return (
      <h3>
        <MarkdownBlock>{title}</MarkdownBlock>
      </h3>
    );
  }
}

module.exports = GridBlock;
