"use client"; // Make this a client component to use React hooks

import { useState } from "react";
import styles from "./page.module.css";
import ProductTabs from "./producttabs";

// Mock data for products
const products = {
  "java-veloce": {
    id: "java-veloce",
    name: "Xe Đạp JAVA Veloce",
    brand: "JAVA",
    price: 15000000,
    sku: "5322355",
    description:
      "Xe đạp JAVA Veloce là một chiếc xe đạp đua đường trường với khung carbon nhẹ, thiết kế khí động học, phù hợp cho các cuộc đua tốc độ cao. Xe được trang bị bộ truyền động Shimano 105, bánh xe 700c, và trọng lượng chỉ 8.5kg.",
    technicalSpecs:
      "Chất liệu khung: Carbon\nTrọng lượng: 8.5kg\nBộ truyền động: Shimano 105\nBánh xe: 700c",
    geometry:
      "Thiết kế khung tối ưu hóa khí động học, góc đầu ống 73 độ, chiều dài ống trên 550mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
  "java-siluro": {
    id: "java-siluro",
    name: "Xe Đạp JAVA Siluro",
    brand: "JAVA",
    price: 18000000,
    sku: "5322356",
    description:
      "Xe đạp JAVA Siluro là lựa chọn hoàn hảo cho những người đam mê tốc độ. Khung hợp kim nhôm cao cấp, bộ truyền động Shimano Ultegra, và thiết kế tối ưu hóa khí động học giúp bạn chinh phục mọi cung đường.",
    technicalSpecs:
      "Chất liệu khung: Hợp kim nhôm\nTrọng lượng: 9.0kg\nBộ truyền động: Shimano Ultegra\nBánh xe: 700c",
    geometry:
      "Thiết kế khung khí động học, góc đầu ống 72.5 độ, chiều dài ống trên 560mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
  "trex-roadster": {
    id: "trex-roadster",
    name: "Xe Đạp TREX Roadster",
    brand: "TREX",
    price: 12000000,
    sku: "5322357",
    description:
      "Xe đạp TREX Roadster là một chiếc xe đạp địa hình với khung thép bền bỉ, lốp xe 27.5 inch, và bộ truyền động Shimano Deore. Phù hợp cho các chuyến đi off-road và khám phá thiên nhiên.",
    technicalSpecs:
      "Chất liệu khung: Thép\nTrọng lượng: 12.0kg\nBộ truyền động: Shimano Deore\nLốp xe: 27.5 inch",
    geometry:
      "Thiết kế khung địa hình, góc đầu ống 70 độ, chiều dài ống trên 580mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
  "giant-propel-1": {
    id: "giant-propel-1",
    name: "Xe Đạp GIANT Propel",
    brand: "GIANT",
    price: 25000000,
    sku: "5322358",
    description:
      "Xe đạp GIANT Propel là một trong những mẫu xe đua hàng đầu với khung carbon siêu nhẹ, bộ truyền động Shimano Dura-Ace, và thiết kế tối ưu cho tốc độ. Trọng lượng chỉ 7.8kg.",
    technicalSpecs:
      "Chất liệu khung: Carbon\nTrọng lượng: 7.8kg\nBộ truyền động: Shimano Dura-Ace\nBánh xe: 700c",
    geometry:
      "Thiết kế khung tối ưu hóa tốc độ, góc đầu ống 73.5 độ, chiều dài ống trên 540mm.",
    images: [
      "/img/sp1.webp",

    ],
  },
  "giant-propel-2": {
    id: "giant-propel-2",
    name: "Xe Đạp GIANT Propel (Phiên bản 2)",
    brand: "GIANT",
    price: 26000000,
    sku: "5322359",
    description:
      "Xe đạp GIANT Propel phiên bản 2 với khung carbon siêu nhẹ, bộ truyền động Shimano Dura-Ace, và thiết kế tối ưu cho tốc độ. Trọng lượng chỉ 7.8kg.",
    technicalSpecs:
      "Chất liệu khung: Carbon\nTrọng lượng: 7.8kg\nBộ truyền động: Shimano Dura-Ace\nBánh xe: 700c",
    geometry:
      "Thiết kế khung tối ưu hóa tốc độ, góc đầu ống 73.5 độ, chiều dài ống trên 540mm.",
    images: [
      "/img/sp1.webp",
    ],
  },
};

// Hàm định dạng giá tiền
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
};

export default function ProductDetailPage({ params }) {
  const { id } = params;

  const product = products[id];

  // State to manage the currently selected image
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  // State to manage the visible thumbnails (for scrolling)
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  if (!product) {
    return (
      <div className={styles.productContainer}>
        <h1 className={styles.title}>Sản Phẩm Không Tồn Tại</h1>
        <p>Xin lỗi, chúng tôi không tìm thấy sản phẩm bạn yêu cầu.</p>
      </div>
    );
  }

  // Handle thumbnail navigation
  const thumbnailsPerPage = 4; // Number of thumbnails visible at a time
  const totalThumbnails = product.images.length;

  const handlePrevThumbnails = () => {
    setThumbnailIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextThumbnails = () => {
    setThumbnailIndex((prev) =>
      Math.min(prev + 1, totalThumbnails - thumbnailsPerPage)
    );
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productPage}>
        {/* Product Image Gallery */}
        <div className={styles.productImageGallery}>
          {/* Thumbnails with Navigation */}
          <div className={styles.thumbnailWrapper}>
            {/* <button
              className={styles.navArrow}
              onClick={handlePrevThumbnails}
              disabled={thumbnailIndex === 0}
            >
              ↑
            </button>
            <div className={styles.thumbnailContainer}>
              {product.images
                .slice(thumbnailIndex, thumbnailIndex + thumbnailsPerPage)
                .map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnail} ${
                      selectedImage === image ? styles.thumbnailActive : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
            <button
              className={styles.navArrow}
              onClick={handleNextThumbnails}
              disabled={thumbnailIndex >= totalThumbnails - thumbnailsPerPage}
            >
              ↓
            </button> */}
          </div>

          {/* Main Image */}
          <div className={styles.mainImage}>
            <img src={selectedImage} alt={product.name} loading="lazy" />
          </div>
        </div>

        {/* Product Details */}
        <div className={styles.productDetails}>
          <h1>Xe Đạp Đua</h1>
          <h2>{product.name}</h2>
          <p className={styles.productSku}>SKU: {product.sku}</p>
          <p className={styles.productPrice}>{formatPrice(product.price)}</p>

          {/* Size Selector */}
          <div className={styles.sizeSelector}>
            <label htmlFor="size">Kích thước:</label>
            <select id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <button className={styles.sizeChartBtn}>BẢNG KÍCH THƯỚC</button>
          </div>

          {/* Quantity Selector */}
          <div className={styles.quantitySelector}>
            <label htmlFor="quantity">Số lượng:</label>
            <input type="number" id="quantity" defaultValue="1" min="1" />
          </div>

          {/* Buttons */}
          <div className={styles.actionButtons}>
            <button className={styles.addToCart}>THÊM VÀO GIỎ</button>
            <button className={styles.installment}>TRẢ GÓP</button>
            <button className={styles.buyNow}>MUA NGAY</button>
          </div>

          {/* Additional Info */}
          <div className={styles.additionalInfo}>
            <p>
              Trả sau đến 12 tháng với <span>Fundiin</span>
            </p>
            <p className={styles.discountInfo}>
              Giảm đến <span>50K</span> khi thanh toán qua Fundiin.{" "}
              <a href="#">xem thêm</a>
            </p>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <ProductTabs
        description={product.description}
        technicalSpecs={product.technicalSpecs}
        geometry={product.geometry}
      />
    </div>
  );
}
