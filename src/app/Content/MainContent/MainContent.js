import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"; // Import CSS module

// Dữ liệu sản phẩm (đảm bảo id duy nhất)
const products = [
  {
    id: "java-veloce",
    href: "/products/java-veloce",
    imgSrc: "/img/sp1.webp",
    alt: "Xe Đạp JAVA Veloce",
    brand: "JAVA",
    category: "Xe Đạp Đua",
    model: "JAVA Veloce",
    price: "15,000,000₫",
  },
  {
    id: "java-siluro",
    href: "/products/java-siluro",
    imgSrc: "/img/sp1.webp",
    alt: "Xe Đạp JAVA Siluro",
    brand: "JAVA",
    category: "Xe Đạp Đua",
    model: "JAVA Siluro",
    price: "18,000,000₫",
  },
  {
    id: "trex-roadster",
    href: "/products/trex-roadster",
    imgSrc: "/img/sp1.webp",
    alt: "Xe Đạp TREX Roadster",
    brand: "TREX",
    category: "Xe Đạp Địa Hình",
    model: "TREX Roadster",
    price: "12,000,000₫",
  },
  {
    id: "giant-propel-1",
    href: "/products/giant-propel",
    imgSrc: "/img/sp1.webp",
    alt: "Xe Đạp GIANT Propel",
    brand: "GIANT",
    category: "Xe Đạp Đua",
    model: "GIANT Propel",
    price: "25,000,000₫",
  },
  {
    id: "giant-propel-2",
    href: "/products/giant-propel",
    imgSrc: "/img/sp1.webp",
    alt: "Xe Đạp GIANT Propel",
    brand: "GIANT",
    category: "Xe Đạp Đua",
    model: "GIANT Propel",
    price: "25,000,000₫",
  },
  {
    id: "giant-propel-3",
    href: "/products/giant-propel",
    imgSrc: "/img/sp1.webp",
    alt: "Xe Đạp GIANT Propel",
    brand: "GIANT",
    category: "Xe Đạp Đua",
    model: "GIANT Propel",
    price: "25,000,000₫",
  },
];

const MainContent = () => {
  return (
    <div className={`container ${styles.mainContentContainer}`}>
      <div className={styles.ND}>Sản phẩm nổi bật</div>
      <div className={`row g-0 ${styles.productRow}`}>  
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-xl-4">
            <Link href={product.href} className={`${styles.productItem} d-block`}>
              <img src={product.imgSrc} alt={product.alt} />
              <h3>{product.brand}</h3>
              <p>{product.category}</p>
              <p>{product.model}</p>
              <p className={styles.productPrice}>{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;