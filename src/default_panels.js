var ContainerPanel = require('./panels/container_panel');

var figuresPanel = new ContainerPanel({
  type: 'resource',
  name: 'figures',
  container: 'figures',
  title: 'Figures',
  icon: 'icon-picture',
  references: ['figure_reference'],
  zoom: true,
});

var citationsPanel = new ContainerPanel({
  type: 'resource',
  name: 'citations',
  container: 'citations',
  title: 'References',
  icon: 'icon-link',
  references: ['citation_reference'],
});

var definitionsPanel = new ContainerPanel({
  type: 'resource',
  name: 'definitions',
  container: 'definitions',
  title: 'Glossary',
  icon: 'icon-book',
  references: ['definition_reference'],
});

var infoPanel = new ContainerPanel({
  type: 'resource',
  name: 'info',
  container: 'info',
  title: 'Info',
  icon: 'icon-info-sign',
  references: ['contributor_reference'],
});

module.exports = [
  figuresPanel, citationsPanel, definitionsPanel, infoPanel
];
