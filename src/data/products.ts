export type Kategorija = 'konfiguracije' | 'laptopovi' | 'komponente' | 'periferija';
export type Namena = 'Gejming' | 'Kancelarija' | 'Radna stanica';

export type Product = {
  id: string;
  naziv: string;
  kategorija: Kategorija;
  proizvodjac: string;
  namena: Namena;
  cenaRsd: number;
  kratkeSpecifikacije: string[];
  imageSrc: string;
};

export const kategorije: Array<{ id: Kategorija; label: string }> = [
  { id: 'konfiguracije', label: 'Konfiguracije' },
  { id: 'laptopovi', label: 'Laptopovi' },
  { id: 'komponente', label: 'Komponente' },
  { id: 'periferija', label: 'Periferija' }
];

export const proizvodi: Product[] = [
  {
    id: 'cfg-neon-i9-4090',
    naziv: 'NEON Titan i9 + RTX 4090 Ultra',
    kategorija: 'konfiguracije',
    proizvodjac: 'NEON Systems',
    namena: 'Gejming',
    cenaRsd: 259990,
    kratkeSpecifikacije: ['Intel i9-14900K', 'GeForce RTX 4090 24GB', '64GB DDR5', '2TB NVMe + 1000W PSU'],
    imageSrc: 'cfg-01'
  },
  {
    id: 'cfg-ryzen-7950x-rtx-4080',
    naziv: 'NEON Radna stanica Ryzen 9 + RTX 4080',
    kategorija: 'konfiguracije',
    proizvodjac: 'NEON Systems',
    namena: 'Radna stanica',
    cenaRsd: 199990,
    kratkeSpecifikacije: ['Ryzen 9 7950X', 'RTX 4080 16GB', '64GB DDR5', '2TB NVMe + 850W PSU'],
    imageSrc: 'cfg-02'
  },
  {
    id: 'cfg-office-i7-rtx4060',
    naziv: 'Kancelarijski Pro i7 + RTX 4060',
    kategorija: 'konfiguracije',
    proizvodjac: 'ASUS',
    namena: 'Kancelarija',
    cenaRsd: 109990,
    kratkeSpecifikacije: ['Intel i7-14700F', 'RTX 4060 8GB', '32GB DDR5', '1TB NVMe + 650W PSU'],
    imageSrc: 'cfg-03'
  },
  {
    id: 'lap-rog-4090',
    naziv: 'ROG Strix Scar 18 - RTX 4090',
    kategorija: 'laptopovi',
    proizvodjac: 'ASUS',
    namena: 'Gejming',
    cenaRsd: 329990,
    kratkeSpecifikacije: ['i9-13980HX', 'RTX 4090 laptop 16GB', '32GB DDR5', '18" QHD 240Hz'],
    imageSrc: 'lap-01'
  },
  {
    id: 'lap-legion-creator',
    naziv: 'Legion Kreator 7 - RTX 4070',
    kategorija: 'laptopovi',
    proizvodjac: 'Lenovo',
    namena: 'Radna stanica',
    cenaRsd: 179990,
    kratkeSpecifikacije: ['Ryzen 9 7940HS', 'RTX 4070 8GB', '32GB RAM', '16" 2.5K 165Hz'],
    imageSrc: 'lap-02'
  },
  {
    id: 'lap-office-slim',
    naziv: 'ThinkPad P16v - Kancelarija i Rad',
    kategorija: 'laptopovi',
    proizvodjac: 'Lenovo',
    namena: 'Kancelarija',
    cenaRsd: 129990,
    kratkeSpecifikacije: ['Intel i7-1360P', 'RTX 4060 8GB', '32GB RAM', '16" WUXGA'],
    imageSrc: 'lap-03'
  },
  {
    id: 'comp-creator-rtx-4080',
    naziv: 'Komplet Komponenti: RTX 4080 + DDR5 64GB',
    kategorija: 'komponente',
    proizvodjac: 'MSI',
    namena: 'Radna stanica',
    cenaRsd: 139990,
    kratkeSpecifikacije: ['RTX 4080 16GB', '64GB DDR5', 'Z690 platforma', '2TB NVMe'],
    imageSrc: 'comp-01'
  },
  {
    id: 'peri-neon-setup',
    naziv: 'Neon Set: Tastatura + Miš + Slušalice',
    kategorija: 'periferija',
    proizvodjac: 'Corsair',
    namena: 'Gejming',
    cenaRsd: 34990,
    kratkeSpecifikacije: ['Mehanička tastatura', 'RGB miš 26K DPI', 'Surround slušalice', 'RGB kontrola'],
    imageSrc: 'peri-01'
  }
];
