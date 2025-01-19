import {useContext} from 'react';
import {RouterProvider as Router} from 'react-router-dom';
import {routes} from './utils';
import { AppContext, AppContextInterface } from '../application';

export const RouterProvider = () => {
  const {pdfPreviewerOpen} = useContext(AppContext) as AppContextInterface;

  return <Router router={routes(pdfPreviewerOpen)} />;
};
