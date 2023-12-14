const categories = [
  {
    id: 1,
    display: "Deal Sốc",
    categorySlug: "deal-soc",
  },
  {
    id: 2,
    display: "Dưỡng da",
    categorySlug: "duong-da",
  },
  {
    id: 3,
    display: "Trang điểm",
    categorySlug: "trang-diem",
  },
  {
    id: 4,
    display: "Chăm sóc tóc",
    categorySlug: "cham-soc-toc",
  },
  {
    id: 5,
    display: "Chăm sóc cơ thể",
    categorySlug: "cham-soc-co-the",
  },
  {
    id: 6,
    display: "Khác",
    categorySlug: "khac",
  },
];
const getAllCategories = () => categories;

const getCategoryBySlug = (cate) =>
  categoryData
    .getAllCategories()
    .find((element) => element.categorySlug === cate);

const categoryData = {
  getAllCategories,
  getCategoryBySlug,
};

export default categoryData;
