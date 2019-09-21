import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { createBrowserHistory } from 'history';

function getSelectedSections() {
  const path = createBrowserHistory().location.pathname;
  const isRoot = ['', '/'].includes(path);
  const sections = (!isRoot) ? [
    { key: 'Voluntary', content: 'Cadastrar Voluntário', href: '/addVoluntary' },
    { key: 'Nursery', content: 'Cadastrar Lar de Idosos', href: '/addHome' },
  ]
  .filter(({ href }) => new RegExp(path).test(href)) : [];

  return [
    { key: 'Home', content: 'Home', href: (!isRoot) ? '/' : undefined, active: isRoot  },
    ...(sections.slice(0, sections.length - 2).map((s) => ({ ...s, active: false }))),
    ...(sections.slice(-1).map((s) => ({ ...s, active: true, link: false, href: undefined }))),
  ];
}

function CustomBreadcrumbs() {
  return (
    <Breadcrumb icon='right angle' sections={getSelectedSections()} />
  );
}

export default CustomBreadcrumbs;
