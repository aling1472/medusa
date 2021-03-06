import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/medusa-api';
import type {
  UseProductSearchParams as SearchParams
} from '../types';

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    console.log('Mocked: useProduct.productsSearch');
    const data = await context.$sloth.api.getProduct(params);

    return data;
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
