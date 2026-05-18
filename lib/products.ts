export const products = [
  // ==========================================
  // CUSTOM BUILDS (5)
  // ==========================================
  {
    id: "build-001",
    name: "Zenith Ultra-Liquid",
    category: "Builds",
    price: 4999.99,
    image:
      "https://radiumpcs.com.au/cdn/shop/files/gempages_463294430024041295-f4add762-92d7-4a63-8d95-9833bf30c400.png?v=1745813477&width=1080",
    description:
      "Our flagship custom loop build featuring hard-line tubing and the fastest silicon on earth.",
    specs: {
      cpu: "Core Ultra 9 285K",
      gpu: "RTX 5090 32GB",
      ram: "64GB DDR5 8000MHz",
      storage: "4TB Gen5 NVMe",
    },
    variations: {
      color: ["Matte Black", "Arctic White"],
      coolant: ["Electric Blue", "Acid Green", "Clear"],
    },
    stock: "In Stock",
    tags: ["Extreme", "Watercooled"],
  },
  {
    id: "build-002",
    name: "Ghost Stealth SFF",
    category: "Builds",
    price: 2499.0,
    image: "https://i.imgur.com/s620keP.jpeg",
    description:
      "Maximum power in a 10L Small Form Factor chassis. Perfect for minimal setups.",
    specs: {
      cpu: "Ryzen 9 9950X",
      gpu: "RTX 5080 ITX",
      ram: "32GB DDR5",
      storage: "2TB NVMe",
    },
    variations: { color: ["Sandstone", "Graphite"] },
    stock: "Build to Order",
    tags: ["SFF", "Minimalist"],
  },
  {
    id: "build-003",
    name: "Nebula Streamer Pro",
    category: "Builds",
    price: 3199.99,
    image:
      "https://www.jouleperformance.com/media/catalog/product/6/8/68e78094-c7af-4e8c-ad34-d4590357fb8f.png",
    description:
      "Designed for 4K streaming and high-bandwidth content creation.",
    specs: {
      cpu: "Core Ultra 7 265K",
      gpu: "RTX 5080",
      ram: "64GB DDR5",
      storage: "2TB + 4TB HDD",
    },
    variations: { lighting: ["ARGB Elite", "Non-RGB Stealth"] },
    stock: "In Stock",
    tags: ["Streaming", "Creator"],
  },
  {
    id: "build-004",
    name: "Quantum E-Sports",
    category: "Builds",
    price: 1599.0,
    image:
      "https://emarque.co/cdn/shop/articles/366600729_679802674193096_7900919120789861825_n.jpg?v=1714474169&width=1100",
    description:
      "Optimized for 500FPS+ in competitive titles like Valorant and CS2.",
    specs: {
      cpu: "Ryzen 7 9800X3D",
      gpu: "RTX 5070 Ti",
      ram: "32GB 6000MHz",
      storage: "1TB Gen4",
    },
    variations: { ram_upgrade: ["32GB", "64GB"] },
    stock: "In Stock",
    tags: ["Esports", "Competitive"],
  },
  {
    id: "build-005",
    name: "Titan Workstation X",
    category: "Builds",
    price: 7999.0,
    image: "https://themvp.in/catalog/view/assets/img/PC-Samsung-India.webp",
    description: "A multi-GPU powerhouse for 3D rendering and AI training.",
    specs: {
      cpu: "Threadripper 7980X",
      gpu: "Dual RTX 5090 NVLink",
      ram: "256GB ECC DDR5",
      storage: "8TB RAID-0",
    },
    variations: { os: ["Windows 11 Pro", "Ubuntu 24.04 LTS"] },
    stock: "Special Order",
    tags: ["Workstation", "AI", "Rendering"],
  },

  // ==========================================
  // LAPTOPS (5 Brands)
  // ==========================================
  {
    id: "lap-001",
    brand: "Razer",
    name: "Blade 16 (2026)",
    category: "Laptops",
    price: 3899.99,
    image: "https://i.postimg.cc/Gh6hmTRR/razer.png",
    specs: { display: "16-inch OLED 300Hz", cpu: "Ultra 9", gpu: "RTX 5090" },
    variations: { display_type: ["QHD+ 300Hz", "4K Dual-Mode Mini-LED"] },
    stock: "Limited",
    tags: ["Premium", "Thin-and-Light"],
  },
  {
    id: "lap-002",
    brand: "ASUS ROG",
    name: "Zephyrus G14",
    category: "Laptops",
    price: 1899.0,
    image: "https://i.postimg.cc/mgMZzZZQ/asus.png",
    specs: { display: "14-inch Nebula HDR", cpu: "Ryzen 9", gpu: "RTX 5070" },
    variations: { color: ["Eclipse Gray", "Moonlight White"] },
    stock: "In Stock",
    tags: ["Portability", "Performance"],
  },
  {
    id: "lap-003",
    brand: "Alienware",
    name: "m18 R3",
    category: "Laptops",
    price: 3299.0,
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/aa16250/media-gallery/laptop-alienware-aa16250nt-gallery-1.psd?fmt=png-alpha&wid=1000",
    specs: { display: "18-inch 480Hz", cpu: "Ultra 9", gpu: "RTX 5080" },
    variations: { keyboard: ["Standard RGB", "CherryMX Mechanical"] },
    stock: "In Stock",
    tags: ["Large Display", "Desktop Replacement"],
  },
  {
    id: "lap-004",
    brand: "MSI",
    name: "Titan 18 HX",
    category: "Laptops",
    price: 4599.0,
    image: "https://i.postimg.cc/JzJ7D77Z/msi.png",
    specs: { display: "18-inch 4K Mini-LED", cpu: "Ultra 9", gpu: "RTX 5090" },
    variations: { storage: ["2TB", "4TB", "8TB"] },
    stock: "Special Order",
    tags: ["Extreme", "Workstation"],
  },
  {
    id: "lap-005",
    brand: "Lenovo",
    name: "Legion Pro 7i",
    category: "Laptops",
    price: 2199.0,
    image: "https://i.postimg.cc/2SvjbjjF/lenovo.png",
    specs: { display: "16-inch 240Hz", cpu: "Ultra 7", gpu: "RTX 5070 Ti" },
    variations: { ram: ["16GB", "32GB"] },
    stock: "In Stock",
    tags: ["Value", "Balanced"],
  },

  // ==========================================
  // COMPONENTS (CPUs, GPUs, RAM, SSDs)
  // ==========================================
  {
    id: "cpu-001",
    name: "Intel Core Ultra 9 285K",
    category: "Components",
    subCategory: "CPU",
    price: 629.0,
    image:
      "https://www.geekzonedz.com/6739-large_default/intel-core-ultra-9-285k-37-ghz-57-ghz.jpg",
    specs: { cores: "24", speed: "5.7GHz" },
    stock: "In Stock",
  },
  {
    id: "cpu-002",
    name: "AMD Ryzen 9 9950X",
    category: "Components",
    subCategory: "CPU",
    price: 649.0,
    image:
      "https://www.geekzonedz.com/6698-large_default/amd-ryzen-9-9950x-43-ghz-57-ghz.jpg",
    specs: { cores: "16", speed: "5.7GHz" },
    stock: "In Stock",
  },
  {
    id: "gpu-001",
    name: "NVIDIA RTX 5090 MSI Gaming TRIO OC",
    category: "Components",
    subCategory: "GPU",
    price: 1999.0,
    image:
      "https://asset.msi.com/resize/image/global/product/product_1737081391c78c1a2adecd19b4c2d8b8266d84a75b.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    specs: { vram: "32GB GDDR7" },
    stock: "Out of Stock",
  },
  {
    id: "gpu-002",
    name: "ASUS ROG Strix RTX 5080",
    category: "Components",
    subCategory: "GPU",
    price: 1299.0,
    image:
      "https://img.overclockers.co.uk/images/GRA-ASU-03929/85f0f26a774d6e8f7ea051509189d669.jpg",
    specs: { vram: "16GB GDDR7" },
    stock: "In Stock",
  },
  {
    id: "ram-001",
    name: "G.Skill Trident Z5 RGB 64GB",
    category: "Components",
    subCategory: "RAM",
    price: 329.0,
    image: "https://m.media-amazon.com/images/I/71DiVTefKBL.jpg",
    variations: { speed: ["6400MHz", "8000MHz"] },
  },
  {
    id: "ssd-001",
    name: "Samsung 990 Pro 2TB",
    category: "Components",
    subCategory: "SSD",
    price: 179.0,
    image:
      "https://ak-asset.jarir.com/akeneo-prod/asset/e/3/0/1/e3015669dd327f69705829dbd185c82e211b0452_631428.jpg",
    specs: { type: "Gen4 NVMe" },
  },

  // ==========================================
  // ACCESSORIES
  // ==========================================
  {
    id: "kb-001",
    name: "Razer Huntsman V3 Tenkeyless",
    category: "Accessories",
    subCategory: "Keyboard",
    price: 175.0,
    image:
      "https://www.netcombrunei.com/media/catalog/product/cache/7fba28f2ffd14e7be21e170ce6bb6de8/r/a/razer-782.jpg",
    specs: { switches: "Hall Effect Magnetic" },
    tags: ["Rapid Trigger"],
  },
  {
    id: "mon-001",
    name: "Alienware AW3225QF",
    category: "Accessories",
    subCategory: "Monitor",
    price: 1199.0,
    image:
      "https://static.qantasloyalty.com/store-static-assets/desktop/pbqxjnhyqrmx5jw86knxyd3wiq.jpg",
    specs: { panel: "32-inch 4K QD-OLED 240Hz" },
  },
  {
    id: "mouse-001",
    name: "Logitech G Pro X Superlight 3",
    category: "Accessories",
    subCategory: "Mouse",
    price: 159.0,
    image: "https://click-dz.com/wp-content/uploads/2024/08/1-16.jpg",
    variations: { color: ["Black", "White", "Magenta"] },
  },
  {
    id: "hs-001",
    name: "Razer Barracuda Pro",
    category: "Accessories",
    subCategory: "Headset",
    price: 299.0,
    image: "https://gigastore-dz.com/wp-content/uploads/2025/07/789.jpg",
    specs: { driver: "Planar Magnetic" },
  },
];
