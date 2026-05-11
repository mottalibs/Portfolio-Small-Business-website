import {
  FaPrint, FaBriefcase, FaIdCard, FaKeyboard, FaFileContract, FaQrcode,
  FaLaptopCode, FaFileAlt, FaIdCardAlt, FaStore, FaStoreAlt, FaGlobe,
  FaRocket, FaShoppingBasket, FaCandyCane, FaBirthdayCake, FaMugHot,
  FaCode, FaPlay, FaArrowRight, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt,
  FaFacebookF, FaWhatsapp, FaInstagram, FaGithub, FaPaperPlane, FaSpinner,
  FaSun, FaMoon, FaArrowUp, FaPlus, FaEdit, FaTrash, FaTimes, FaBars,
  FaCheck, FaInbox, FaCog, FaSignOutAlt, FaTachometerAlt, FaEye, FaEyeSlash,
  FaBoxOpen, FaProjectDiagram, FaTools, FaEnvelopeOpenText, FaChartLine,
} from 'react-icons/fa';

const iconMap = {
  FaPrint, FaBriefcase, FaIdCard, FaKeyboard, FaFileContract, FaQrcode,
  FaLaptopCode, FaFileAlt, FaIdCardAlt, FaStore, FaStoreAlt, FaGlobe,
  FaRocket, FaShoppingBasket, FaCandyCane, FaBirthdayCake, FaMugHot,
  FaCode, FaPlay, FaArrowRight, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt,
  FaFacebookF, FaWhatsapp, FaInstagram, FaGithub, FaPaperPlane, FaSpinner,
  FaSun, FaMoon, FaArrowUp, FaPlus, FaEdit, FaTrash, FaTimes, FaBars,
  FaCheck, FaInbox, FaCog, FaSignOutAlt, FaTachometerAlt, FaEye, FaEyeSlash,
  FaBoxOpen, FaProjectDiagram, FaTools, FaEnvelopeOpenText, FaChartLine,
};

export function DynamicIcon({ name, size = 16, className = '' }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

export default iconMap;
