import { IProduct } from './product';

export interface IPagination {
    pageIndex: string;
    pageSize: string;
    count: string;
    data: IProduct[];
  }
