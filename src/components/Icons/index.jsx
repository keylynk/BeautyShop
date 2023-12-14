import {
  BsCart2,
  BsPerson,
  BsChevronDown,
  BsChevronUp,
  BsChevronLeft,
  BsChevronRight,
  BsTruck,
  BsHeart,
  BsHeartFill,
  BsArrowLeft,
} from "react-icons/bs";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineSwap,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { RiShieldStarLine } from "react-icons/ri";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { GitHub, Instagram } from "@mui/icons-material";
import { IoClose, IoBookmarkSharp, IoLocationOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { HomeOutlined } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import { RxMobile } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";

const CartIcon = () => {
  return <BsCart2 size={28} />;
};
const SearchIcon = (props) => {
  return <AiOutlineSearch size={props.size} />;
};
const MenuIcon = () => {
  return <AiOutlineMenu size={28} />;
};
const AccountIcon = () => {
  return <BsPerson size={28} />;
};
const DownIcon = () => {
  return <BsChevronDown size={12} />;
};
const UpIcon = (props) => {
  return <BsChevronUp size={12} style={{ color: props.color }} />;
};
const LeftIcon = (props) => {
  return <BsChevronLeft size={props.size} />;
};
const RightIcon = (props) => {
  return <BsChevronRight size={props.size} />;
};
const BackIcon = () => {
  return <BsArrowLeft size={28} />;
};
const CloseIcon = () => {
  return <IoClose size={28} />;
};
const FacebookIcon = (props) => {
  return <FacebookRoundedIcon color="primary" sx={{ fontSize: props.size }} />;
};
const InstagramIcon = (props) => {
  return <Instagram sx={{ fontSize: props.size }} />;
};
const GoogleIcon = (props) => {
  return <FcGoogle size={props.size} />;
};
const GitHubIcon = (props) => {
  return <GitHub sx={{ fontSize: props.size }} />;
};
const TruckIcon = (props) => {
  return <BsTruck size={props.size} />;
};
const SwapIcon = (props) => {
  return <AiOutlineSwap size={props.size} />;
};
const ShieldIcon = (props) => {
  return <RiShieldStarLine size={props.size} />;
};
const SupportIcon = (props) => {
  return <MdSupportAgent size={props.size} />;
};
const HeartOutline = (props) => {
  return <BsHeart size={props.size} />;
};
const HeartFill = (props) => {
  return <BsHeartFill size={props.size} />;
};
const BookmarkIcon = () => {
  return <IoBookmarkSharp size={72} />;
};
const HomeIcon = () => {
  return <HomeOutlined />;
};
const PlusIcon = () => {
  return <AiOutlinePlus size={28} />;
};
const MinusIcon = () => {
  return <AiOutlineMinus size={28} />;
};
const LocationIcon = () => {
  return <IoLocationOutline size={24} />;
};
const MobileIcon = () => {
  return <RxMobile size={24} />;
};
const EmailIcon = () => {
  return <TfiEmail size={22} />;
};

export {
  CartIcon,
  SearchIcon,
  MenuIcon,
  AccountIcon,
  DownIcon,
  UpIcon,
  LeftIcon,
  RightIcon,
  BackIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
  GitHubIcon,
  TruckIcon,
  SwapIcon,
  ShieldIcon,
  SupportIcon,
  HeartOutline,
  HeartFill,
  BookmarkIcon,
  HomeIcon,
  PlusIcon,
  MinusIcon,
  LocationIcon,
  MobileIcon,
  EmailIcon,
};
