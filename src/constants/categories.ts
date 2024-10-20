import { mockId } from "@/lib/utils";

export const categories = [
  {
    id: mockId(),
    name: "Sách",
    children: [
      {
        id: mockId(),
        name: "Sách văn học",
      },
      {
        id: mockId(),
        name: "Sách kinh tế",
      },
      {
        id: mockId(),
        name: "Sách thiếu nhi",
      },
      {
        id: mockId(),
        name: "Sách kỹ năng sống",
      },
    ],
  },
  {
    id: mockId(),
    name: "Đồ cho nam",
    children: [
      {
        id: mockId(),
        name: "Giày nam",
      },
      {
        id: mockId(),
        name: "Phụ kiện nam",
      },
    ],
  },
  {
    id: mockId(),
    name: "Đồ cho nữ",
    children: [
      {
        id: mockId(),
        name: "Giày nữ",
      },
      {
        id: mockId(),
        name: "Phụ kiện nữ",
      },
    ],
  },
  {
    id: mockId(),
    name: "Đồ làm đẹp",
    children: [
      {
        id: mockId(),
        name: "Dụng cụ trang điểm",
      },
      {
        id: mockId(),
        name: "Nước hoa",
      },
    ],
  },
];
