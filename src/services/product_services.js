import { ApiService } from './api_services';

const endpoint = '/products';

export const ProductService = {
    list() {
        return ApiService.get(endpoint);
    },
    create(product) {
        return ApiService.post(endpoint, product);
    },
    remove(id) {
        return ApiService.delete(endpoint, id);
    }
}