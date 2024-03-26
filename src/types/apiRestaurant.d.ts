export type OrderId = string;

export interface CartItem {
  addIngredients?: string[];
  removeIngredients?: string[];
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  customer: string;
  phone: number;
  address: string;
  priority: boolean;
  status?: string;
  cart: CartItem[];
  id?: string;
  estimatedDelivery?: string;
  orderPrice?: number;
  priorityPrice?: number;
}
