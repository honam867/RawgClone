import { lazy } from 'react';
import { PublicLayout } from './layout';

export const routes = [
  {
    path: INDEX_PATH,
    exact: true,
    layout: PublicLayout,
    components: GamesContainer
  }
];
