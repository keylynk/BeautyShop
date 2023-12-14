import {
  TruckIcon,
  SwapIcon,
  ShieldIcon,
  SupportIcon,
} from "../../components/Icons/index";

const policies = [
  {
    id: 1,
    title: "Miễn phí vận chuyển",
    sub: "Đơn hàng từ 300k",
    short: "Miễn phí vận chuyển đơn từ 300k",
    icon: <TruckIcon size={80} />,
    smallIcon: <TruckIcon size={40} />,
  },
  {
    id: 2,
    title: "7 ngày đổi trả",
    sub: "Miễn phí",
    short: "7 ngày đổi trả miễn phí",
    icon: <SwapIcon size={80} />,
    smallIcon: <SwapIcon size={40} />,
  },
  {
    id: 3,
    title: "Hàng chính hãng",
    sub: "Cam kết về chất lượng",
    short: "Cam kết chính hãng",
    icon: <ShieldIcon size={80} />,
    smallIcon: <ShieldIcon size={40} />,
  },
  {
    id: 4,
    title: "Chăm sóc khách hàng",
    sub: "Tư vấn 24/24",
    short: "Đội ngũ tư vấn 24/24",
    icon: <SupportIcon size={80} />,
    smallIcon: <SupportIcon size={40} />,
  },
];

const getAllPolicies = () => policies;

const policyData = {
  getAllPolicies,
};

export default policyData;
