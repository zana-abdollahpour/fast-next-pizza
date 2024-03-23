export type OrderId = string;

export interface Cart {
  addIngredients: any[];
  removeIngredients: any[];
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  customer: string;
  status: string;
  priority: boolean;
  cart: Cart[];
  id: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
}
