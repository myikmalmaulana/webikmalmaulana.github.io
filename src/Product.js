import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from './images/OIP.jpg';
import ProductDetails from './ProductDetails';

const products = [
  {
    id: 1,
    name: 'HARP Kettle EKJ-17L(W)',
    href: '#',
    price: 'Rp 320.000',
    imageSrc: 'https://assets.bmdstatic.com/web/image?model=product.template&field=image_1024&id=31&unique=9875614',
    description: 'Sharp Kettle EKJ-17L merupakan teko elektrik untuk memanaskan air secara praktis, cepat, dan mudah dengan kapasitas 1,7 liter. Konsumsi daya dari teko elektrik ini juga tidak besar yaitu 720 – 840 watt dan voltase 220V-240V. Bahan stainless steel yang digunakan dapat mengisolasi panas sehingga air akan tetap panas untuk waktu yang lama. Hadir dengan desain minimalis dan elegan serta harga yang terjangkau membuat teko elektrik Sharp ini cocok digunakan untuk di rumah, hotel, dll.',
  },
  {
    id: 2,
    name: 'MODENA Mesin Cuci Front Load WF 830',
    href: '#',
    price: 'Rp 7.064.000',
    imageSrc: 'https://assets.bmdstatic.com/web/image?model=product.template&field=image_1024&id=77&unique=184b5d0',
    description: 'Mesin Cuci Front Load, Kecepatan Peras: 1200rpm, Kapasitas: 8.5 kg, Jumlah Program Pencucian: 12 +6 program, LED display, Quick Wash, Inverter Motor, Anti-bacterial, Unbalance Protection',
  },
  {
    id: 3,
    name: 'MIYAKO Magic Com MCM-606 B',
    href: '#',
    price: 'Rp 120.000',
    imageSrc: 'https://assets.bmdstatic.com/web/image?model=product.product&field=image_1024&id=126&unique=e4aa157',
    description: 'Miyako kini kembali menghadirkan srebuah peralatan dapur yang memiliki banyak sekali fungsi untuk membantu para ibu memasak di dapur. Sebuah rice cooker cantik berwarna putih biru ini hadir dengan fitur-fitur unggulannya. Miyako Magic Com MCM 6066 B merupakan sebuah teknologi yang didesain sempurna untuk memasak nasi dengan fitur 3 in 1 dengan menggunakan bahan berkualitas tinggi. Magic Com ini khusus dikembangkan untuk kondisi di Indonesia dengan 3 elemen pemanas di bagian atas, tengah dan bawah. Dibuat dengan bodi plastik dan alumunium pan, Miyako Magic Com MCM 6066 B cocok diletakkan di mana saja dan dapat mempercantik dapur anda.',
  },
  {
    id: 4,
    name: 'MASPION Setrika Listrik EX-1000',
    href: '#',
    price: 'Rp 100.000',
    imageSrc: 'https://assets.bmdstatic.com/web/image?model=product.template&field=image_1024&id=164&unique=7843e52',
    description: 'SMaspion adalah salah satu merk alat elektronik rumah tangga terbaik di Indonesia. Salah satu produk unggulan Maspion adalah setrika listrik. Keunggulan setrika listrik ini adalah konsumsi daya listriknya rendah. Setrika hemat listrik ini hanya mengkonsumsi listrik 350 watt. Tapak setrika juga dibuat dari bahan anti lengket. Dengan begini, menyetrika akan lebih mudah dan cepat. Pakaian Anda juga tidak akan rusak akibat menempel dan terbakar. Selain itu, keunggulan lain dari setrika listrik Maspion adalah kabel yang kuat, fleksibel, dan tahan lama. Tersedia juga fitur untuk mengatur panas dan lampu indikator untuk memudahkan Anda mengetahui jika setrika siap digunakan. Segera beli setrika listrik Maspion yang asli dan berkualitas di Bhinneka.',
  },
  {
    id: 5,
    name: 'MIYAKO Kipas Angin KAD-06',
    href: '#',
    price: 'Rp 110.000',
    imageSrc: 'https://assets.bmdstatic.com/web/image?model=product.template&field=image_1024&id=332&unique=9134f3a',
    description: 'Miyako kipas angin KAD06 didesain dengan sangat praktis dan ekonomis dengan ukurannya yang kecil kipas ini dapat disimpan dimana saja dan dipakai kapan saja sehingga mudah untuk disimpan dan dipakai. Kipas angin multi fungsi ini dapat digunakan langsung ke listrik dengan daya 15 Watt. Kelebihan dari kipas ini selain, dengan body besi juga hembusan angin yang kencang, suara halus dan baling besi. Meskipun kipas kecil mungil dan lucu, membuat kipas ini menarik, mampu digunakan dalam pemakaian yang lama, simple dan mudah ditempatkan di mana saja.',
  },
  {
    id: 6,
    name: 'COSMOS Dispenser CWD-1138P',
    href: '#',
    price: 'Rp 227.500',
    imageSrc: 'https://assets.bmdstatic.com/web/image?model=product.template&field=image_1024&id=405&unique=f8f4a85',
    description: 'Cosmos CWD 1138 Water Dispenser merupakan dispenser dengan model pengisian dari atas yang dilengkapi knob untuk air panas dan air biasa, sehingga Anda dapat menyajikan air panas harus memasak terlebih dahulu. Dispenser ini terbuat dari bahan stainless steel berkualitas pada bagian tangkinya sehingga membuat air tetap higienis dan aman untuk digunakan',
  },
]

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    console.log('Closing details');
    setSelectedProduct(null);
  };

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full">
        <Navbar />

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button style={{ color: 'blue' }} onClick={() => handleProductClick(product)}>
                Details product
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}

    </div>
    <footer className='App-footer' class='h-0 block pt-32 pb-0' style={{ marginTop: '40px' }}>
      <Footer />
    </footer>
    </div>
  );
}

export default Product;
