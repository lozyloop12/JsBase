import { NavigationActions, CommonActions } from '@react-navigation/native';
import React from "react"
export const navigationRef = React.createRef();

export const navigate = ({ routeName, navigator, params, action, key }) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
      key,
    }),
  );
};

export const navigateToPage = (pageName, navigator, data) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: pageName,
      params: data,
    }),
  );
};

export const toggleDrawer = (navigator) => {
  navigator.dispatch(NavigationActions.navigate({ routeName: 'DrawerToggle' }));
};

export const goBack = (navigator) => {
  navigator.dispatch(NavigationActions.back({}));
};

export const resetPage = (page, navigator, data) => {
  navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: page,
          params: data,
        },
      ],
    })
  );
};

export const resetPageWithoutNavigator = (page, data) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: page,
          params: data,
        },
      ],
    })
  );
};

export const resetPageOnTop = (page, navigator, params, beforePage = 'Main') => {
  navigator.dispatch(
    NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: beforePage }),
        NavigationActions.navigate({ routeName: page, params }),
      ],
    }),
  );
};

export const navigateWithoutNavigator = (routeName, params) => {
  navigationRef.current?.navigate(routeName, params);
};

export const replaceWithoutNavigator = (routeName, params) => {
  navigationRef.current?.replace(routeName, params);
};


