export type RootStackParamList = {
  SignIn: undefined;
  Register: undefined;
  TABBAR: undefined;
  Home: undefined;
  Search: undefined;
  Favorite: undefined;
  Profile: { userId: string }; 
  Categories: undefined;
  ProductsListScreen: { categorySlug: string };
  'ProductDetail': { productId: number }; 
  'My Chart': undefined;
};
