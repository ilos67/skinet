import { IAddress } from './address';

export interface IOrderToCreate {
    basketId: string;
    deliveryMethodId: number;
    shipToAddress: IAddress;
  }

export interface IOrder {
    id: string;
    buyerEmail: string;
    orderDate: string;
    shipToAddress: IAddress;
    deliveryMethod: string;
    shippingPrice: number;
    orderItems: IOrderItem[];
    subTotal: number;
    total: number;
    status: string;
  }

export interface IOrderItem {
    productId: string;
    productName: string;
    pictureUrl: string;
    price: number;
    quantity: string;
  }
