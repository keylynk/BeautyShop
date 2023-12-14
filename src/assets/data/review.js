const reviews = [
  {
    id: 1,
    user: "Tôn Nữ Hoài Thương",
    title: "Kem dưỡng",
    comment: "Sản phẩm dùng tốt lắm chị!",
    star: 4.5,
    date: "Tháng 10 2022",
  },
  {
    id: 2,
    user: "Trần Linh Nhi",
    title: "Sản phẩm xài oke",
    comment:
      "Bao bì đẹp, chắc chắn. Chất kem mỏng nhẹ, nhanh thấm trên da, xài xong vẫn còn độ ẩm nhẹ. Sản phẩm phù hợp với da của tôi.",
    star: 5.0,
    date: "Tháng 12 2022",
  },
  {
    id: 3,
    user: "Lê Thị A",
    title: "Hàng Việt Nam chất lượng cao",
    comment:
      "Đây là tuýp thứ hai tôi mua, đã có cải tiến so với đợt trước về mùi hương, đợt này không quá nồng, đặc biệt packaging sản phẩm nhìn rất đẹp, hợp mắt thị hiếu người Việt.",
    star: 4.5,
    date: "Tháng 1 2023",
  },
];

const getAllReviews = () => reviews;

const count = () => reviewData.getAllReviews().length;

const average = () => {
  let sum = 0;
  for (let i = 0; i < reviews.length; i++) {
    sum += reviews[i].star;
  }

  return (sum / reviewData.count()).toFixed(1);
};

const reviewData = {
  count,
  getAllReviews,
  average,
};

export default reviewData;
