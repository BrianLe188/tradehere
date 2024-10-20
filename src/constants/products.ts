/* eslint-disable @typescript-eslint/no-explicit-any */
import { mockId } from "@/lib/utils";

export const product = {
  id: mockId(),
  name: "Product with very long name",
  images: [],
  category: {
    id: mockId(),
    name: "Category with very long name",
  },
  owner: {
    id: mockId(),
    name: "ANH",
  },
  description: "The very long description, about 10000 words",
};

export const products: any[] = [
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    category: { id: mockId(), name: "Category" },
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
  {
    id: mockId(),
    name: "Product with very long name",
    status: "new",
    publicStatus: "pending",
  },
];

export const pendingExchanges = [
  {
    id: mockId(),
    proposer: {
      id: mockId(),
      name: "Alice Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    desiredItem: {
      id: mockId(),
      name: "Vintage Camera",
      image: "/placeholder.svg?height=100&width=100",
    },
    offeredItems: [
      {
        id: mockId(),
        name: "Smartphone",
        image: "/placeholder.svg?height=50&width=50",
      },
      {
        id: mockId(),
        name: "Headphones",
        image: "/placeholder.svg?height=50&width=50",
      },
    ],
    message:
      "Hi, I'm interested in your vintage camera. Would you like to exchange it for my smartphone and headphones?",
    date: "2023-06-15",
  },
];
